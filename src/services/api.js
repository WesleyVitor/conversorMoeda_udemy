import axios from 'axios';

//https://free.currconv.com/api/v7/
//convert?q=USD_PHP&compact=ultra&apiKey=196b42696320e1cd3a63

const api = axios.create({
    baseURL:"https://free.currconv.com/api/v7",
});

export default api;