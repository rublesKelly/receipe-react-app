import './App.css'
import React, {useState, useEffect} from 'react' 
import axios from 'axios';
//Importing react components
import IngredientList from './Components/IngredientsList';
import StepsList from './Components/StepsList';
import ReceipeImage from './Components/ReceipeImage';
import ReceipeHeader from './Components/ReciepeHeader'

function App() {  
  

  //Declaring State for Ingredients List and Steps List and declaring set steps for both
  const [Header, setHeader] = useState([]);
  const [Ingredients, setIngredients] = useState([]);
  const [Steps, setSteps] = useState([]);
  const [URL, setURL] = useState('/receipe1');
  const [API, setAPI] = useState(`https://api.spoonacular.com/recipes/random&number=1&apiKey=1fd64808a71c4a698ea2eac178c1b8e0`);
  
  //Setting the state with Random button

  //Get request to update state and to track any changes to URL
  //URL is the receiepe that the user wants to see
  // useEffect(() => {
  //   axios.get(URL)
  //     .then(res => {
  //       console.log(res)
  //       setHeader(res.data.Header)
  //       setIngredients(res.data.Ingredients)
  //       setSteps(res.data.Steps)
  //     })       
  //     .catch(err => {
  //       console.log(err)
  //     })    
  // },[URL])
  useEffect(() => {
    axios(API)
      .then(res => {
        console.log(res)
      })
        .catch(err => {
          console.log(err)
        })
      }, [API])


  return (  
  <div className="App">
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
      <div className="random-button-container">
          <button className ="randomButton" type="button"
          onClick={() => setURL('/receipe1')}
          >Receipe1
        </button>
        <button className ="randomButton" type="button"
          onClick={() => setURL('/receipe2')}
          >Receipe2
        </button>
        <button className ="randomButton" type="button"
          onClick={() => setURL('/receipe3')}
          >Receipe3
        </button>
        <button className ="randomAPIButton" type="button"
          onClick={() => setAPI(`https://api.spoonacular.com/recipes/random?query=&apiKey=1fd64808a71c4a698ea2eac178c1b8e0`)}
          >API test
        </button>
        <button className ="randomAPIButton" type="button"
          onClick={() => setAPI(`https://api.spoonacular.com/food/ingredients/search?query=banana&number=2&sort=calories&sortDirection=desc=&apiKey=1fd64808a71c4a698ea2eac178c1b8e0`)}
          >Get random receipe
        </button>
        <button className ="randomAPIButton" type="button"
          onClick={() => setAPI(`https://api.spoonacular.com/food/ingredients/19337/information?amount=1&apiKey=1fd64808a71c4a698ea2eac178c1b8e0`)}
          >Get random receipe
        </button>
        
    </div>
    </div>
  );
}

export default App;
