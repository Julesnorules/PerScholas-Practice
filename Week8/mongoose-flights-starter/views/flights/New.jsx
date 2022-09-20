const React = require('react');

const New = (props) => {
    return (
    <div>
        <h1> New Route </h1>

        <form action="/flights" method="POST">
            <label>Airline:</label>
            <input type="text" name="airline" /><br/>
            <label>FlightNo:</label>
            <input type="number" name="flightNo" /><br/>
            <label>Departure Date/Time:</label>
            <input type="datetime-local" name="departs"></input><br/>
            <input type="submit" name="" value="Create Flight!" />
        </form>
    </div>
    )
}

module.exports = New;