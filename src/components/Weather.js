import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        return (
            <div>
                {this.props.weather.city && this.props.weather.country && <p>Location: {this.props.weather.city}, {this.props.weather.country}</p>}
                {this.props.weather.temperature && <p>Temperature: {this.props.weather.temperature}</p>}
                {this.props.weather.humidity && <p>Humidity: {this.props.weather.humidity}</p>}
                {this.props.weather.description && <p>Description: {this.props.weather.description}</p>}
                {this.props.weather.error && <p>{this.props.weather.error}</p>}
            </div>
        )
    }
}

export default Weather
