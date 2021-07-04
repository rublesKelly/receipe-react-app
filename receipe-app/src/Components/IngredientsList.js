import React from 'react';
import '../App.css';
import Ingredient from './Ingredient'

function IngredientsList(props) {
    
    console.log(props)

    return (
        <div>
            <div className='Ingredients-List'>
                <ul>
                    {props.Ingredients.map((eachItem) => 
                        (<Ingredient Ingredient={eachItem.name}/>)
                    )}               
                </ul>
            </div>
        </div>
        )
    }


export default IngredientsList
