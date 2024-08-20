import { createContext } from 'react';
import UserContextProvider from './user.context.jsx';
import MachineContextProvider from './Machine.context.jsx';

export const SharedContext = createContext();

const SharedContextProvider = ({children}) => {

    return (
        <UserContextProvider>
            <MachineContextProvider>
                { children }
            </MachineContextProvider>
        </UserContextProvider>
    );
}

export default SharedContextProvider;
