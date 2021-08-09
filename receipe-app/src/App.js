//Imports
import './App.css'
import React, {useState} from 'react' 
import {BrowserRouter, Router, Switch, Route } from "react-router-dom";
import {api} from './axios';


//Importing react components
// import SearchPage from './Pages/SearchPage'
import SearchBar from "./Components/SearchBar";
import Announcement from "./Components/Annoucement";
import TabBar from "./Components/TabBar.js";
import DiscoverGrid from './Components/DiscoverGrid.js';

require('dotenv').config({  path:'../.env'})
// console.log(process.env);


function App() {    

  //Declaring state to add tab
  const [receipe, setReceipe] = useState({title: '',
                                          ingredients: [],
                                          steps: []})
  const [id, setId] = useState('654959')

  //Tab bar handler
    //Add receipe to tab passed to receipe card and thumbnail
    const onAddReceipeClicked = (id) => {
      const res = api.getReceipebyID(id)
          .then(res => {
            console.log(res)
            setReceipe({title: res.title,
                        ingredients: res.extendedIngredients,
                        steps: res.analyzedInstructions[0].steps
                      })
            })
    
    }

  return (  
    <div className='app'>
      <button onClick={()=>onAddReceipeClicked(id)}>Add receiep</button>
      <SearchBar onAddReceipeClicked={onAddReceipeClicked}/>      {/* controllers for rending the searchresults */}
      <Announcement/>   {/* Conditionally rendered */}
      <DiscoverGrid recomendations = {[1,2,3,4,4,6]}/>  
      <TabBar receipe={receipe}/>
    </div>
  );
}

export default App;
