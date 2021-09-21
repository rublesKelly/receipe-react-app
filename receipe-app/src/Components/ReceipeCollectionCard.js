import React, {useState} from 'react'
import "../Styles/ReceipeCollectionCard.css";
import ReceipeCollection from './ReceipeCollection';

function ReceipeCollectionCard(props) {
    
    const [showCollection, setShowCollection] = useState(false)
    

    return (
    <div id='receipe-collection'>
        <a id="collection-card-link" onClick={()=> setShowCollection(state => !state)}>
            <div id='receipe-collection-card'>
                <div id="collection-image">
                    <img src={props.image} alt="" id='collection-image'/>
                </div>
                <div id="collection-card-title">
                    <h3 id="collection-card-title">{props.title}</h3>
                </div>
            </div>
        </a>
        {showCollection && <ReceipeCollection receipes={props.receipes}/>}
    </div>
    )
}

export default ReceipeCollectionCard