import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import imgLogoIndestec from "../assets/logo-indestec.png";
import User from "./User.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { logout } from "../services/auth.services";

import { AuthContext } from "../context/AuthProvider.context";


export default function Navbar() {

  const navigate = useNavigate();
  const { setUser, setIsAuthenticated, user } = useContext(AuthContext);

  const greetByTime = () => {
    
    const date = new Date();
    
    if (date.getHours() >= 3 && date.getHours() < 12) {
      return { greet: `!Buenos dias, ${user.nombreCompleto}!`, text: "Que tengas un excelente día." }
    } else if (date.getHours() >= 12 && date.getHours() < 19){
      return { greet: `!Buenas tardes, ${user.nombreCompleto}!`, text: "Que tengas un excelente resto de día." }
    } else {
      return { greet: `!Buenas noches, ${user.nombreCompleto}!`, text: "Que tengas un excelente noche." }
    }

  }

  const handleLogout = async() => {
    try {
      
      await logout();
      setUser(null);
      setIsAuthenticated(false);
      navigate("/login");

    } catch (error) {
      console.log("Error al cerrar sesion.");
    }
  }


  return (
    <nav className="w-full h-[60vh] flex bg-gradient-to-r from-azul-iconos to-azul-fuerte text-white rounded-bl-[50px]">
      <div className="w-full max-w-[25%] flex justify-center items-end pb-10">
        <img className="w-[45%] object-cover" src={imgLogoIndestec} alt="Logo de la empresa"/>
      </div>
      <div className="w-full max-w-[70%] mt-4">
        <div className="flex justify-between items-center pb-4 border-b border-indigo-400">
          <div className="logo-nosotros">
            <h4>LOGO NOSOTROS</h4>
          </div>
          <div className="flex gap-6 items-center">
            <User />
            <i className="text-2xl cursor-pointer">
              <FontAwesomeIcon
                onClick={handleLogout}
                icon={faArrowRightFromBracket} />
            </i>
          </div>
        </div>
        <div className="pt-4">
          <p className="text-3xl font-semibold">{ greetByTime().greet }</p>
          <p className="text-slate-300">{ greetByTime().text }</p>
        </div>
      </div>
    </nav>
  );
}
