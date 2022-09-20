const React = require('react');
const DefaultLayout = require('../components/Default');

const Index = (props) => {
    return (
        <DefaultLayout title={"Flights Index Page"}>
        <div>
            <h1> Index Route </h1>
            <a href="/flights/new">Create a New Flight!</a>
            <ul>
            { props.flights.map((flight, index) => {
                return (
                    <li key={index}>
                        Your <a href= {`flights/${flight._id}`}>{flight.airline}</a>Flight number is {flight.flightNo}and the flight leaves at {flight.departs}.
                    </li>
                )}
                )
            }
            </ul>
        </div>
        </DefaultLayout>
    )
}

module.exports = Index;