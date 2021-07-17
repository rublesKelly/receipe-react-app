import React from 'react';
import '../App.css'
import src from "./egg-fried-rice.jpg"

function ReceipeImage (props) {
   
    return (
        <div className="reciepe-image">
            <img src = {props.src} />
        </div>
    )
}

export default ReceipeImage