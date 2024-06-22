import React from 'react'
import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Workers from './pages/workers/Workers';

export default function App() {

  const AppRoutes = () => {
    const routes = useRoutes([
      { path: "/login", element: <Login /> },
      { path: "/", element: <Home /> },
      { path: "/workers", element: <Workers /> },
      
    ]);

    return routes;
  };
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
