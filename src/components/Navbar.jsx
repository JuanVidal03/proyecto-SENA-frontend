import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import imgLogoIndestec from "../assets/logo-indestec.png";
import User from "./User.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { logout } from "../services/auth.services";

import { AuthContext } from "../context/AuthProvider.context";


export default function Navbar() {

  const navigate = useNavigate();
  const { setUser, setIsAuthenticated, user } = useContext(AuthContext);

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
    <nav className="w-full h-[42vh] flex bg-gradient-to-r from-azul-iconos to-azul-fuerte text-white rounded-br-[50px] rounded-bl-[50px] sticky">
      <div className="w-full max-w-[20%] flex justify-center items-end pb-4">
        <img className="w-[45%] object-cover" src={imgLogoIndestec} alt="" />
      </div>
      <div className="w-full max-w-[70%] mt-4">
        <div className="flex justify-between items-center pb-4 border-b border-indigo-400">
          <div className="logo-nosotros">
            <h4>LOGO NOSOTROS</h4>
          </div>
          <div className="flex gap-6">
            <i className="text-2xl cursor-pointer">
              <FontAwesomeIcon icon={faBars} />
            </i>
            <User />
            <i className="text-2xl cursor-pointer">
              <FontAwesomeIcon
                onClick={handleLogout}
                icon={faArrowRightFromBracket} />
            </i>
          </div>
        </div>
        <div className="pt-4">
          <p className="text-4xl">Buenos días, {user.nombreCompleto}!</p>
          <p className="text-slate-300">Que tengas un excelente día.</p>
        </div>
      </div>
    </nav>
  );
}
