import React,{ useState, createContext, useContext } from "react";
//Im thinking for the tab bar that we have it on the bottom just the tabs and when showTabBar is set to true 
//we raise the tab bar in an animation to connect with the seach bar and have the tab panel a higher z-index on the css so as to cover the discover section

const AppContext = createContext()//Create Context

//Create useAppContext hook
export const useAppContext = () => {
    return useContext(AppContext)
}

const AppProvider = ({children}) => {//Provider function takes any children as args

    const [showTabBar, setShowTabBar] = useState(false)//Delcare state
    const [theme, settheme] = useState({})

    return (
        <AppContext.Provider value={{showTabBar, setShowTabBar}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider