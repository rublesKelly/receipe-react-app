import React from 'react';
import '../App.css';
import Ingredient from './Ingredient'

function IngredientsList(props) {
    
    return (
        <div>
            <div className='Ingredients-List'>
                <ul>
                    {props.Ingredients.map((newArray) => 
                        (<Ingredient Ingredient={newArray}/>)
                    )}               
                </ul>
            </div>
        </div>
        )
    }


export default IngredientsList
