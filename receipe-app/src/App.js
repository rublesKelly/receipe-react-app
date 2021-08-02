//Imports
import './App.css'
import React, {useState, useEffect} from 'react' 
import {BrowserRouter, Router, Switch, Route } from "react-router-dom";
import axios from 'axios';


//Importing react components
import IngredientList from './Components/IngredientsList';
import StepsList from './Components/StepsList';
import ReceipeImage from './Components/ReceipeImage';
import ReceipeHeader from './Components/ReciepeHeader';
// import SearchPage from './Pages/SearchPage'
import SearchBar from "./Components/SearchBar";
import Announcement from "./Components/Annoucement";
import TabBar from "./Components/TabBar.js";
import DiscoverGrid from './Components/DiscoverGrid.js';
import ReceipeGrid from './Components/ReceipeGrid';

require('dotenv').config({  path:'../.env'})
// console.log(process.env);


function App() {    

  //Declaring State

  return (  
    <div className='app'>
      <SearchBar/>      {/* controllers for rending the searchresults */}
      <Announcement/>   {/* Conditionally rendered */}
      <DiscoverGrid recomendations = {[1,2,3,4,4,6]}/>  
      <TabBar test={100} />
      <ReceipeGrid/>  {/* Conditionally rendered */}     
    </div>
  );
}

export default App;
