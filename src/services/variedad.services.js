import axios from "./axios.js";

export const getAllVariedades = async() => {
    try {
        
        const variedad = await axios.get();
        return variedad;

    } catch (error) {
        return error;
    }
}

export const createVariedad = async(variedad) => {
    try {
        
        const variedadCreated = await axios.post("", variedad);

    } catch (error) {
        return error;
    }
}
