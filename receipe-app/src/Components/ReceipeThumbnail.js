import React, {useState} from 'react'
import "../Styles/Thumbnail.css";
function ReceipeThumbnail({id, title, image, onAddReceipeClicked}) {

    //Declare state
    const [, setThumnailClass] = useState('initialState')

    return (
        <div id='thumbnail' onClick={()=>onAddReceipeClicked(id)}>
            <div id="thumb-image">
                <img src={image} alt="image not found" id="thumb-image" />
            </div>
            <div id="thumb-tab">
                <h6 id="thumb-title">
                    {title}
                </h6>
            <div id="expanded-thumbnail">
                <ul>
                    
                </ul>
            </div>
            </div>
        </div>
    )
}

export default ReceipeThumbnail


