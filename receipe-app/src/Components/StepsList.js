import React from 'react'
import Step from './Step'

function StepsList({steps}) {

//console.log(props.Steps[1].step)

   return (
        <div id='steps-list'>
            <ul>
            {steps && steps.map((eachItem) => (
                    <Step step={eachItem}/>
                ))}                
            </ul>            
        </div>
    )
}

export default StepsList

