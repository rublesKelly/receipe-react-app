import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReceipeGrid from './ReceipeGrid';
import '../tabs.css'

//Delcaring State
// const [receiepTitle, setreceiepTitle] = useStatle(initialState)

function TabBar({receipes}) {
    return (
        <div className='tab-bar'>
            <Tabs>
                <TabList>
                {receipes.map(receipe => 
                   <Tab>{receipe.title}</Tab>
                )}
                </TabList>
                {receipes.map(receipe => 
                    <TabPanel id='tab-panel-1'>
                    <ReceipeGrid receipe = {receipe}/>
                    </TabPanel>
                )}              
            </Tabs>
        </div>
    )
}

 export default TabBar

