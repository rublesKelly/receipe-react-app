//Imports
import './App.css'
import React, {createContext, useState} from 'react' 
// import {BrowserRouter, Router, Switch, Route } from "react-router-dom";
import {api} from './axios';
import egg from './Assets/egg-fried-rice.jpg'
import { useAppContext } from './AppContext';

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

  const {showTabBar, setShowTabBar} = useAppContext();
  console.log(showTabBar)

  //Declaring state to add tab
  const [receipes, setReceipes] = useState([])
  const [Annoucement, setAnnoucement] = useState({show: true,
                                                  title: '',
                                                  msg: '',
                                                  image: ''})
  const [showTestComp, setShowTestComp] = useState(false)
  const [userData, setUserData] = useState([{ id: 123,
                                              title:'Liked Receipes',
                                              image:egg},
                                              { id: 124,
                                                title:'Dinner Ideas',
                                                image:egg},{ id: 125,
                                                  title:'Daily Mix',
                                                  image:egg}])                                             

  //Tab bar handler
    //Add receipe to tab passed to receipe card and thumbnail
    const onAddReceipeClicked = (id) => {
      if(receipes.includes(id)){console.log('success?')}
      api.getReceipebyID(id)
          .then(res => {
            // console.log(res)
            const updateReceipes = [...receipes,
              {key:   res.id,
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
      {showTestComp && <TestComp setAnnoucement={setAnnoucement}/>}
      <SearchBar onAddReceipeClicked={onAddReceipeClicked}/> 
      {Annoucement.show && <Announcement/>}
      <DiscoverGrid userData={userData} />
      <TabBar receipes={receipes} onRemoveReceiepeClicked={onRemoveReceiepeClicked}/>
    </div>
  );
}

export default App;
