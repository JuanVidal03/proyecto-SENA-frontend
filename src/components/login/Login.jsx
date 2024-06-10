import React from "react";
import imgLogin from "../../../public/imgLogin.webp";
import "./login.css";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const clickBotonIniciar = handleSubmit((data) => {
    console.log(data);
    navigate("/");
  });
  return (
    <section className="container">
      <div className="container-login">
        <div className="main-login">
          <div className="title-login">
            <h2>here logo</h2>
          </div>
          <div className="section-form">
            <form onSubmit={clickBotonIniciar}>
              <div className="label-input">
                <label htmlFor="user">User:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
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
                  <span className="text-danger-form">
                    {" "}
                    {errors.email.message}{" "}
                  </span>
                )}
              </div>

              <div className="label-input">
                <label htmlFor="password">Password:</label>
                <input
                  type="text"
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
                {errors.password && (
                  <span className="text-danger-form">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className="div-button">
                <button type="submit" value="Enviar">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <figure className="aside-img-login">
          <img className="img-login" src={imgLogin} alt="" />
        </figure>
      </div>
      <div className="back">
        <div className="top">
          <div className="circle-top"></div>
        </div>
        <div className="bottom">
          <div className="circle-bottom"></div>
        </div>
      </div>
    </section>
  );
}
