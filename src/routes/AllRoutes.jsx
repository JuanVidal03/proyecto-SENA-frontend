import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from "./Protected.routes.jsx";
const Loader = lazy(() => import("../components/loader/Loader.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));

const Dashboard = lazy(() => import("../pages/Dashboard.jsx"));
const Workers = lazy(() => import("../pages/Workers.jsx"));
const Machines = lazy(() => import("../pages/Machines.jsx"));
const TipoProcesos = lazy(() =>import("../pages/TipoProcesos.jsx"));
const Home = lazy(() => import("../pages/Home.jsx"));
const Variedad = lazy(() => import("../pages/Variedad.jsx"));
const Seguimientos = lazy(() => import("../pages/Seguimientos.jsx"));
const SingleSeguimineto = lazy(() => import("../pages/SingleSeguimineto.jsx"));

import UserContextProvider from "../context/user.context.jsx";
import SharedContextProvider from "../context/shared.context.jsx";
import MachineContextProvider from "../context/Machine.context.jsx";
import TipoProcesoContextProvider from "../context/TipoProceso.context.jsx";
import SeguimientoContextProvider from "../context/Seguimiento.context.jsx";


const AllRoutes = () => {

    return (
        <Suspense fallback={null}>
            <Routes>
                {/* rutas publicas */}
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>

                {/* rutas privadas */}
                <Route element={<ProtectedRoutes/>}>
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

                    <Route path='/procesos' element={
                        <TipoProcesoContextProvider>
                            <TipoProcesos/>
                        </TipoProcesoContextProvider>
                    }/>

                    <Route path="/variedades" element={<Variedad/>}/>

                    <Route path="/seguimientos" element={
                        <SeguimientoContextProvider>
                            <Seguimientos/>
                        </SeguimientoContextProvider>
                    }/>

                    <Route path="/seguimiento/:id" element={
                        <SeguimientoContextProvider>
                            <SingleSeguimineto/>
                        </SeguimientoContextProvider>
                    }/>

                </Route>
            </Routes>
        </Suspense>
    );
}

export default AllRoutes;
