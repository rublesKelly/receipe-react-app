//Imports
import './App.css'
import './tabs.css'
import React, {useState, useEffect} from 'react' 
// import {BrowserRouter, Router, Switch, Route } from "react-router-dom";
import {api} from './axios';
import egg from './Assets/egg-fried-rice.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useAppContext } from './AppContext';
import { AiTwotoneHome, AiOutlineSearch } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";

//Importing react components
import SearchResults from './Components/SearchResults'
import SearchBar from "./Components/SearchBar";
import DiscoverGrid from './Components/DiscoverGrid.js';
import SideBar from "./Components/SideBar";
import TestComp from './Components/TestComp.js'
import RecipeGrid from './Components/RecipeGrid.js'
import ToolBar from "./Components/ToolBar.js";

require('dotenv').config({  path:'../.env'})
// console.log(process.env);


function App() {    

  //Importing context
  // const {showTabBar, setShowTabBar} = useAppContext(); console.log(showTabBar)
  

  //Declaring state
  const [showTestComp, setShowTestComp] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [results, setResults] = useState([])
  const [announcement, setAnnouncement] = useState({show: true,
    title: '',
    msg: '',
    image: ''
  })
  const [showResults, setShowResults] = useState(true)
  const [showToolBar, setShowToolBar] = useState(true)
  const [showSideBar, setShowSideBar] = useState(false)
  const [tabClassName, setTabClassName] = useState('tab-bar-inactive')
  const [tabIndex, setTabIndex] = useState(0)
  const [showTabPanel, setShowTabPanel] = useState(false)
  const [showSearchBar, setShowSearchBar] = useState(true)
  const [userData, setUserData] = useState([{ id: 123,
                                              title:'Liked Recipes',
                                              image:egg},
                                            { id: 124,
                                              title:'Dinner Ideas',
                                              image:egg},{ id: 125,
                                              title:'Daily Mix',
                                              image:egg
                                            }])

  //Get random recipe and assign it to state on start                                            
  useEffect(() => {
    api.getRandomRecipe().then(res => {
      const updateRecipes = [...recipes,
        {key: res.recipes[0].id,
          title: res.recipes[0].title,
          image: res.recipes[0].image,
          ingredients: res.recipes[0].extendedIngredients,
          steps: res.recipes[0].analyzedInstructions[0].steps
        }]
      // console.log(updateRecipes)
      setRecipes(updateRecipes)
      })
    },[])                                                                                        

  //Tab bar handler
    //Add recipe to tab passed to recipe card and thumbnail
    const onAddRecipeClicked = (id) => {
      if(id in recipes){console.log('success?')}//this line doesnt do anything at the momnent
      api.getRecipebyID(id)
          .then(res => {
            console.log();
            const updateRecipes = [...recipes,
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
            setRecipes(updateRecipes)
            })
    
    }

    const onRemoveReceiepeClicked = (id) => {
      console.log(id)
      const updateReceiepes = recipes.filter(
        recipe =>  recipe.key !== id
      )
      console.log(updateReceiepes)
      setRecipes(updateReceiepes)
    }

    const tabClickedHandler = () => {
      setShowTabPanel(true)
      setTabClassName('tab-bar-active')
    }

  return (  
    <div className='app'>
      <button id="test-bar" onClick={()=>setShowTestComp(state=>!state)}/>
      {showTestComp && <TestComp setAnnouncement={setAnnouncement} setShowSideBar={setShowSideBar}setTabClassName={setTabClassName}setShowToolBar={setShowToolBar}/>}
      {showSideBar && <SideBar/>}
      <Tabs selectedIndex={tabIndex} onSelect={index=>setTabIndex(index)}>
        <TabList>
          <Tab><AiTwotoneHome/></Tab>
          <Tab>
            {tabIndex === 1 ? <SearchBar 
                                setResults={setResults}
                                setShowResults={setShowResults}
                            /> :<AiOutlineSearch/> }
            </Tab> 
          {recipes.map(recipe => 
                    <Tab  onClick={()=>tabClickedHandler()}>
                          {recipe.title}
                          <button id='remove-tab-btn' onClick={()=> onRemoveReceiepeClicked(recipe.key)} ><IoIosCloseCircle/></button>
                    </Tab>
          )}
        </TabList>
        <TabPanel>
          <DiscoverGrid 
                userData={userData} announcement={announcement}
                onAddRecipeClicked={onAddRecipeClicked}      
          />
        </TabPanel>
        <TabPanel>
          <div id="search-panel">
            {results.length > 0 && showResults &&
              <SearchResults  results={results}
                              onAddRecipeClicked={onAddRecipeClicked}
              />}
          </div>
        </TabPanel>
        {showTabPanel && recipes.map(recipe => 
                    <TabPanel>
                        <RecipeGrid recipe = {recipe}/>
                    </TabPanel>
        )}
      </Tabs>
      {showToolBar && <ToolBar setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>}
    </div>
  );
}

export default App;
