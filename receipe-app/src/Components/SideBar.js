import React, {useState} from 'react'
import "../Styles/SideBar.css";
import Menu from './Menu';


function SideBar() {
    
//Declare state
const [menu, setMenu] = useState(1)
// console.log(setMenu instanceof Function)    
    return (
        <div id='side-bar'>
           {menu === 1 &&  <Menu id='primary-menu' setMenu={setMenu}/>}
           {menu === 2 && <Menu id='settings-menu'/>}
        </div>
    )
}

export default SideBar
