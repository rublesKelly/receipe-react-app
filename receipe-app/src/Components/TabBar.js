import React, {useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import RecipeGrid from './RecipeGrid';
import '../tabs.css'

function TabBar({recipes, onRemoveReceiepeClicked, tabClassName, setTabClassName}) {
    
    //Declare state
    const [tabIndex, setTabIndex] = useState(0)
    const [showTabPanel, setShowTabPanel] = useState(false)
    
  
    //Functions
    const tabClickedHandler = () => {
        setShowTabPanel(true)
        setTabClassName('tab-bar-active')
    }

    return (
        <div className={tabClassName}>
            <Tabs selectedIndex={tabIndex} onSelect={index=>setTabIndex(index)}>
                <TabList>
                {recipes.map(recipe => 
                   <Tab  onClick={()=>tabClickedHandler()}>
                        {recipe.title}
                        <button onClick={()=> onRemoveReceiepeClicked(recipe.key)} >X</button>
                   </Tab>
                )}
                </TabList>
                {showTabPanel && recipes.map(recipe => 
                    <TabPanel>
                        <RecipeGrid recipe = {recipe}/>
                    </TabPanel>
                )}              
            </Tabs>
        </div>
    )
}

 export default TabBar

