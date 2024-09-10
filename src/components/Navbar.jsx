import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import imgLogoIndestec from "../assets/logo-indestec.png";
import logoBlanco from "../assets/letras-blancas.png";
import User from "./User.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { logout } from "../services/auth.services";

import { AuthContext } from "../context/AuthProvider.context";


export default function Navbar() {

  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useContext(AuthContext);

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
    <nav className="w-full mb-6 h-[55vh] flex bg-gradient-to-r from-azul-iconos to-azul-fuerte text-white rounded-bl-[50px]">
      <div className="w-full max-w-[25%] flex justify-center items-end pb-10">
        <img className="w-[45%] object-cover" src={imgLogoIndestec} alt="Logo de la empresa"/>
      </div>
      <div className="w-full max-w-[70%]">
        <div className="flex items-center py-2 justify-between border-b border-white">

          <figure className="w-56 h-full flex items-center">
            <img className="w-full" src={logoBlanco} alt={`Logo de la empresa ${import.meta.env.VITE_COMPANY_NAME}`} />
          </figure>

          <div className="flex gap-6 items-center">
            <User />
            <i className="text-2xl cursor-pointer">
              <FontAwesomeIcon
                onClick={handleLogout}
                icon={faArrowRightFromBracket} />
            </i>
          </div>

        </div>
      </div>
    </nav>
  );
}
