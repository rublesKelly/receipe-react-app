import React from 'react';
import '../App.css'
import src from "./egg-fried-rice.jpg"

function ReceipeImage (props) {
   
    return (
        <div className="ReciepeImage">
            <img src = {src} />
        </div>
    )
}

export default ReceipeImage