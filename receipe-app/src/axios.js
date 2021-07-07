import ax from 'axios'

const axios = ax.create({
    baseURL:  'https://api.spoonacular.com/recipes',
    timeout: 1000,
    headers: {}
});

//Get request for random receipe /random?query=&apiKey=${process.env.react_app_api_key}
async function getRandomReceipe(){
     await axios.get(`/random?query=&apiKey=${process.env.react_app_api_key}`,{})
        .then(res => {
            console.table(res.data)
            return res
        })
        .catch(err => {
            console.log(err);
        })    
}

// getRandomReceipe()

export default getRandomReceipe