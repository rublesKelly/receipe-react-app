import React, {useState} from 'react'
import {api} from '../axios';
import { useAppContext } from '../AppContext';
import "../Styles/TestComp.css";

function TestComp({setAnnouncement, setShowSideBar,setTabClassName}) {

    const {showTabBar, setShowTabBar,setShowToolBar} = useAppContext();
    
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
        </div>
    )
}

export default TestComp
            
