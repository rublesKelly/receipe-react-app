import React from 'react'

function Menu({setMenu}) {

    const onClickHandler = () => {
        setMenu(2)
    }

    console.log(setMenu instanceof Function);
    return (
        <div>
            <h3>Home</h3>
            <h3>Liked Reciepes</h3>
            <button 
                id="settings-button" 
                onClick={()=>onClickHandler()}
            >Settings</button>
        </div>
    )
}

export default Menu
