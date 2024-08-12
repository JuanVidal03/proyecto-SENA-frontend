import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [toastMessage, setToastMessage] = useState("");

    return (
        <UserContext.Provider value={{
            users,
            setUsers,
            toastMessage,
            setToastMessage
        }}>
            { children }
        </UserContext.Provider>
    );
}

export default UserContextProvider;
