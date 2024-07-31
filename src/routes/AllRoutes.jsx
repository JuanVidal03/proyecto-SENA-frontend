import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from "./Protected.routes.jsx";
const Loader = lazy(() => import("../components/loader/Loader.jsx"));
const Login = lazy(() => import("../pages/login/Login.jsx"));
const Home = lazy(() => import("../pages/Home.jsx"));


const AllRoutes = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                {/* rutas publicas */}
                <Route path='/login' element={<Login/>}/>
                {/* rutas privadas */}
                |<Route element={<ProtectedRoutes/>}>
                    <Route path='/' element={<Home/>}/>
                </Route>
            </Routes>
        </Suspense>
    );
}

export default AllRoutes;
