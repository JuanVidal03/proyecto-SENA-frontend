import React from "react";
import "./navbar.css";
import imgLogoIndestec from "../../../public/logo-indestec.svg";
import User from "../user/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
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
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </i>
          </div>
        </div>
        <div className="mensaje">
          <p className="p1">Buenos días, Sebassstian Ahr!</p>
          <p className="p2">Que tengas un excelente día.</p>
        </div>
      </div>
    </nav>
  );
}
