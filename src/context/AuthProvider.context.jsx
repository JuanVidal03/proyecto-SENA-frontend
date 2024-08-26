import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import { verifyToken } from '../services/auth.services';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    // verificar la cookie de sesion
    useEffect(() => {

        const checkLogin = async() => {
            const cookies = Cookies.get();

            if(!cookies.token) {
                setIsAuthenticated(false);
                setUser(null);
            }
                
            try {
                const res = await verifyToken(cookies.token);
                if(!res.data){
                    setIsAuthenticated(false);
                    setLoading(false);
                    return setUser(null);
                }

                setLoading(false);
                setIsAuthenticated(true);
                setUser(res.data);

            } catch (error) {
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);
            }

        }
        checkLogin();

    }, []);

    //manejar el estado del modal
    const [modalState, setModalState] = useState(false);


    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            loading,
            setLoading,
            user,
            setUser,
            modalState,
            setModalState
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
