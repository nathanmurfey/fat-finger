var axios = require('axios');
const API_KEY = 'f1c1884b82f9f3a9d1bb74695330a2bb';
const UNITS = 'metric';
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=${UNITS}`;

// f1c1884b82f9f3a9d1bb74695330a2bb
//http://samples.openweathermap.org/data/2.5/weather?appid=f1c1884b82f9f3a9d1bb74695330a2bb

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}