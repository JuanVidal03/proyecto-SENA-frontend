import axios from "axios";
const urlBase = import.meta.env.VITE_BACKEND_URL;

const axiosConfig = axios.create({
    baseURL: urlBase,
    withCredentials: true,
});

export default axiosConfig;