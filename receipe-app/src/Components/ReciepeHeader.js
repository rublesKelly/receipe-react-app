import React from 'react'

function ReciepeHeader(props) {
    return (
        <div id='receipe-header'>
            <h2 >{props.receiepeTitle}</h2>
            <h3>Vegan {props.vegan ? 'yes yes': 'no no'}</h3>
            <h3>Time {props.readyInMinuites}</h3>
            <h3>Servings {props.servings} </h3>
        </div>
    )
}

export default ReciepeHeader
