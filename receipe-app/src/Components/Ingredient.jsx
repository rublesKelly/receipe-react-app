import React from 'react'

function Ingredient({ingredient}) {
    return (
        <div>
            <li>{ingredient.name} {ingredient.amount} {ingredient.unit}</li>
        </div>
    )
}

export default Ingredient
