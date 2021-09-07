import React, {useState} from 'react'
import {api} from '../axios';
import { useAppContext } from '../AppContext';

function TestComp({setAnnoucement}) {

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
        <div>
            <button onClick={()=>api.getReceipebyCusine('Italian')}>Add receiep</button>
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
            <button onClick={() => setShowTabBar(state => !state)}>Context</button>
            <button onClick={()=>setAnnoucement({show: true})}>showAnnoucment</button>
            <button onClick={()=>setAnnoucement({show: false})}>hideAnnoucment</button>
        </div>
    )
}

export default TestComp
