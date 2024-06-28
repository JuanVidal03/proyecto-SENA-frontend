import { useContext } from "react";
import "./navbar.css";
import imgLogoIndestec from "../../../public/logo-indestec.svg";
import User from "../user/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import { logout } from "../../services/auth.services";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthProvider.context";


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
    <nav className="navbar">
      <div className="div-img">
        <img className="logo-indestec" src={imgLogoIndestec} alt="" />
      </div>
      <div className="container-navbar">
        <div className="navbar-menu">
          <div className="logo-nosotros">
            <h4>LOGO NOSOTROS</h4>
          </div>
          <div className="menu">
            <i className="icons-nav">
              <FontAwesomeIcon icon={faBars} />
            </i>
            <User />
            <i className="icons-nav">
              <FontAwesomeIcon
                onClick={handleLogout}
                icon={faArrowRightFromBracket} />
            </i>
          </div>
        </div>
        <div className="mensaje">
          <p className="p1">Buenos días, {user.nombreCompleto}!</p>
          <p className="p2">Que tengas un excelente día.</p>
        </div>
      </div>
    </nav>
  );
}
