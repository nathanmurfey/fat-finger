var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples!</h1>
            <p>here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Melbourne">Melbourne, AUS</Link>
                </li>
                <li>
                    <Link to="/?location=Sydney">Sydeny, AUS</Link>
                </li>
            </ol>
        </div>
    );
}

module.exports = Examples;