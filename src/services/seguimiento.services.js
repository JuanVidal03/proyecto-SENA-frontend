import axios from "./axios.js"

export const getAllSeguimientos = async() => {
    try {
        
        const segumientos = await axios.get("/seguimiento");
        return segumientos;

    } catch (error) {
        return error;
    }
}
