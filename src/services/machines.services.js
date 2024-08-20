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
        console.log(result);
        return result;
    } catch (error) {
        return error.message;
    }
}