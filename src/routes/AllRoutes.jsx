import { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import ProtectedRoutes from "./Protected.routes.jsx";
const Loader = lazy(() => import("../components/loader/Loader.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));

const Dashboard = lazy(() => import("../pages/Dashboard.jsx"));
const Workers = lazy(() => import("../pages/Workers.jsx"));
const Machines = lazy(() => import("../pages/Machines.jsx"));

import UserContextProvider from "../context/user.context.jsx";
import SharedContextProvider from "../context/shared.context.jsx";
import MachineContextProvider from "../context/Machine.context.jsx";


const AllRoutes = () => {

    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                {/* rutas publicas */}
                <Route path='/login' element={<Login/>}/>
                {/* rutas privadas */}
                |<Route element={<ProtectedRoutes/>}>
                    <Route path='/dashboard' element={
                        <SharedContextProvider>
                            <Dashboard/>
                        </SharedContextProvider>
                    }/>
                    <Route path='/usuarios' element={
                        <UserContextProvider>
                            <Workers/>
                        </UserContextProvider>
                    }/>
                    <Route path='/maquinas' element={
                        <MachineContextProvider>
                            <Machines/>
                        </MachineContextProvider>
                    }/>
                    <Route path='/' element={<Navigate to="/dashboard" replace />}/>
                    {/* <Route path='/procesos' element={<Workers/>}/>
                    <Route path='/archivos' element={<Workers/>}/>
                    <Route path='/estadisticas' element={<Workers/>}/> */}
                </Route>
            </Routes>
        </Suspense>
    );
}

export default AllRoutes;
