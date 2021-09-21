import React, {useState} from 'react'
import {api} from '../axios';
import { useAppContext } from '../AppContext';
import "../Styles/TestComp.css";

function TestComp({setAnnouncement, setShowSideBar,setTabClassName}) {

    const {setShowTabBar, setShowToolBar} = useAppContext();
    
    //Declaring variables 
    const [id, setId] = useState('')
    const [cusine, setCusine] = useState('')
    //Submit Handler
    const onSubmitHandler = (e) => {
        e.preventDefault()
        api.getReceipebyID(id)
            .then(res=>console.log(res))
    }

    const onSubmitHandler2 = (e) => {
        e.preventDefault()
        api.getReceipebyCusine(cusine)
            .then(res=>console.log(res))
    }

    const onSubmitHandler3 = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div id='test-comp'>
            {/* <button onClick={()=>api.getReceipebyCusine('Italian')}>Add receieps</button> */}
            <form onSubmit={onSubmitHandler} id="test-form-id">
                <label>Search by ID</label>
                <input 
                    type="text" 
                    id="id-search" 
                    value={id}
                    onChange={(e)=> setId(e.target.value)}
                />
                <input type="submit"/>
            </form>
            <form onSubmit={onSubmitHandler2} id="test-form-cusine">
                <label>Search by Cusine</label>
                <input 
                    type="text" 
                    id="id-search" 
                    value={cusine}
                    onChange={(e)=> setCusine(e.target.value)}
                />
                <input type="submit"/>
            </form>
            <button onClick={() =>setShowTabBar(state => !state)}>Context toggle showTabBar</button>
            <button onClick={()=>setAnnouncement({show: true})}>showAnnoucment</button>
            <button onClick={()=>setAnnouncement({show: false})}>hideAnnoucment</button>
            <button id="side-bar-btn" onClick={()=>setShowSideBar(state => !state)}>Show Sidebar</button>
            <button id="toggle-tool-bar"onClick={()=>setShowTabBar(state => !state)}>toggle setShowToolbBar</button>
            <button id="toggle-tab-bar"onClick={()=>setTabClassName(state => !state)}>toggle tabbar className</button>
            <button id='log-detailed-receipe' onClick={()=>api.getDetailedReceipebyQuery('garlic')}>Get detailed receipe</button>
            <form onSubmit={onSubmitHandler3} id="advanced-search">
                <label htmlFor="cusine">Choose cusine</label>
                <select name="cusine" id="cusine-selector">
                    <option value="African">African</option>
                    <option value="American">American</option>
                    <option value="British">British</option>
                    <option value="Cajun">Cajun</option>
                    <option value="Caribbean">Caribbean</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Eastern European">Eastern European</option>
                    <option value="European">European</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Greek">Greek</option>
                    <option value="Indian">Indian</option>
                    <option value="Irish"></option>
                    <option value="Italian"></option>
                    <option value="Japanese"></option>
                    <option value="Jewish"></option>
                    <option value="Korean"></option>
                    <option value="Latin American"></option>
                    <option value="Mediterranean"></option>
                    <option value="Mexican"></option>
                    <option value="Middle Eastern"></option>
                    <option value="Nordic"></option>
                    <option value="Southern"></option>
                    <option value="Spanish"></option>
                    <option value="Thai"></option>
                    <option value="Vietnamese"></option>
                </select>
                <label htmlFor="diet">Choose Diet</label>
                <select name="diet" id="diet-selector">
                    <option value="vegan">vegan</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TestComp
            
