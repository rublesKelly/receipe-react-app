import React from 'react'
import Step from './Step'

function StepsList(props) {

//console.log(props.Steps[1].step)

   return (
        <div className="Steps-List">
            <ul>
            {props.Steps.map((eachItem => (
                    <Step Step={eachItem.step}/>
                )))}                
            </ul>            
        </div>
    )
}

export default StepsList

