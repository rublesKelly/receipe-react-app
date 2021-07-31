import {React, useState} from 'react'
import { api } from "../axios";
import SearchResults from './SearchResults';

function SearchBar() {

    //Setting state for controlled form component 
    const [SearchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState({})

    //On Submit Handler calls the fetch request with the search term
    const onSubmitHandler = (e) => {
        e.preventDefault()
        // console.log(SearchTerm);
        setResults(api.getReceipebyQuery(SearchTerm))
        .then(console.log(results))
    }

    //onChangeHandler
    const onChangeHandler = (e) => {
        // console.log(e.target.value);
    }
    return (
        <div>
           <form id='search-bar' onSubmit={onSubmitHandler}>
               <label htmlFor="search-bar"></label>
                <input 
                    type="text" 
                    value={SearchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    
                 />
                <input type="submit" />    
           </form> 
           {results ? <SearchResults results={results}/> : alert('no search done') }
        </div>
    )
}

export default SearchBar
