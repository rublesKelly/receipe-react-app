import React from 'react';
import '../App.css';
import Ingredient from './Ingredient'

function IngredientsList({ingredients}) {
    
    console.log(ingredients)

    return (
        <div>
            <div id ='ingredients-list'>
                <ul>
                    {ingredients && 
                    ingredients.map((eachItem) => 
                        (<Ingredient ingredient={eachItem}/>)
                    )}               
                </ul>
            </div>
        </div>
        )
    }


export default IngredientsList
