import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        return (
            <div>
                <p>Location: {this.props.weather.city} {this.props.weather.country}</p>
                <p>Temperature: {this.props.weather.temperature}</p>
                <p>Humidity: {this.props.weather.humidity}</p>
                <p>Description: {this.props.weather.description}</p>
            </div>
        )
    }
}

export default Weather
