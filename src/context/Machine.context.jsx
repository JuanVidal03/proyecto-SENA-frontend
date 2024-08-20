import { createContext, useState } from 'react';

export const MachineContext = createContext();

const MachineContextProvider = ({ children }) => {
    
    const [machines, setMachines] = useState([]);

    return (
        <MachineContext.Provider value={{
            machines,
            setMachines
        }}>
            { children }
        </MachineContext.Provider>
    );
}

export default MachineContextProvider;
