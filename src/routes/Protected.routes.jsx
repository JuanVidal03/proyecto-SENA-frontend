import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../context/AuthProvider.context';

import Loader from '../components/loader/Loader';

const ProtectedRoutes = () => {

    const { isAuthenticated, loading } = useContext(AuthContext);

    if(loading) return <Loader/>
    if(!loading && !isAuthenticated) return <Navigate to="/login" replace/>

    return <Outlet/>
}

export default ProtectedRoutes;
