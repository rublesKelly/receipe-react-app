import {React, useState} from 'react'
import { api } from "../axios";
import SearchResults from './SearchResults';

function SearchBar() {

    //Setting state for controlled form component 
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])
    const [showResults, setShowResults] = useState(false)

    //On Submit Handler calls the fetch request with the search term
    const onSubmitHandler = (e) => {
        e.preventDefault()
        //Async all ways returns a promise so the  the .then is neccessary
        const res = api.getReceipebyQuery(searchTerm)
        .then((res) => setResults(res.results))
        setShowResults(true)
        console.log(results);
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
                <input type="button" onClick={results => setShowResults(!showResults)}/>  
           </form> 
           {results.length > 0 && showResults ? 
           <SearchResults results={results}/>: <div>No results yet</div> } 
           {console.log(results.length)}
        </div>
    )
}

export default SearchBar
