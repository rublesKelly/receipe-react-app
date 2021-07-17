import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
    return (
    <div id='nav-bar'>     
        <div id="nav-bar-links">
            <Link to='/'>Home</Link>
            <Link to='/discover'>Discover</Link>
        </div>
    </div>
       
    )
}

export default NavBar
