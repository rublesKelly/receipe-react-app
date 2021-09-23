import React from 'react'
import '../Styles/RecipeGrid.css'
import IngredientList from './IngredientsList';
import StepsList from './StepsList';
import RecipeImage from './RecipeImage';
import RecipeHeader from './RecipeHeader';

function RecipeGrid({recipe}) {
    return (
        <div id='recipe-grid'>
            <RecipeHeader  recipeTitle = {recipe.title} 
                            vegan = {recipe.vegan}
                            vegetarian = {recipe.vegetarian}
                            glutenFree = {recipe.glutenFree}
                            dairyFree = {recipe.dairyFree}
                            readyInMinuites = {recipe.readyInMinuites}
                            servings = {recipe.servings}
            />
            <RecipeImage   image = {recipe.image}/>
            <IngredientList ingredients = {recipe.ingredients} />
            <StepsList      steps = {recipe.steps} />
        </div>
    )
}

export default RecipeGrid
