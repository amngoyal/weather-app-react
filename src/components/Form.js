import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit = {this.props.getWeather}>
                    <input name='city' placeholder ='City.....'/>
                    <input name='country' placeholder ='Country.....'/>
                    <button type='submit'>Get Weather</button>
                </form>
            </div>
        )
    }
}

export default Form
