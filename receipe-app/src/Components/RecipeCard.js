import React from 'react'
import '../Styles/RecipeCard.css'
// import { Link } from "react-router-dom";

function RecipeCard(props) {
    
    return (
        // <Link to={`/${props.id}`}>
        <a onClick={() => props.onAddRecipeClicked(props.id)}>
            <div className='recipe-card'>
                <div id='recipe-card-image'>
                    <img src={props.image} alt="recipe-not-found" id="recipe-card-image" />
                </div>
                <div id='recipe-card-long-text-info'>
                    <h3 id="recipe-card-title">{props.title}</h3>
                    <p>{props.description}</p>
                    {/* <button onClick={()=>props.onAddRecipeClicked(props.id)}>GoTo</button> */}
                </div>
                <div id="receiep-card-short-text-info">
                    <h3 id="recipe-card-preptime">{props.prepTime}</h3>
                    <i id='vegan-friendly-icon'>{props.vegan}</i>
                    <i id='vegatarian-friendly-icon'></i>
                    <i id='dairy-free-icon'></i>
                    <i id='my-diet-friendly'></i>
                </div>
            </div>
        </a>
    // </Link>
    )
}

export default RecipeCard
