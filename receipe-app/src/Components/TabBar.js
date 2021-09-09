import React, {useState, useEffect} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReceipeGrid from './ReceipeGrid';
import '../tabs.css'

function TabBar({receipes, onRemoveReceiepeClicked, tabClassName, setTabClassName}) {
    
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
                {receipes.map(receipe => 
                   <Tab  onClick={()=>tabClickedHandler()}>
                        {receipe.title}
                        <button onClick={()=> onRemoveReceiepeClicked(receipe.key)} >X</button>
                   </Tab>
                )}
                </TabList>
                {showTabPanel && receipes.map(receipe => 
                    <TabPanel>
                        <ReceipeGrid receipe = {receipe}/>
                    </TabPanel>
                )}              
            </Tabs>
        </div>
    )
}

 export default TabBar

