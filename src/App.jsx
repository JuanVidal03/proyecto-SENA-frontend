import React from 'react'
import { BrowserRouter, useRoutes } from "react-router-dom";
import Login from './components/login/Login'
import Home from './pages/home/Home';

export default function App() {

  const AppRoutes = () => {
    const routes = useRoutes([
      { path: "/login", element: <Login /> },
      { path: "/", element: <Home /> },
      
    ]);

    return routes;
  };
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
