import React from 'react'
import ReceipeCard from "./ReceipeCard";

function SearchResults(props) {
console.log(props.results);

    return (
        <div id="search-results">
            <div id="search-result">
                {props.results.results? props.results.results.map((eachItem) =>
                    (<ReceipeCard
                        id={eachItem.id} 
                        title={eachItem.title}
                        image={eachItem.image}
                        description={eachItem.summary}
                        prepTime={eachItem.readyInMinutes}
                        vegan={eachItem.vegan}

                    />)
                ): alert('no search conducted')}
            </div>
        </div>
    )
}

export default SearchResults
