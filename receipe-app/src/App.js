//Imports
import './App.css'
import React, {useState} from 'react' 
// import {BrowserRouter, Router, Switch, Route } from "react-router-dom";
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
  const [receipes, setReceipes] = useState([])


  //Tab bar handler
    //Add receipe to tab passed to receipe card and thumbnail
    const onAddReceipeClicked = (id) => {
      api.getReceipebyID(id)
          .then(res => {
            console.log(res)
            const updateReceipes = [...receipes,
              {title: res.title,
              ingredients: res.extendedIngredients,
              steps: res.analyzedInstructions[0].steps
            }]
            setReceipes(updateReceipes)
            })
    
    }

  return (  
    <div className='app'>
      <button onClick={()=>onAddReceipeClicked('639234')}>Add receiep</button>
      <button onClick={()=>onAddReceipeClicked('639203')}>Add receiep</button>      
      <SearchBar onAddReceipeClicked={onAddReceipeClicked}/>      {/* controllers for rending the searchresults */}
      <Announcement/>   {/* Conditionally rendered */}
      <DiscoverGrid recomendations = {[1,2,3,4,4,6]}/>  
      <TabBar receipes={receipes}/>
    </div>
  );
}

export default App;
