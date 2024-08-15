import { createContext } from 'react';
import UserContextProvider from './user.context.jsx';

export const SharedContext = createContext();

const SharedContextProvider = ({children}) => {

    return (
        <UserContextProvider>
            { children }
        </UserContextProvider>
    );
}

export default SharedContextProvider;
