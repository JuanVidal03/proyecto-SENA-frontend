import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { login } from "../services/auth.services";
import { AuthContext } from "../context/AuthProvider.context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

const LoginForm = () => {

  const [isPasswordActive, setIsPasswordActive] = useState(true);

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

      <div className="text-dark w-full">

          <form
            className="w-full flex flex-col"
            onSubmit={handleLogin}
          >
            <div className="flex flex-col mb-4">
              <label className="mb-1 font-bold">
                Correo Eléctronico: *
              </label>
              <input
                className="p-3 rounded-lg text-[1rem] border border-gray-300 outline-none transition-all focus:bg-gray-100"
                type="email"
                id="email"
                name="email"
                placeholder="carlos@gmail.com"
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
              { errors.email && ( <span className="text-red-500"> {errors.email.message} </span> ) }
            </div>

            <div className="flex flex-col mb-4 relative">
              <label className="mb-1 font-bold" htmlFor="password">
                Contraseña: *
              </label>
              <input
                className="p-3 rounded-lg text-[1rem] border border-gray-300 outline-none transition-all focus:bg-gray-100"
                type={`${isPasswordActive ? 'password' : 'text'}`}
                id="password"
                name="password"
                placeholder="•••••••••••"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Por favor ingrese una contraseña.",
                  },
                  minLength: {
                    value: 8,
                    message:
                      "La contraseña debe contener minimo 8 caracteres.",
                  },
                })}
              />
              { errors.password && ( <span className="text-red-500"> {errors.password.message} </span> ) }

              <div className="absolute top-[55%] right-[3%]">
                {
                  isPasswordActive ? (
                    <FontAwesomeIcon
                    onClick={() => setIsPasswordActive(false)}
                    className="text-xl text-gray-500 relative z-50"
                    icon={faEye}
                    />
                  ) : (
                    <FontAwesomeIcon
                    onClick={() => setIsPasswordActive(true)}
                    className="text-xl text-gray-500 relative z-50"
                    icon={faEyeSlash}
                    />
                  )
                }
              </div>

            </div>

            <div className="flex justify-center items-center">
              <button
                className="border-none transition-all bg-dark font-bold text-white text-[1rem] cursor-pointer py-3 w-full rounded-lg mt-2 hover:-translate-y-1"
                type="submit"
              >
                Ingresa
              </button>
            </div>
          </form>

        </div>


    );
}

export default LoginForm;