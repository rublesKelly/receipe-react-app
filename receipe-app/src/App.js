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
            const updateReceipes = [...receipes,
              {key: res.id,
               title: res.title,
               image: res.image,
               ingredients: res.extendedIngredients,
               steps: res.analyzedInstructions[0].steps
              }]
            setReceipes(updateReceipes)
            })
    
    }

    const onRemoveReceiepeClicked = (id) => {
      console.log(id)
      const updateReceiepes = receipes.filter(
        receipe =>  receipe.key !== id
      )
      console.log(updateReceiepes)
      setReceipes(updateReceiepes)
    }

  return (  
    <div className='app'>
      <button id="test-bar" onClick={()=>setShowTestComp(state=>!state)}/>
      {showTestComp && <TestComp/>}
      <SearchBar onAddReceipeClicked={onAddReceipeClicked}/>{/* controllers for rending the searchresults */}
      <Announcement/> {/* Conditionally rendered */}
      <DiscoverGrid />  
      <TabBar frampton={'fd'}joint={123} receipes={receipes} onRemoveReceiepeClicked={onRemoveReceiepeClicked}/>
    </div>
  );
}

export default App;
