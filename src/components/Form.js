import React from 'react'

//Stateless Functional Component
const Form = props => (
    <div>
        <form onSubmit={props.getWeather}>
            <input name='city' placeholder='City.....' />
            <input name='country' placeholder='Country.....' />
            <button type='submit'>Get Weather</button>
        </form>
    </div>
)



export default Form

