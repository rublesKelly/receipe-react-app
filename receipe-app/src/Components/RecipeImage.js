import React from 'react';
import '../App.css'

function RecipeImage ({image}) {
   
    return (
        <div id='recipe-image'>
            <img src = {image} alt=''/>
        </div>
    )
}

export default RecipeImage