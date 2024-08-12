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

export const deleteUserById = async(id) => {
    try {
        
        const result = await axios.delete(`/usuarios/${id}`);
        return result;

    } catch (error) {
        console.log(error);
        return error;
    }
}