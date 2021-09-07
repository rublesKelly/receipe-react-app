import React, {useState} from 'react'
import ReceipeCollectionCard from './ReceipeCollectionCard';
import ReceipeThumbnail from "./ReceipeThumbnail";
import '../App.css'

function DiscoverGrid({userData}) {

    const [discoverTitle1, setDiscoverTitle1] = useState('French Cusine')
    const [helperArray, setHelperArray] = useState([1,2,3,4])

    return (
        <div id="discover-section">
            <h1  id="discover-greeting">Good Afternoon</h1>
            <div className="quick-links-grid">
                {userData.map((eachItem) =>
                    (<ReceipeCollectionCard
                        title={eachItem.title}
                        image={eachItem.image}
                        
                    />)
            )}
            </div>
            <h1  id="discover-title">{discoverTitle1}</h1>
            <div id="discover-section1">
                {helperArray.map((eachIem)=>
                    <ReceipeThumbnail/>)}

            </div>
        </div>        
    )
}

export default DiscoverGrid
