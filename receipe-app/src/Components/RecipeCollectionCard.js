import React, {useState} from 'react'
import "../Styles/RecipeCollectionCard.css";
import RecipeCollection from './RecipeCollection';

function RecipeCollectionCard(props) {
    
    const [showCollection, setShowCollection] = useState(false)
    

    return (
    <div id='recipe-collection'>
        <a id="collection-card-link" onClick={()=> setShowCollection(state => !state)}>
            <div id='recipe-collection-card'>
                <div id="collection-image">
                    <img src={props.image} alt="" id='collection-image'/>
                </div>
                <div id="collection-card-title">
                    <h3 id="collection-card-title">{props.title}</h3>
                </div>
            </div>
        </a>
        {showCollection && <RecipeCollection recipes={props.recipes}/>}
    </div>
    )
}

export default RecipeCollectionCard