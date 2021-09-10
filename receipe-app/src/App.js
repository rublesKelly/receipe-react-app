//Imports
import './App.css'
import React, {useState, useEffect} from 'react' 
// import {BrowserRouter, Router, Switch, Route } from "react-router-dom";
import {api} from './axios';
import egg from './Assets/egg-fried-rice.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useAppContext } from './AppContext';
import { AiTwotoneHome, AiOutlineSearch } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";

//Importing react components
// import SearchPage from './Pages/SearchPage'
import SearchBar from "./Components/SearchBar";
import TabBar from "./Components/TabBar.js";
import DiscoverGrid from './Components/DiscoverGrid.js';
import SideBar from "./Components/SideBar";
import TestComp from './Components/TestComp.js'
import ReceipeGrid from './Components/ReceipeGrid.js'
import ToolBar from "./Components/ToolBar.js";

require('dotenv').config({  path:'../.env'})
// console.log(process.env);


function App() {    

  //Adding context
  const {showTabBar, setShowTabBar} = useAppContext();
  // console.log(showTabBar)

  //Declaring state
  const [receipes, setReceipes] = useState([])
  const [announcement, setAnnouncement] = useState({show: true,
    title: '',
    msg: '',
    image: ''
                                                    })
  const [showTestComp, setShowTestComp] = useState(false)
  const [showToolBar, setShowToolBar] = useState(true)
  const [showSideBar, setShowSideBar] = useState(false)
  const [tabClassName, setTabClassName] = useState('tab-bar-inactive')
  const [tabIndex, setTabIndex] = useState(0)
  const [showTabPanel, setShowTabPanel] = useState(false)
  const [userData, setUserData] = useState([{ id: 123,
                                              title:'Liked Receipes',
                                              image:egg},
                                            { id: 124,
                                              title:'Dinner Ideas',
                                              image:egg},{ id: 125,
                                              title:'Daily Mix',
                                              image:egg
                                            }])

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
      if(id in receipes){console.log('success?')}//this line doesnt do anything at the momnent
      api.getReceipebyID(id)
          .then(res => {
            console.log();
            const updateReceipes = [...receipes,
              {key: res.id,
               title: res.title,
               image: res.image,
               ingredients: res.extendedIngredients,
               steps: res.analyzedInstructions[0].steps,
               vegan: res.vegan,
               vegetarian: res.vegetarian,
               glutenFree: res.glutenFree,
               dairyFree: res.dairyFree,
               readyInMinuites: res.readyInMinuites,
               servings: res.servings
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

    const tabClickedHandler = () => {
      setShowTabPanel(true)
      setTabClassName('tab-bar-active')
    }

  return (  
    <div className='app'>
      <button id="test-bar" onClick={()=>setShowTestComp(state=>!state)}/>
      {showTestComp && <TestComp setAnnouncement={setAnnouncement} setShowSideBar={setShowSideBar}setTabClassName={setTabClassName}setShowToolBar={setShowToolBar}/>}
      <Tabs selectedIndex={tabIndex} onSelect={index=>setTabIndex(index)}>
        <TabList>
        <Tab><AiTwotoneHome/></Tab>
        <Tab><AiOutlineSearch/></Tab> 
        {receipes.map(receipe => 
                   <Tab  onClick={()=>tabClickedHandler()}>
                        {receipe.title}
                        <button id='remove-tab-btn' onClick={()=> onRemoveReceiepeClicked(receipe.key)} ><IoIosCloseCircle/></button>
                   </Tab>
        )}
        </TabList>
        <TabPanel>
          <DiscoverGrid 
                userData={userData} announcement={announcement}
                onAddReceipeClicked={onAddReceipeClicked}      
          />
        </TabPanel>
        <TabPanel>
          <SearchBar onAddReceipeClicked={onAddReceipeClicked}/>{/* controllers for rending the searchresults */}
        </TabPanel>
        {showTabPanel && receipes.map(receipe => 
                    <TabPanel>
                        <ReceipeGrid receipe = {receipe}/>
                    </TabPanel>
        )}
      </Tabs>
      {showSideBar && <SideBar/>}
      {showToolBar && <ToolBar setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>}
    </div>
  );
}

export default App;
