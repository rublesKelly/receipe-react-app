import React from 'react'
import egg from '../Assets/egg-fried-rice.jpg'

function ReceipeThumbnail() {
    return (
        <div id='thumbnail'>
            <div id="thumb-image">
                <img src={egg} alt="image not found" id="thumb-image" />
            </div>
            <div id="thumb-tab">
                <h6 id="thumb-title">
                    Chicken pot pie
                </h6>
            </div>
        </div>
    )
}

export default ReceipeThumbnail


