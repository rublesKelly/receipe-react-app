//This moduel is not being used by App.js it wass an atempt to modualarise the axios instance and routes into one js file and get the routes as functions 
//Configurations for axios requests
import axios from 'axios'

const API_KEY = process.env.react_app_api_key
const API_URL = 'https://api.spoonacular.com/recipes' 

const SEARCH_RECEIPE_URL = `${API_URL}/complexSearch?apiKey=${API_KEY}`
const RANDOM_RECEIPE_URL = `${API_URL}/random?apiKey=${API_KEY}`
// const GET_RECEIPE_INFO   = `${API_URL}/information?apiKey=${API_KEY}`

const REQUEST_URL = `${API_URL}/authentication/token/new?apiKey=${API_KEY}`
const LOGIN_URL = `${API_URL}/authentication/token/validate_with_login?apiKey=${API_KEY}`

const api ={
    //Get random receipe
    getRandomReceipe: async() => {
        await axios.get(RANDOM_RECEIPE_URL)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },

    //Get reciepes by query seach
    getReceipebyQuery: async(searchTerm) => {
        const response = await axios.get(`${SEARCH_RECEIPE_URL}&query=${searchTerm}`)
        .then((res) => {
            // console.log(res.data);
            return res.data
        })
        .catch((err) => {
            console.log(err);
        })
        // console.log(response);
        return response
    },

    //Get reciepes by id
    getReceipebyID: async(id) => {
        const response = await axios.get(`${API_URL}/${id}/information?apiKey=${API_KEY}`)
        .then((res) => {
            // console.log(res);
            return res.data
        })
        .catch((err) => {
            console.log(err);
        })
        console.log(response);
        return response
    },
}
    
    export {
    api,
    SEARCH_RECEIPE_URL,
    RANDOM_RECEIPE_URL
}











