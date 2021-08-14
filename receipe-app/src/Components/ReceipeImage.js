import React from 'react';
import '../App.css'

function ReceipeImage (props) {
   
    return (
        <div id='receipe-image'>
            <img src = {props.src} />
        </div>
    )
}

export default ReceipeImage