import React from 'react'
import '../Styles/ReceipeGrid.css'
import IngredientList from './IngredientsList';
import StepsList from './StepsList';
import ReceipeImage from './ReceipeImage';
import ReceipeHeader from './ReciepeHeader';

function ReceipeGrid({receipe}) {
    return (
        <div id='receipe-grid'>
            <ReceipeHeader receiepeTitle = {receipe.title} />
            <ReceipeImage   />
            <IngredientList ingredients = {receipe.ingredients} />
            <StepsList      steps = {receipe.steps} />
        </div>
    )
}

export default ReceipeGrid
