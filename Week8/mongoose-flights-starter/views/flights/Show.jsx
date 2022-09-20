const React = require('react');
const Show = (props) => {
    return(
        <div>
            <h1>
                Show Page
            </h1>
            <p>
                Your {props.flights.airline} flight number is {props.flights.flightNo} and the flight leaves at {props.flights.departs}.
            </p>
        </div>
    )
}

module.exports = Show;