import React from 'react'
import Step from './Step'

function StepsList(props) {

   return (
        <div className="Steps-List">
            <ul>
            {props.Steps.map((newArray => (
                    <Step Step={newArray}/>
                )))}                
            </ul>            
        </div>
    )
}

export default StepsList

