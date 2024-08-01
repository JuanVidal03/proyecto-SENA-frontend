import { Suspense, lazy } from "react";

const LoginForm = lazy(() => import("../components/LoginForm.jsx"));
const Loader = lazy(() => import("../components/loader/Loader.jsx"));


export default function Login() {

  document.title = `Inicia sesión | ${import.meta.env.VITE_COMPANY_NAME}`;

  return (

    <Suspense fallback={<Loader/>}>

      <section className="w-full h-screen flex justify-center items-cente">
        <div className="w-[40%] flex flex-col justify-center gap-8 h-screen py-12 px-20">
          
          <div>
            <h1 className="text-3xl font-bold">¡Bienvenido de vuelta!</h1>
            <p className="text-lg">Te estabamos esperando.</p>
          </div>

          <LoginForm/>

        </div>  
        <div className="w-[60%] h-screen bg-gradient-to-r from-azul-iconos to-azul-fuerte animate-infinite-move-login"></div>
      </section>

    </Suspense>

  );
}
