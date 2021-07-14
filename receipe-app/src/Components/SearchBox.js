import axios from '../axios.js';
import React from 'react'
import { useState  } from "react";
import SearchResults from './SearchResults';

function SearchBox() {

//Using setState to make this a controlled component
const [searchResults, setSearchResults] = useState({})
const [searchQuery, setSearchQuery] = useState('eggs bacon')


//OnChangeHandler note the spread operator and add `...searchResults,[e.currentTarget.name]: e.currentTarget.value` after it
const onChangeHandler = (e) => {
    setSearchQuery(e.target.value);
    // console.log(e.target.value);
}

//OnSubmithandler note the preventdefualt behaviour (cuerrently it is not working)
// const OnSubmithandler = (searchResults, (e) => {e.preventDefault(); alert('an event was submitted'); console.log(searchResults); e.stopPropagation();})
const onSubmitHandler = (e) => {
    e.preventDefault(); 
    setSearchQuery(e.target.value); 
    console.log(searchQuery);
    getReciepesbySearchQuery(searchQuery);
}

//getReciepesbySearchQuery function here 
const getReciepesbySearchQuery = async (searchQuery) => {
    await axios(`?q=${searchQuery}&apiKey=${process.env.react_app_api_key}`)
        .then(res => {
            console.log(res);
            setSearchResults(res.data)
        })
        .catch(err => {
            console.log(err)
        })
};

    return (
        <div>
            <form action="/" method='get/post_here' onSubmit={onSubmitHandler} >
                <label htmlFor="search-bar">Search for Receipes</label>
                <input 
                    type="input"
                    id='search-bar'
                    placeholder='dont knwo what to put here'
                    onChange={onChangeHandler}                    
                />
            </form>
        </div>
    )
}

export default SearchBox
