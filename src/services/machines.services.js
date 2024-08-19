import axios from "./axios";

export const getAllMachines = async() => {
    try {
        const result = await axios.get("/maquinas");
        return result;
    } catch (error) {
        return error.message;
    }
}