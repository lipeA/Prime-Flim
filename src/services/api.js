import axios from "axios";


// url base: https://api.themoviedb.org/3

// url da api movie/550?api_key=113622eb4600dbf11e044ac848f26175


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;



