import React, {useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReceipeGrid from './ReceipeGrid';
import '../tabs.css'

function TabBar({receipes, onRemoveReceiepeClicked, joint}) {
    
    //Declare state
    const [tabIndex, setTabIndex] = useState(0)
    const [showTabPanel, setShowTabPanel] = useState(false)
    
    return (
        <div className='tab-bar'>
            <Tabs selectedIndex={tabIndex} onSelect={index=>setTabIndex(index)}>
                <TabList>
                {receipes.map(receipe => 
                   <Tab onRemoveReceiepeClicked={onRemoveReceiepeClicked} onClick={()=>setShowTabPanel(true)}>
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

