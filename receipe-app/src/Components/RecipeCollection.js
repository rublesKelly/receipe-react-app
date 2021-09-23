import React from 'react'
import RecipeCard from './RecipeCard'
import RecipeCollectionCard from './RecipeCollectionCard'

function RecipeCollection({recipes}) {
    return (
        <div id='recipe-collection'>
            <div id='recipe-collection-item'>
                {recipes.map(recipe => 
                    <RecipeCard
                        title={recipe.title}
                        image={recipe.image}
                    />
                )}
            </div>
        </div>
    )
}

export default RecipeCollection