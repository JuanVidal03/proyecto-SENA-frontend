import axios from "./axios";

export const login = async(credentials) => {
    try {

        const user = await axios.post('/login', credentials);
        return user;
        
    } catch (error) {
        console.log("Error al ingresar a la aplicacion.", error);
    }
}

export const verifyToken = () => {
    try {

        const response = axios.get('/verify-token');
        return response;

    } catch (error) {
        console.log("Error al verificar el token", error);
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