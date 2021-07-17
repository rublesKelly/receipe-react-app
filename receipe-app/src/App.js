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
import SearchPage from './Components/SearchPage'
import SearchResults from './Components/SearchResults'
import NavBar from "./Components/NavBar";

require('dotenv').config({path:'../.env'})
// console.log(process.env);


function App() {    

  //Declaring State for Ingredients List and Steps List and declaring set steps for both
  const [Header, setHeader] = useState([]);
  const [Ingredients, setIngredients] = useState([]);
  const [Steps, setSteps] = useState([]);
  const [API, setAPI] = useState(``); 
  const [Receipes, setReceieps] = useState([]) 
  const [Image, setImage] = useState('')
  

//Random Receipe search trying to add async not working
  useEffect(() => {
      const getRandomReceipe = async() => {
        await axios.get(API)
        .then(res => {
          console.table(res.data.recipes) 
          setHeader(res.data.recipes[0].title)
          setSteps(res.data.recipes[0].analyzedInstructions[0].steps)
          setIngredients(res.data.recipes[0].extendedIngredients)
        })
          .catch(err => {
            console.log(err)
          })
      }}, [Receipes])

//Random receipe search no async await 
  useEffect(() => {
    axios(API)
      .then(res => {
        console.table(res)
        setHeader(res.data.recipes[0].title)
        setSteps(res.data.recipes[0].analyzedInstructions[0].steps)
        setIngredients(res.data.recipes[0].extendedIngredients)
        setImage(res.data.recipes[0].image)
      })
        .catch(err => {
          console.log(err)
        })
      }, [API])


  return (  
  <BrowserRouter>
    <div className="App">
    <div id="random-buttons">
            {/* Setting the state with Random button */}
            <button 
                className ="randomAPIButton" type="button"
                onClick={() => setAPI(`https://api.spoonacular.com/recipes/random?query=&apiKey=${process.env.react_app_api_key}`)}
                >Random Recipe
            </button>
            <button 
                className ="randomAPIButton" 
                type="button"
                onClick={() => setAPI(``)}
                >Reset
            </button>
        </div>
    <NavBar/>
    <Switch>
      <Route path="/discover">
        <SearchPage/>
      </Route>
      <Route exact path='/'>
        <div className='reciepe-grid'>
          <div className ='ReciepeHeader'>
          <ReceipeHeader Header={Header}/>
        </div>
          <div className='ReciepeImage'>
          <ReceipeImage src={Image}/>
        </div>
          <div className='in-box'>
            <IngredientList Ingredients={Ingredients}/>
          </div>
          <div className='m-box'>
              <StepsList Steps={Steps}/>
          </div>
        </div>
      </Route>
    </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
