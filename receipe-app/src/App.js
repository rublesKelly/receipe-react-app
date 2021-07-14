import './App.css'
import React, {useState, useEffect} from 'react' 
import axios from 'axios';
//import getRandomReceipe from './axios';
//Importing react components
import IngredientList from './Components/IngredientsList';
import StepsList from './Components/StepsList';
import ReceipeImage from './Components/ReceipeImage';
import ReceipeHeader from './Components/ReciepeHeader';
import SearchBox from './Components/SearchBox'
import SearchResults from './Components/SearchResults'

require('dotenv').config({path:'../.env'})
// console.log(process.env);
console.log(window.location);
const { search } = window.location;
const query = new URLSearchParams(search).get('s');
console.log(search);
console.log(query);

function App() {    

  //Declaring State for Ingredients List and Steps List and declaring set steps for both
  const [Header, setHeader] = useState([]);
  const [Ingredients, setIngredients] = useState([]);
  const [Steps, setSteps] = useState([]);
  const [API, setAPI] = useState(``); 
  const [Receipes, setReceieps] = useState([]) 
  

 //Random Receipe search trying to add async not working
  // useEffect(() => {
  //   const getRandomReceipe = async() => {axios.get(API)
  //     .then(res => {
  //       console.table(res.data.recipes) 
  //       setHeader(res.data.recipes[0].title)
  //       setSteps(res.data.recipes[0].analyzedInstructions[0].steps)
  //       setIngredients(res.data.recipes[0].extendedIngredients)
  //     })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //     }}, [API])

//Random receipe search no async await 
useEffect(() => {
  axios(API)
    .then(res => {
      console.table(res)
      setHeader(res.data.recipes[0].title)
      setSteps(res.data.recipes[0].analyzedInstructions[0].steps)
      setIngredients(res.data.recipes[0].extendedIngredients)
    })
      .catch(err => {
        console.log(err)
      })
    }, [API])


  return (  
  <div className="App">
    {/* Setting the state with Random button */}
    <button className ="randomAPIButton" type="button"
          onClick={() => setAPI(`https://api.spoonacular.com/recipes/random?query=&apiKey=${process.env.react_app_api_key}`)}
          >Random Recipe
    </button>
    <button className ="randomAPIButton" type="button"
          onClick={() => setAPI(``)}
          >Reset
    </button>
    <div id="nav-bar">
      <div id="search-box">
        <SearchBox/>
      </div>
    </div>
    <SearchResults searchResults={[]}/>
    <div className='reciepe-grid'>
      <div className = 'ReciepeHeader'>
        <ReceipeHeader Header={Header}/>
      </div>
      <div className='ReciepeImage'>
        <ReceipeImage img_src="./egg-fried-rice.jpg"/>
      </div>
        <div className='in-box'>
          <IngredientList Ingredients={Ingredients}/>
        </div>
        <div className='m-box'>
            <StepsList Steps={Steps}/>
        </div>
      </div>
    </div>
  );
}

export default App;
