import React from 'react'
import ReceipeCard from "./ReceipeCard";

function SearchResults(props) {
// console.log(props.searchResults.results);
console.log(props);

    return (
        <div id="search-results">
            <p>jlksadfjsadflkasjdlfjlkasfdjlsakfdjlsajdlkfjlksajdflksajdfk</p>
            {/* <div id="search-result">
                {props.searchResults.map((eachItem) =>
                    (<ReceipeCard
                        id={eachItem.id} 
                        title={eachItem.title}
                        image={eachItem.image}
                        description={eachItem.summary}
                        prepTime={eachItem.readyInMinutes}
                        vegan={eachItem.vegan}

                    />)
                )}
            </div> */}
        </div>
    )
}

export default SearchResults
