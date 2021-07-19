import React from 'react';
import '../App.css'

function ReceipeImage (props) {
   
    return (
        <div className="reciepe-image">
            <img src = {props.src} />
        </div>
    )
}

export default ReceipeImage