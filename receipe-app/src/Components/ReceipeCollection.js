import React from 'react'
import ReceipeCard from './ReceipeCard'
import ReceipeCollectionCard from './ReceipeCollectionCard'

function ReceipeCollection({receipes}) {
    return (
        <div id='receipe-collection'>
            <div id='receipe-collection-item'>
                {receipes.map(receipe => 
                    <ReceipeCard
                        title={receipe.title}
                        image={receipe.image}
                    />
                )}
            </div>
        </div>
    )
}

export default ReceipeCollection