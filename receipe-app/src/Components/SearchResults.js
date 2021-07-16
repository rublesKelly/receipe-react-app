import React from 'react'
import ReceipeCard from "./ReceipeCard";

function SearchResults(props) {
console.log(props.searchResults.results);
console.log(props);

    return (
        <div id="search-results">
            <div id="search-result">
                {props.searchResults.results.map((eachItem) =>
                    (<ReceipeCard/>)
                )}
            </div>
        </div>
    )
}

export default SearchResults
