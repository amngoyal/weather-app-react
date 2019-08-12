import React from 'react'
import PropTypes from 'prop-types'

//Using Stateless Functional Components
const Weather = props => (
    <div>
        {props.weather.city && props.weather.country && <p>Location: {props.weather.city}, {props.weather.country}</p>}
        {props.weather.temperature && <p>Temperature: {props.weather.temperature}</p>}
        {props.weather.humidity && <p>Humidity: {props.weather.humidity}</p>}
        {props.weather.description && <p>Description: {props.weather.description}</p>}
        {props.weather.error && <p>{props.weather.error}</p>}
    </div>
)


Weather.propTypes = {
weather: PropTypes.object.isRequired
}

export default Weather

