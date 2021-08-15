import React from 'react'
import '../Styles/SearchResults.css'
import ReceipeCard from "./ReceipeCard";

function SearchResults(props) {
// console.log(props);

    return (
        <div id="search-results">
            <div id="search-result">
                {props.results.map((eachItem) =>
                    (<ReceipeCard
                        id={eachItem.id} 
                        title={eachItem.title}
                        image={eachItem.image}
                        description={eachItem.summary}
                        prepTime={eachItem.readyInMinutes}
                        vegan={eachItem.vegan}
                        onAddReceipeClicked={props.onAddReceipeClicked}

                    />)
                )}
            </div>
        </div>
    )
}

export default SearchResults
