import React, {useState} from 'react'
import "../Styles/SideBar.css";
import Menu from './Menu';


function SideBar() {
    
//Declare state
const [changeMenu, setChangeMenu] = useState('primary')
    
    return (
        <div id='side-bar'>
           {changeMenu === 'primary' &&  <Menu id='primary-menu' setChangeMenu={setChangeMenu}/>}
           {changeMenu === 'settings' && <Menu id='settings-menu'/>}
        </div>
    )
}

export default SideBar
