import React, {useState} from 'react'
import '../Styles/Thumbnail.css'
import egg from '../Assets/egg-fried-rice.jpg'

function RecipeThumbnail({id, title, image, onAddRecipeClicked}) {

    //Declare state
    const [, setThumnailClass] = useState('initialState')

    return (
        <div id='thumbnail' onClick={()=>onAddRecipeClicked(id)}>
            <div id="thumb-image">
                <img src={image} alt="image not found" id="thumb-image" />
            </div>
            <div id="thumb-tab">
                <h3 id="thumb-title">
                    {title}
                </h3>
            {false && <div id="expanded-thumbnail">
                <ul>
                    
                </ul>
            </div>}
            </div>
        </div>
    )
}

export default RecipeThumbnail


