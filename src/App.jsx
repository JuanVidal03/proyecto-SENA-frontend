import { useContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';

import AuthContextProvider from './context/AuthProvider.context';
import ProtectedRoutes from './routes/Protected.routes';
import Login from './pages/login/Login';
import Workers from './pages/workers/Workers';

export default function App() {


  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          {/* rutas publicas */}
          <Route path='/login' element={<Login/>}/>
          {/* rutas privadas */}
          |<Route element={<ProtectedRoutes/>}>
            <Route path='/' element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}
