import React from 'react'
import '../Styles/ReceipeCard.css'
// import { Link } from "react-router-dom";

function ReceipeCard(props) {
    
    return (
        // <Link to={`/${props.id}`}>
        <div className='receipe-card'>
            <div id='receipe-card-image'>
                <img src={props.image} alt="receipe-not-found" id="receipe-card-image" />
            </div>
            <div id='receipe-card-long-text-info'>
                <h4 id="receipe-card-title">{props.title}</h4>
                <p>{props.description}</p>
                {/* <button onClick={()=>props.onAddReceipeClicked(props.id)}>GoTo</button> */}
            </div>
            <div id="receiep-card-short-text-info">
                <h4 id="reciepe-card-preptime">{props.prepTime}</h4>
                <i id='vegan-friendly-icon'>{props.vegan}</i>
                <i id='vegatarian-friendly-icon'></i>
                <i id='dairy-free-icon'></i>
                <i id='my-diet-friendly'></i>
            </div>
        </div>
    // </Link>
    )
}

export default ReceipeCard
