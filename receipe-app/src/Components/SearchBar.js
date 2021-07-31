import {React, useState} from 'react'
import { api } from "../axios";
import SearchResults from './SearchResults';

function SearchBar() {

    //Setting state for controlled form component 
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState({})

    //On Submit Handler calls the fetch request with the search term
    const onSubmitHandler = (e) => {
        e.preventDefault()
        //Async all ways returns a promise so the  the .then is neccessary
        const res = api.getReceipebyQuery(searchTerm)
        .then((res) => setResults(res))
        // console.log(results);
    }

    return (
        <div>
           <form id='search-bar' onSubmit={onSubmitHandler}>
               <label htmlFor="search-bar"></label>
                <input 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} //onChangeHandler
                    
                 />
                <input type="submit" />    
           </form> 
           <SearchResults results={results}/>
           {/* {console.log(results)} */}
        </div>
    )
}

export default SearchBar
