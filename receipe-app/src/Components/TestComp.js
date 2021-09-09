import React, {useState} from 'react'
import {api} from '../axios';
import { useAppContext } from '../AppContext';
import "../Styles/TestComp.css";

function TestComp({setAnnoucement, setShowSideBar,setTabClassName}) {

    const {showTabBar, setShowTabBar} = useAppContext();
    
    //Declaring variables 
    const [id, setId] = useState('')

    //Submit Handler
    const onSubmitHandler = (e) => {
        e.preventDefault()
        api.getReceipebyID(id)
            .then(res=>console.log(res))
    }

    return (
        <div id='test-comp'>
            {/* <button onClick={()=>api.getReceipebyCusine('Italian')}>Add receieps</button> */}
            <form onSubmit={onSubmitHandler} id="test-form">
                <label>Search by ID</label>
                <input 
                    type="text" 
                    id="id-search" 
                    value={id}
                    onChange={(e)=> setId(e.target.value)}
                />
                <input type="submit"/>
            </form>
            <button onClick={() =>setShowTabBar(state => !state)}>Context toggle showTabBar</button>
            <button onClick={()=>setAnnoucement({show: true})}>showAnnoucment</button>
            <button onClick={()=>setAnnoucement({show: false})}>hideAnnoucment</button>
            <button id="side-bar-btn" onClick={()=>setShowSideBar(state => !state)}>Show Sidebar</button>
            <button id="toggle-tab-bar"onClick={()=>setTabClassName(state => !state)}>toggle tabbar className</button>
        </div>
    )
}

export default TestComp
