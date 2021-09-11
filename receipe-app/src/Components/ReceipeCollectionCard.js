import React, {useState} from 'react'
import "../Styles/ReceipeCollectionCard.css";
import ReceipeCollection from './ReceipeCollection';

function ReceipeCollectionCard(props) {
    
    const [showCollection, setShowCollection] = useState(false)
    

    return (
    <div>
        <a id="collection-card-link" onClick={()=> setShowCollection(state => !state)}>
            <div id='receipe-collection-card'>
                <div id="collection-image">
                    <img src={props.image} alt="" id='collection-image'/>
                </div>
                <div id="collection-card-title">
                    <h4 id="collection-card-title">{props.title}</h4>
                </div>
            </div>
        </a>
        {showCollection && <ReceipeCollection receipes={props.receipes}/>}
    </div>
    )
}

export default ReceipeCollectionCard