import React from "react";
import imgLogin from "../../../public/imgLogin.png";
import logo from "../../../public/logo-indestec.png"
import "./login.css";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../context/AuthProvider.context";

import { login } from "../../services/auth.services";

export default function Login() {

  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useContext(AuthContext); 

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const loginApp = handleSubmit( async (data) => {
    
    const authUser = await login(data);
    setUser(authUser.data.user);
    setIsAuthenticated(true);
    navigate("/");


  });

  return (
    <section className="w-full h-screen relative overflow-hidden flex justify-center items-center bg-red-600">
      <div className="bg-white w-full max-w-[1000px] h-[75%] flex relative z-[9] rounded-xl shadow-login">
        <div className="w-full max-w-[50%] p-4 flex items-center justify-center flex-col">
          
          <div className="w-full flex items-center justify-center">
            <div className="bg-dark p-5 rounded-full">
              <img className="w-[100px]" src={`${logo}`} alt="Logo de Indestec" />
            </div>
          </div>
         
          <div className="text-azul-fuerte w-full h-[60%] flex justify-center items-center">
            <form className="w-[60%] flex flex-col" onSubmit={loginApp}>
              <div className="flex flex-col mb-4">
                <label className="mb-1 font-bold" htmlFor="user">Correo Eléctronico:</label>
                <input
                  className="p-2 rounded-lg text-[1rem] border border-azul-fuerte focus:outline-none transition-all focus:bg-gray-100"
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
                      message: "Por favor ingrese un correo valido",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500">
                    {" "}
                    {errors.email.message}{" "}
                  </span>
                )}
              </div>

              <div className="flex flex-col mb-4">
                <label className="mb-1 font-bold" htmlFor="password">Contraseña:</label>
                <input
                  className="p-2 rounded-lg text-[1rem] border border-azul-fuerte focus:outline-none transition-all focus:bg-gray-100"
                  type="password"
                  id="password"
                  name="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Por favor ingrese una contraseña",
                    },
                    minLength: {
                      value: 6,
                      message:
                        "La contraseña debe contener minimo 6 caracteres",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className="flex justify-center items-center">
                <button className="border-none bg-[#020817] font-bold text-white text-[1rem] cursor-pointer py-3 w-full rounded-lg mt-2" type="submit">
                  Ingresa
                </button>
              </div>
            </form>
          </div>
        </div>
        <figure className="w-full relative max-w-[50%] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-[#0000008c] after:z-20 after:rounded-tr-xl after:rounded-br-xl">
          <img className="w-full h-full object-cover z-[1] absolute top-0 left-0 rounded-tr-xl rounded-br-xl " src={imgLogin} alt="" />
          <div className="w-full h-full p-8 flex justify-center gap-2 items-center relative z-[99] flex-col">
            <h1 className="text-white font-bold text-3xl">Bienvenido de vuelta!</h1>
            <p className="text-white font-light text-lg">Te estabamos esperando.</p>
            <p className="text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas hic aspernatur quidem repellat magnam obcaecati porro alias animi? Odio, expedita beatae? Perferendis aliquid ducimus dolor amet, quae praesentium ex!</p>
          </div>
        </figure>
      </div>
      {/* efectos de los circulos */}
      <div className="h-full w-full flex justify-between flex-col absolute bg-gris-suave">
        <div>
          <div className="circle-top animate-bounce-login"></div>
        </div>
        <div className="flex justify-end">
          <div className="circle-bottom animate-bounce-login"></div>
        </div>
      </div>
      {/* fin efectos de los cirulos */}
    </section>
  );
}