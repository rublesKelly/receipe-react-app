import React from 'react'
import ReceipeCard from './ReceipeCard'
import ReceipeCollectionCard from './ReceipeCollectionCard'

const array = [1,2,3,4,5,6]


function ReceipeCollection() {
    return (
        <div id='receipe-collection'>
            <div id='receipe-collection-item'>
                {array.map(eachCard => 
                    <ReceipeCard/>
                )}
            </div>
        </div>
    )
}

export default ReceipeCollection
