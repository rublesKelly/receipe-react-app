//Imports
import './App.css'
import React, {useState, useEffect} from 'react' 
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
import SideBar from "./Components/SideBar";
import TestComp from './Components/TestComp.js'

require('dotenv').config({  path:'../.env'})
// console.log(process.env);


function App() {    

  //Adding context
  const {showTabBar, setShowTabBar} = useAppContext();
  // console.log(showTabBar)

  //Declaring state
  const [receipes, setReceipes] = useState([])
  const [Annoucement, setAnnoucement] = useState({show: true,
    title: '',
    msg: '',
    image: ''})
    const [showTestComp, setShowTestComp] = useState(false)
    const [showSideBar, setShowSideBar] = useState(false)
    const [tabClassName, setTabClassName] = useState('tab-bar-inactive')
  const [userData, setUserData] = useState([{ id: 123,
                                              title:'Liked Receipes',
                                              image:egg},
                                            { id: 124,
                                              title:'Dinner Ideas',
                                              image:egg},{ id: 125,
                                              title:'Daily Mix',
                                              image:egg}])

  //Get random receipe and assign it to state on start                                            
  useEffect(() => {
    api.getRandomReceipe().then(res => {
      const updateReceipes = [...receipes,
        {key: res.recipes[0].id,
          title: res.recipes[0].title,
          image: res.recipes[0].image,
          ingredients: res.recipes[0].extendedIngredients,
          steps: res.recipes[0].analyzedInstructions[0].steps
        }]
      // console.log(updateReceipes)
      setReceipes(updateReceipes)
      })
    },[])                                                                                        

  //Tab bar handler
    //Add receipe to tab passed to receipe card and thumbnail
    const onAddReceipeClicked = (id) => {
      if(receipes.includes(id)){console.log('success?')}//this line doesnt do anything at the momnent
      api.getReceipebyID(id)
          .then(res => {
            console.log();
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
      {showTestComp && <TestComp setAnnoucement={setAnnoucement} setShowSideBar={setShowSideBar}setTabClassName={setTabClassName}/>}
      <SearchBar onAddReceipeClicked={onAddReceipeClicked}/>{/* controllers for rending the searchresults */}
      {Annoucement.show && <Announcement/>}
      <DiscoverGrid userData={userData}/>
      {showSideBar && <SideBar/>}
      <TabBar 
        receipes={receipes} 
        onRemoveReceiepeClicked={onRemoveReceiepeClicked}
        tabClassName={tabClassName}
        setTabClassName={setTabClassName}
      />
    </div>
  );
}

export default App;
