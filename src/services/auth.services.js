import axios from "./axios";

export const register = async(data) => {
    try {
        
        const createdUser = await axios.post('/register', data);
        return createdUser;

    } catch (error) {
        console.log("Error al registrar el usuario.", error);
    }
}

export const login = async(credentials) => {
    try {

        const user = await axios.post('/login', credentials);
        return user;
        
    } catch (error) {
        return error;
    }
}

export const verifyToken = () => {
    try {

        const response = axios.get('/verify-token');
        return response;

    } catch (error) {
        console.log("Error al verificar el token", error);
        return error;
    }
}

export const logout = async() => {
    try {

        const response = await axios.post("/logout");
        return response;

    } catch (error) {
        console.log("Error al cerrar sesion!");
    }
}