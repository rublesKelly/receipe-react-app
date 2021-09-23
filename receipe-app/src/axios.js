//This moduel is not being used by App.js it wass an atempt to modualarise the axios instance and routes into one js file and get the routes as functions 
//Configurations for axios requests
import axios from 'axios'

const API_KEY = process.env.react_app_api_key
const API_URL = 'https://api.spoonacular.com/recipes' 

const SEARCH_RECIPE_URL = `${API_URL}/complexSearch?apiKey=${API_KEY}`
const RANDOM_RECIPE_URL = `${API_URL}/random?apiKey=${API_KEY}`
//const GET_RECIPE_INFO   = `${API_URL}/information?apiKey=${API_KEY}`

// const REQUEST_URL = `${API_URL}/authentication/token/new?apiKey=${API_KEY}`
// const LOGIN_URL = `${API_URL}/authentication/token/validate_with_login?apiKey=${API_KEY}`

const api ={
    //Get random recipe
    getRandomRecipe: async() => {
        const response = await axios.get(RANDOM_RECIPE_URL)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err);
        })
        return response
    },

    //Complex search the args might need to be an object 
    getComplexbyQuery: async(
            searchTerm, 
            cusine, 
            diet, 
            intolerances, 
            maxReadyTime, 
            sort, 
            sortDirection) => {
                const response = await axios.get(`${SEARCH_RECIPE_URL}&query=${searchTerm}`,{
                    params:{
                        cusine: cusine,
                        diet: diet,
                        intolerances: intolerances, 
                        maxReadyTime: maxReadyTime, 
                        sort: sort, 
                        sortDirection: sortDirection
                    }
                })
        
    },

    //Get recipes by query seach
    getRecipebyQuery: async(searchTerm) => {
        const response = await axios.get(`${SEARCH_RECIPE_URL}&query=${searchTerm}`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err);
        })
        // console.log(response);
        return response
    },

    //Get recipes by query seach
    getDetailedRecipebyQuery: async(searchTerm) => {
        const response = await axios.get(`${SEARCH_RECIPE_URL}&query=${searchTerm}&addRecipeNutrition=true&addRecipeInformation=true`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err);
        })
        console.log(response);
        return response
    },

    //Get recipes by id
    getRecipebyID: async(id) => {
        const response = await axios.get(`${API_URL}/${id}/information?apiKey=${API_KEY}`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err);
        })
        console.log(response);
        return response
    },

    //Get recipes by cusine
    getRecipebyCusine: async(cuisine) => {
        const response = await axios.get(`${SEARCH_RECIPE_URL}&cuisine=${cuisine}`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err);
        })
        // console.log(response);
        return response
    },

    //Get multi recipes by id
    getRecipebyBulk: async(ids) => {
        const response = await axios.get(`${API_URL}/informationBulk?ids=${ids}&apiKey=${API_KEY}`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err);
        })
        console.log(response);
        return response
    }
}
    
    export {
    api,
    SEARCH_RECIPE_URL,
    RANDOM_RECIPE_URL
}











