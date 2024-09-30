import { createContext, useState } from 'react';

export const SeguimientoContext = createContext();

const SeguimientoContextProvider = ({ children }) => {

    const [seguimiento, setSeguimiento] = useState(null);

    return (
        <SeguimientoContext.Provider value={{
            seguimiento,
            setSeguimiento
        }}>
            { children }
        </SeguimientoContext.Provider>
    );
}

export default SeguimientoContextProvider;
