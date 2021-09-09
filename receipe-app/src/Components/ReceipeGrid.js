import React from 'react'
import '../Styles/ReceipeGrid.css'
import IngredientList from './IngredientsList';
import StepsList from './StepsList';
import ReceipeImage from './ReceipeImage';
import ReceipeHeader from './ReciepeHeader';

function ReceipeGrid({receipe}) {
    return (
        <div id='receipe-grid'>
            <ReceipeHeader  receiepeTitle = {receipe.title} 
                            vegan = {receipe.vegan}
                            vegetarian = {receipe.vegetarian}
                            glutenFree = {receipe.glutenFree}
                            dairyFree = {receipe.dairyFree}
                            readyInMinuites = {receipe.readyInMinuites}
                            servings = {receipe.servings}
            />
            <ReceipeImage   image = {receipe.image}/>
            <IngredientList ingredients = {receipe.ingredients} />
            <StepsList      steps = {receipe.steps} />
        </div>
    )
}

export default ReceipeGrid
