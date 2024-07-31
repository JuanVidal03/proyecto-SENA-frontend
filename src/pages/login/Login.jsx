import { Suspense, lazy } from "react";

const LoginForm = lazy(() => import("../../components/LoginForm.jsx"));
const Loader = lazy(() => import("../../components/loader/Loader.jsx"));

import "./login.css";


export default function Login() {

  document.title = "Inicia Sesion | Nombre de la empresa";

  return (

    <Suspense fallback={<Loader/>}>
      <section className="w-full h-screen relative flex justify-center items-center overflow-hidden bg-gris-suave">      
        
        <LoginForm/>
        
        {/* efectos de los circulos */}
        <div className="h-full w-full flex justify-between flex-col absolute">
          <div>
            <div className="circle-top animate-bounce-login"></div>
          </div>
          <div className="flex justify-end">
            <div className="circle-bottom animate-bounce-login"></div>
          </div>
        </div>
        {/* fin efectos de los cirulos */}
      </section>
    </Suspense>

  );
}
