import {React, useState} from 'react'
import { api } from "../axios";
import '../Styles/SearchBar.css'
import SearchResults from './SearchResults';

function SearchBar(props) {

    //Setting state for controlled form component 
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])
    const [showResults, setShowResults] = useState(true)

    //On Submit Handler calls the fetch request with the search term
    const onSubmitHandler = (e) => {
        e.preventDefault()
        //Async all ways returns a promise so the  the .then is neccessary
        api.getReceipebyQuery(searchTerm)
            .then((res) => setResults(res.results))
            setShowResults(true)
    }

    return (
        <div id='search-bar'>
           <form id='search-form'onSubmit={onSubmitHandler}>
               <label htmlFor="search-bar"></label>
                <input 
                    id='search-input'
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} //onChangeHandler
                    
                 />
                <input type="submit" />  
                {/* <input type="button" onClick={results => setShowResults(!showResults)}/>   */}
           </form> 
           {results.length > 0 && showResults &&
           <SearchResults   results={results}
                            onAddReceipeClicked={props.onAddReceipeClicked}
           />} 
        </div>
    )
}

export default SearchBar
