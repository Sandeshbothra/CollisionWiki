import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:"https://data.cityofnewyork.us/"
})

export default axiosInstance;