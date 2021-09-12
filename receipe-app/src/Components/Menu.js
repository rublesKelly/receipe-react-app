import React from 'react'

function Menu({setChangeMenu}) {
    return (
        <div>
            <h4>Home</h4>
            <h4>Liked Reciepes</h4>
            <button id="settings-button" onClick={()=>setChangeMenu('settings')}>Settings</button>
        </div>
    )
}

export default Menu
