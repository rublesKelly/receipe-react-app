import React from 'react'
import '../Styles/SearchResults.css'
import RecipeCard from "./RecipeCard";

function SearchResults(props) {
// console.log(props);

    return (
        <div id="search-results">
            <div id="search-result">
                {props.results.map((eachItem) =>
                    (<RecipeCard
                        id={eachItem.id} 
                        title={eachItem.title}
                        image={eachItem.image}
                        description={eachItem.summary}
                        prepTime={eachItem.readyInMinutes}
                        vegan={eachItem.vegan}
                        onAddRecipeClicked={props.onAddRecipeClicked}

                    />)
                )}
            </div>
        </div>
    )
}

export default SearchResults
