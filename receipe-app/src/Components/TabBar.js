import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReceipeGrid from './ReceipeGrid';
import '../tabs.css'


<<<<<<< HEAD

function TabBar({receipes,onRemoveReceiepeClicked}) {

=======
function TabBar({receipes, onRemoveReceiepeClicked, joint}) {
>>>>>>> d81c0b0e76ec7d6b8a7c53660dcd1aee85f2e4ea
    return (
        <div className='tab-bar'>
            <Tabs>
                <TabList>
                {receipes.map(receipe => 
                   <Tab onRemoveReceiepeClicked={onRemoveReceiepeClicked}>
                       {receipe.title}
<<<<<<< HEAD
                       {console.log(receipe.key)}
=======
>>>>>>> d81c0b0e76ec7d6b8a7c53660dcd1aee85f2e4ea
                        <button onClick={()=> onRemoveReceiepeClicked(receipe.key)} >X</button>
                   </Tab>
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

