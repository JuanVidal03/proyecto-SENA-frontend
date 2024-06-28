import axios from "axios";
const urlBase = 'http://localhost:8000/api';

const axiosConfig = axios.create({
    baseURL: urlBase,
    withCredentials: true,
});

export default axiosConfig;