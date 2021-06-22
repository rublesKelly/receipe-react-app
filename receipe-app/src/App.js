import './App.css'
import React, {useState, useEffect} from 'react' 
import axios from 'axios';
import IngredientList from './Components/IngredientsList';
import StepsList from './Components/StepsList';
import ReceipeImage from './Components/ReceipeImage';
import ReceipeHeader from './Components/ReciepeHeader'

function App() {  
  

  //Declaring State for Ingredients List and Steps List and declaring set steps for both
  const [Ingredients, setIngredients] = useState([]);
  const [Steps, setSteps] = useState([]);
  const [URL, setURL] = useState('/receipe1');
   
  //Setting the state with Random button

  //Get request to update state and to track any changes to URL
  //URL is the receiepe that the user wants to see
  useEffect(() => {
    axios.get(URL)
      .then(res => {
        console.log(res)
        setIngredients(res.data.Ingredients)
        setSteps(res.data.Steps)
      })      
      .catch(err => {
        console.log(err)
      })    
  },[URL])


  return (  
  <div className="App">
    <div className='reciepe-grid'>
        <ReceipeHeader Header="Egg Fried Rice"/>
        <ReceipeImage img_src="./egg-fried-rice.jpg"/>
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
    </div>
    </div>
  );
}

export default App;
