import React, {useState} from 'react'
import '../Styles/Thumbnail.css'
import egg from '../Assets/egg-fried-rice.jpg'

function RecipeThumbnail({id, title, image, onAddRecipeClicked}) {

    //Declare state
    const [thumnailClass, setThumnailClass] = useState('initialState')
    const [isHover, setIsHover] = useState(null)

    return (
        <div 
         id='thumbnail' 
         onClick={()=>onAddRecipeClicked(id)}
         onMouseOver={()=>setIsHover(state=>!state)}
         onMouseOut={()=>setIsHover(state=>!state)}
        >
            <div id="thumb-image">
                <img src={image} alt="image not found" id="thumb-image" />
            </div>
            <div id={isHover ? 'thumb-tab-expanded' : "thumb-tab"}>
                <h3 id="thumb-title">
                    {title}
                </h3>
            {isHover && 
                <div id="expanded-thumbnail">
                    
                </div>}
            </div>
        </div>
    )
}

export default RecipeThumbnail


