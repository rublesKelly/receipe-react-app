import React, {useState, useEffect} from 'react'
import ReceipeCollectionCard from './ReceipeCollectionCard';
import ReceipeThumbnail from "./ReceipeThumbnail";
import '../App.css'
import {api} from '../axios';
import '../Styles/HomeSection.css'
import Announcement from './Annoucement';

function DiscoverGrid({userData, announcement, onAddReceipeClicked}) {

    const [discoverTitles, setDiscoverTitles] = useState(['French Cusine'])
    const [discoverData, setDiscoverData] = useState([])
    const [likedReceipes, setLikedReceipes] = useState([])

    //UseEffect to get Frecnh cusine on discover sectoin
    useEffect(() => {
        api.getReceipebyCusine('french')
            .then(res=>setDiscoverData(res.results))
        api.getReceipebyBulk([660404,639580])
            .then(res=>setLikedReceipes(res))
        return () => {
            console.log('clenaip');
        }
    }, [])

    return (
        <div id="discover-section">
            {announcement.show && <Announcement/>}
            <h1  id="discover-greeting">Good Afternoon</h1>
            <div className="quick-links-grid">
                {userData.map((eachItem) =>
                    (<ReceipeCollectionCard
                        title={eachItem.title}
                        image={eachItem.image}
                        receipes={likedReceipes}
                    />)
                 )}
            </div>
            <h1  id="discover-title">{discoverTitles[0]}</h1>
            <div id="discover-section1">
                {discoverData.map((receipe)=>
                    <ReceipeThumbnail
                        key={receipe.id}
                        id={receipe.id}
                        title={receipe.title}
                        image={receipe.image}
                        onAddReceipeClicked={onAddReceipeClicked}
                />)}
            </div>
        </div>        
    )
}

export default DiscoverGrid