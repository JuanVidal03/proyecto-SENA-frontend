import axios from "./axios";

export const getAllMachines = async() => {
    try {
        const result = await axios.get("/maquinas");
        return result.data;
    } catch (error) {
        return error.message;
    }
}

export const createMachine = async() => {
    try {
        const result = await axios.post("/maquinas");
        return result;
    } catch (error) {
        return error.message;
    }
}

export const deleteMachineById = async(id) => {
    try {

        const response = await axios.delete(`/maquinas/${id}`);
        return response;
        
    } catch (error) {
        console.log(error);
        return error.message;
    }
}