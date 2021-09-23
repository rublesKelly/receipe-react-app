import axios from '../axios.js';
import React from 'react'
import { useState  } from "react";
import SearchResults from '../Components/SearchResults';

function SearchPage() {

//Using setState to make this a controlled component
const [searchResults, setSearchResults] = useState([])
const [searchQuery, setSearchQuery] = useState('eggs bacon')
const [id, setId] = useState(637625)


//OnChangeHandler note the spread operator and add `...searchResults,[e.currentTarget.name]: e.currentTarget.value` after it
//This could be moved inline with the actual onChange property in the input tag below
const onChangeHandler = (e) => {
    setSearchQuery(e.target.value);
    // console.log(e.target.value);
        e.stopPropagation();
}

//OnSubmithandler note the preventdefualt behaviour (cuerrently it is not working)
// const OnSubmithandler = (searchResults, (e) => {e.preventDefault(); alert('an event was submitted'); console.log(searchResults); e.stopPropagation();})
const onSubmitHandler = (e) => {
    e.preventDefault(); 
    setSearchQuery(e.target.value); 
    console.log(searchQuery);
    getRecipesbySearchQuery(searchQuery);
}

//getRecipesbySearchQuery function here 
const getRecipesbySearchQuery = async (searchQuery) => {
    await axios(`/complexSearch?query=${searchQuery}&addRecipeInformation=true&apiKey=${process.env.react_app_api_key}`)
        .then(res => {
            console.log(res);
            setSearchResults(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
};

//Search recipes by ID
const getRecipesbyID = async (id) => {
    axios.get(`/${id}/information?apiKey=${process.env.react_app_api_key}`)
        .then(res => {
            // console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}

    return (
        <div>
            <form action="/" method='get/post_here' onSubmit={onSubmitHandler} >
                <label htmlFor="search-bar">Search for Recipes</label>
                <input 
                    type="input"
                    id='search-bar'
                    placeholder='dont knwo what to put here'
                    onChange={onChangeHandler}                    
                />
                <label >Search by ID </label>
                <input type="text"onChange={(e) => setId(e.target.value)}/>
                <input type="submit" onSubmit={getRecipesbyID(id)} />
            </form>
                <SearchResults searchResults={searchResults}/>

        </div>
    )
}

export default SearchPage
