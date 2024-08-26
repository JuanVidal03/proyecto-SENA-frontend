import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [userToUpdate, setUserToUpdate] = useState(null);

    return (
        <UserContext.Provider value={{
            users,
            setUsers,
            userToUpdate,
            setUserToUpdate
        }}>
            { children }
        </UserContext.Provider>
    );
}

export default UserContextProvider;
