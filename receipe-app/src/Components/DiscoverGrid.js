import React, {useState, useEffect} from 'react'
import RecipeCollectionCard from './RecipeCollectionCard';
import RecipeThumbnail from "./RecipeThumbnail";
import '../App.css'
import {api} from '../axios';
import '../Styles/HomeSection.css'
import Announcement from './Annoucement';

function DiscoverGrid({userData, announcement, onAddRecipeClicked}) {

    const [discoverTitles, setDiscoverTitles] = useState(['French Cusine'])
    const [discoverData, setDiscoverData] = useState([])
    const [likedRecipes, setLikedRecipes] = useState([])

    //UseEffect to get Frecnh cusine on discover sectoin
    useEffect(() => {
        api.getRecipebyCusine('french')
            .then(res=>setDiscoverData(res.results))
        api.getRecipebyBulk([660404,639580])
            .then(res=>setLikedRecipes(res))
        return () => {
            console.log('clenaip');
        }
    }, [])

    return (
        <div id="discover-section">
            {announcement.show && <Announcement/>}
            <h3  id="discover-greeting">Good Afternoon</h3>
            <div className="quick-links-grid">
                {userData.map((eachItem) =>
                    (<RecipeCollectionCard
                        title={eachItem.title}
                        image={eachItem.image}
                        recipes={likedRecipes}
                    />)
                 )}
            </div>
            <h3  id="discover-title">{discoverTitles[0]}</h3>
            <div id="discover-section1">
                {discoverData.map((recipe)=>
                    <RecipeThumbnail
                        key={recipe.id}
                        id={recipe.id}
                        title={recipe.title}
                        image={recipe.image}
                        onAddRecipeClicked={onAddRecipeClicked}
                />)}
            </div>
        </div>        
    )
}

export default DiscoverGrid