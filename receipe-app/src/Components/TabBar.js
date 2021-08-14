import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReceipeGrid from './ReceipeGrid';
import '../tabs.css'

//Delcaring State
// const [receiepTitle, setreceiepTitle] = useStatle(initialState)

function TabBar({receipe}) {
    return (
        <div className='tab-bar'>
            <Tabs>
                <TabList>
                    {/* Here we will have map method to cycle through array of recieps and create a tab for each one */}
                    <Tab>{receipe.title}</Tab>
                    <Tab>Receipe 2</Tab>
                </TabList>
                {/* Here we will have map method to cycle through array of recieps and create a tab panel for each one */}
                <TabPanel id='tab-panel-1'>
                    <ReceipeGrid receipe = {receipe}/>
                </TabPanel>
                <TabPanel id='tab-panel-2'>
                    <h6>Tjkkfdsdkfkajsdf</h6>
                </TabPanel>
            </Tabs>
        </div>
    )
}

 export default TabBar

