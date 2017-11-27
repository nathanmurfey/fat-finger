var React = require('react');
var WeatherTitle = require('WeatherTitle');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    onFormSubmit: function (location) {
        var that = this;

        debugger;

        this.setState({isLoading: true});

        // this is the callback function that allows your to update the temp
        var cb = function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        };

        var cb_error = function (errorMessage) {
            that.setState({isLoading:false});
            alert(errorMessage);
        };

        openWeatherMap.getTemp(location).then(cb, cb_error);
    },
    render: function () {
        var {isLoading, location, temp} = this.state;

        function renderMessage() {
            if (isLoading){
                return <h3>Fetching weather...</h3>;
            } else if (temp && location){
                return <WeatherMessage location={location} temp={temp} />;
            }
        }

        return(
            <div>
                <WeatherTitle />
                <WeatherForm onSearch={this.onFormSubmit}/>
                {renderMessage()}
            </div>

        );
    }
});

module.exports = Weather;
