import React from "react";
import imgLogoIndestec from "../../../public/logo-indestec.svg";
import User from "../user/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="w-full h-[42vh] flex bg-gradient-to-r from-azul-iconos to-azul-fuerte text-white rounded-br-[50px] rounded-bl-[50px] sticky">
      <div className="w-full max-w-[20%] flex justify-center items-end pb-4">
        <img className="w-[90%] object-cover" src={imgLogoIndestec} alt="" />
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
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </i>
          </div>
        </div>
        <div className="pt-4">
          <p className="text-4xl">Buenos días, Sebassstian Ahr!</p>
          <p className="text-slate-300">Que tengas un excelente día.</p>
        </div>
      </div>
    </nav>
  );
}
