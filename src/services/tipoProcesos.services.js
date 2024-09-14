import axios from "./axios.js";

export const getAllTipoProcesos = async() => {
    try {
        
        const tipoProcesos = await axios.get("/tipoProceso");
        return tipoProcesos;

    } catch (error) {
        return error.message;
    }
}

export const createTipoProceso = async(tipoProceso) => {
    try {
        
        const tipoProcesoCreated = await axios.post("/tipoProceso", tipoProceso);
        return tipoProcesoCreated;

    } catch (error) {
        return error.message;
        
    }
}

export const deleteTipoProceso = async(id) => {

    try {
        
        const response = await axios.delete(`/tipoProceso/${id}`);
        return response;

    } catch (error) {
        return error.message;
    }

}

export const updateTipoProceso = async(id, tipoProceso) => {
    try {
        
        const response = await axios.put(`/tipoProceso/${id}`, tipoProceso);
        return response;

    } catch (error) {
        return error;
    }
}
