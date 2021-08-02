import React, {useState} from 'react'
import ReceipeCard from "./ReceipeCard";
import '../App.css'
import egg from '../Assets/egg-fried-rice.jpg'

function DiscoverGrid({recomendations}) {
    const [helperarray, setHelperarray] = useState([1,2,3,4,5,5])

    return (
        <div className="discover-grid">
            
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
        
    )
}

export default DiscoverGrid
