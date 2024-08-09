import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from "./Protected.routes.jsx";
const Loader = lazy(() => import("../components/loader/Loader.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));

const Home = lazy(() => import("../pages/Home.jsx"));
const Workers = lazy(() => import("../pages/Workers.jsx"));

import UserContextProvider from "../context/user.context.jsx";


const AllRoutes = () => {

    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                {/* rutas publicas */}
                <Route path='/login' element={<Login/>}/>
                {/* rutas privadas */}
                |<Route element={<ProtectedRoutes/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/usuarios' element={
                        <UserContextProvider>
                            <Workers/>
                        </UserContextProvider>
                    }/>
                    {/* <Route path='/maquinas' element={<Workers/>}/>
                    <Route path='/procesos' element={<Workers/>}/>
                    <Route path='/archivos' element={<Workers/>}/>
                    <Route path='/proveedores' element={<Workers/>}/>
                    <Route path='/estadisticas' element={<Workers/>}/> */}
                </Route>
            </Routes>
        </Suspense>
    );
}

export default AllRoutes;
