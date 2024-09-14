import { createContext, useState } from 'react';

export const TipoProcesoContext = createContext() 

const TipoProcesoContextProvider = ({ children }) => {

    const [tipoProcesos, setTipoProcesos] = useState([]);
    const [tipoProcesoToUpdate, setTipoProcesoToUpdate] = useState("");

    return (
        <TipoProcesoContext.Provider value={{
            tipoProcesos,
            setTipoProcesos,
            tipoProcesoToUpdate,
            setTipoProcesoToUpdate
        }}>
            { children }
        </TipoProcesoContext.Provider>
    );
}

export default TipoProcesoContextProvider;
