import React from 'react'

function ReceipeCard() {
    return (
        <div receipe-card>
            <img src="props" alt="receipe-not-found" id="receipe-card-image" />
            <h2 id="receipe-card-title">Chicken Beetroot Stew</h2>
            <h4 id="reciepe-card-preptime">23 Yrs</h4>
            <i id='vegan-friendly-icon'>Vegan</i>
            <i id='vegatarian-friendly-icon'>Veg</i>
            <i id='dairy-free-icon'>dairy-free</i>
            <i id='my-diet-friendly'>Yes</i>
        </div>
    )
}

export default ReceipeCard
