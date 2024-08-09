import axios from "./axios";

export const getAllUsers = async() => {
    try {
        
        const users = await axios.get('/usuarios');
        return users.data;

    } catch (error) {
        console.log(error);
        return error;
    }
}