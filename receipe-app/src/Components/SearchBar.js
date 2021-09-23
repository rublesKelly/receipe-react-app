import {React, useState} from 'react'
import { api } from "../axios";
import '../Styles/SearchBar.css'
import {AiOutlineSearch } from "react-icons/ai";


function SearchBar({setResults, setShowResults}) {

    //Setting state for controlled form component 
    const [searchTerm, setSearchTerm] = useState('')

    //On Submit Handler calls the fetch request with the search term
    const onSubmitHandler = (e) => {
        e.preventDefault()
        //Async all ways returns a promise so the  the .then is neccessary
        api.getRecipebyQuery(searchTerm)
            .then((res) => setResults(res.results))
            setShowResults(true)
    }

    return (
        <div id='search-bar'>
           <form id='search-form'onSubmit={onSubmitHandler}>
                <input 
                    id='search-input'
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} //onChangeHandler
                 />
                 <AiOutlineSearch/>
                {/* <input type="submit" />   */}
                {/* <input type="button" onClick={results => setShowResults(!showResults)}/>   */}
           </form>     
        </div>
    )
}

export default SearchBar
