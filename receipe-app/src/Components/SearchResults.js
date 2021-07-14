import React from 'react'
import ReceipeCard from "./ReceipeCard";

function SearchResults(props) {

    return (
        <div id="search-results">
            <div id="search-result">
                {props.searchResults.map((eachItem) =>
                (<ReceipeCard Receipe = {eachItem.name}/>)
                )}
            </div>
        </div>
    )
}

export default SearchResults
