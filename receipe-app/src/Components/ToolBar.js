import React, {useState} from 'react'
import '../Styles/ToolBar.css'
import { FaChevronLeft } from "react-icons/fa";
import { GiStopwatch } from "react-icons/gi";
import Timer from './Timer';

function ToolBar({setShowSideBar, showSideBar}) { 

    //Delcare state
    const [showTimer, setShowTimer] = useState(false)

    return (
        <div id='tool-bar'>
            <button 
                id={showSideBar ? 'side-bar-btn-active' : 'side-bar-btn'}
                onClick={()=>setShowSideBar(state=>!state)}>
                <FaChevronLeft/>
            </button>
            <div id='middle-section'></div>
            <div id='timer-container'>
                {showTimer ? 
                    <Timer/> : 
                    <button
                        id='timer-button'
                        onClick={()=>setShowTimer(state=>!state)}
                    ><GiStopwatch/>
                    </button>}
            </div>
        </div>
    )
}

export default ToolBar
