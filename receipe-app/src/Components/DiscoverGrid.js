import React, {useState} from 'react'
import ReceipeCard from "./ReceipeCard";
import ReceipeThumbnail from "./ReceipeThumbnail";
import '../App.css'
import egg from '../Assets/egg-fried-rice.jpg'

function DiscoverGrid({recomendations}) {
    const [helperarray, setHelperarray] = useState([1,2,3,4,5,5])
    const [discoverTitle1, setDiscoverTitle1] = useState('French Cusine')
    const [helperArray, setHelperArray] = useState([1,2,3,4])
    return (
        <div id="discover-section">
            <h1  id="discover-greeting">Good Afternoon</h1>
            <div className="quick-links-grid">
                {helperarray.map((eachItem) =>
                    (<ReceipeCard
                        id={eachItem.id} 
                        title={'Recomended reciepes ;)'}
                        image={egg}
                        description={'shortdescription'}
                        // prepTime={eachItem.readyInMinutes}
                        // vegan={eachItem.vegan}

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
