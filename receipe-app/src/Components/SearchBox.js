import React from 'react'

function SearchBox() {
    return (
        <div>
            <form action="/" method='get/post_here'>
                <label htmlFor="search-bar">Search for Receipes</label>
                <input 
                    type="search"
                    id='search-bar'
                    placeholder='dont knwo what to put here'
                />
            </form>
        </div>
    )
}

export default SearchBox
