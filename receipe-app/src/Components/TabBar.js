import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReceipeGrid from './ReceipeGrid';

//Delcaring State
// const [receiepTitle, setreceiepTitle] = useState(initialState)

function TabBar({receipe}) {
    return (
        <div className='tab-bar'>
            <Tabs>
                <TabList>
                    <Tab>{receipe.title}</Tab>
                    <Tab>Receipe 2</Tab>
                </TabList>
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
