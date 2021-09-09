import React from 'react'
import '../Styles/ToolBar.css'
import { FaChevronLeft } from "react-icons/fa";

function ToolBar({setShowSideBar, showSideBar}) {
    return (
        <div id='tool-bar'>
            <button 
                id={showSideBar ? 'side-bar-btn-active' : 'side-bar-btn'}
                onClick={()=>setShowSideBar(state=>!state)}>
                <FaChevronLeft/>
            </button>
        </div>
    )
}

export default ToolBar
