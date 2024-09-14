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

export const updateUserById = async(id , data) => {
    try {

        const response = await axios.put(`/usuarios/${id}`, data);
        return response;
        
    } catch (error) {
        console.log(error);
        return error
    }
}

export const findUserById = async(id) => {
    try {

        const response = await axios.get(`/usuarios/${id}`);
        return response.data;
        
    } catch (error) {
        console.log(error);
        return error;
        
    }
}