var React = require('react');

var About = props => {
    return(
        <div>
            <h1 className="text-center">About!</h1>
            <p>This is a weather application built on react, I built this as part of the complete react web developer course</p>
            <p>Here are some of the tools I used</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
                </li>
                <li>
                    <a href="https://openweathermap.org/">OpenWeatherMap</a> - This was the Weather API that I used  .
                </li>
            </ul>
        </div>
    );
}

module.exports = About;