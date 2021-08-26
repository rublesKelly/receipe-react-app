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
import TestComp from './Components/TestComp.js'

require('dotenv').config({  path:'../.env'})
// console.log(process.env);


function App() {    

  //Declaring state to add tab
  const [receipes, setReceipes] = useState([])
  const [showTestComp, setShowTestComp] = useState(false)



  //Tab bar handler
    //Add receipe to tab passed to receipe card and thumbnail
    const onAddReceipeClicked = (id) => {
      api.getReceipebyID(id)
          .then(res => {
            console.log(res)
            const updateReceipes = [...receipes,
              {title: res.title,
               image: res.image,
               ingredients: res.extendedIngredients,
               steps: res.analyzedInstructions[0].steps
              }]
            setReceipes(updateReceipes)
            })
    
    }

    const onRemoveReceiepeClicked = (id) => {
      const updateReceiepes = receipes.filter(
        receipe =>  receipe.id != id
      )
      // setReceipes([])
    }

  return (  
    <div className='app'>
      <button id="test-bar" onClick={()=>setShowTestComp(state=>!state)}/>
      {showTestComp && <TestComp/>}
      <SearchBar onAddReceipeClicked={onAddReceipeClicked}/>{/* controllers for rending the searchresults */}
      <Announcement/> {/* Conditionally rendered */}
      <DiscoverGrid />  
      <TabBar receipes={receipes} onRemoveReceiepeClicked={onRemoveReceiepeClicked}/>
    </div>
  );
}

export default App;
