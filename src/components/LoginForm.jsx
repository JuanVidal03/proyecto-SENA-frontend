import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import loginBg from "../assets/login-bg.jpg";
import logo from "../assets/logo-indestec.png"

import { login } from "../services/auth.services";
import { AuthContext } from "../context/AuthProvider.context";


const LoginForm = () => {

  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useContext(AuthContext);

  const { handleSubmit, register, formState: { errors } } = useForm();

  const handleLogin = handleSubmit(async(data) => {

    try {

      const loginResponse = await login(data);
      setUser(loginResponse.data.user);
      setIsAuthenticated(true);
      navigate("/");

    } catch (error) {

      setUser(null);
      setIsAuthenticated(false);
      console.log(error);
    
    }

  });

    return (
        <div className="bg-white w-full max-w-[1000px] h-[75%] flex relative z-[9] rounded-xl overflow-hidden shadow-login">
        <div className="w-full max-w-[50%] p-4 flex items-center justify-center flex-col">
          <div className="w-full flex items-center justify-center">
            <div className="bg-dark p-5 rounded-full">
              <img className="w-[100px]" src={logo} alt="Logo de Indestec" />
            </div>
          </div>
          <div className="text-dark w-full h-[60%] flex justify-center items-center">
            <form
              className="w-[60%] flex flex-col"
              onSubmit={handleLogin}
            >
              <div className="flex flex-col mb-4">
                <label className="mb-1 font-bold" htmlFor="user">
                  Correo Eléctronico: *
                </label>
                <input
                  className="p-2 rounded-lg text-[1rem] border border-dark focus:outline-none transition-all focus:bg-gray-100"
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Por favor ingrese el correo",
                    },
                    pattern: {
                      value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                      message: "Por favor ingrese un correo valido.",
                    },
                  })}
                />
                {errors.email && ( <span className="text-red-500"> {errors.email.message} </span> )}
              </div>

              <div className="flex flex-col mb-4">
                <label className="mb-1 font-bold" htmlFor="password">
                  Contraseña: *
                </label>
                <input
                  className="p-2 rounded-lg text-[1rem] border border-dark focus:outline-none transition-all focus:bg-gray-100"
                  type="password"
                  id="password"
                  name="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Por favor ingrese una contraseña",
                    },
                    minLength: {
                      value: 8,
                      message:
                        "La contraseña debe contener minimo 8 caracteres",
                    },
                  })}
                />
                {errors.password && ( <span className="text-red-500"> {errors.password.message} </span> )}
              </div>

              <div className="flex justify-center items-center">
                <button
                  className="border-none bg-dark font-bold text-white text-[1rem] cursor-pointer py-3 w-full rounded-lg mt-2"
                  type="submit"
                >
                  Ingresa
                </button>
              </div>
            </form>
          </div>
        </div>
        <figure className="w-full relative overflow-hidden max-w-[50%] after:content-[''] after:absolute after:top-0 after:left-0 after:bg-[#00000066] after:z-10 after:w-full after:h-full ">
          <img
            className="w-full h-full object-cover z-[1] absolute rounded-tr-xl rounded-br-xl"
            src={loginBg}
          />
          <div className="p-8 w-full h-full relative z-50 flex flex-col justify-center items-center">
            <h3 className="text-white text-3xl font-semibold">¡Bienvenido de nuevo!</h3>
            <p className="text-white text-lg">Te estabamos esperando.</p>
            <p className="text-white text-center mt-4">Accede a todo lo que necesitas con la confianza de que tus datos están protegidos. Encuentra lo que buscas en un instante y disfruta de tus productos y servicios favoritos. Descubre un mundo de nuevas experiencias.</p>
          </div>
        </figure>
      </div>

    );
}

export default LoginForm;