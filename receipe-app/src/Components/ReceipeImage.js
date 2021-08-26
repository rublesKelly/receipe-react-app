import React from 'react';
import '../App.css'

function ReceipeImage ({image}) {
   
    return (
        <div id='receipe-image'>
            <img src = {image} alt=''/>
        </div>
    )
}

export default ReceipeImage