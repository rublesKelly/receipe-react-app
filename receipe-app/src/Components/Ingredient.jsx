import React from 'react'

function Ingredient({ingredient}) {
    return (
        <div>
            <li>{ingredient.name}</li>
        </div>
    )
}

export default Ingredient
