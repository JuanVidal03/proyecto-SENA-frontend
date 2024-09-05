import { Link } from "react-router-dom";

import logoEmpresaBlanco from "../assets/letras-blancas.png";


const HomeNavBar = () => {
    return (
        <div className="fixed z-30 w-full p-3 flex justify-center backdrop-blur-3xl">
                        <nav className="relative z-20 flex w-full max-w-[1300px] justify-between">
                <figure className="w-[15rem]">
                    <img src={logoEmpresaBlanco} alt={`Logo de la empresa ${import.meta.env.VITE_COMPANY_NAME}`} />
                </figure>
                <ul className="flex gap-6 items-center">
                    <li><a className="transition-all font-medium relative after:absolute after:transition-all after:w-full after:h-[2px] after:bg-white after:top-8 after:left-0 hover:after:top-full after:opacity-0 hover:after:opacity-100 after:invisible hover:after:visible" href="#hero">Inicio</a></li>
                    <li><a className="transition-all font-medium relative after:absolute after:transition-all after:w-full after:h-[2px] after:bg-white after:top-8 after:left-0 hover:after:top-full after:opacity-0 hover:after:opacity-100 after:invisible hover:after:visible" href="#about">Nosotros</a></li>
                    <li><a className="transition-all font-medium relative after:absolute after:transition-all after:w-full after:h-[2px] after:bg-white after:top-8 after:left-0 hover:after:top-full after:opacity-0 hover:after:opacity-100 after:invisible hover:after:visible" href="#services">Servicios</a></li>
                    <li><a className="transition-all font-medium relative after:absolute after:transition-all after:w-full after:h-[2px] after:bg-white after:top-8 after:left-0 hover:after:top-full after:opacity-0 hover:after:opacity-100 after:invisible hover:after:visible" href="#developers">Desarrolladores</a></li>
                    <li><a className="transition-all font-medium relative after:absolute after:transition-all after:w-full after:h-[2px] after:bg-white after:top-8 after:left-0 hover:after:top-full after:opacity-0 hover:after:opacity-100 after:invisible hover:after:visible" href="#contact">Contacto</a></li>
                    <li><Link
                            className="group relative inline-flex border-2 border-custom-purple focus:outline-none w-full sm:w-auto"
                            to="/login">
                                <span className="w-full text-white inline-flex items-center justify-center self-stretch px-4 py-2 text-lg text-center font-medium bg-custom-purple ring-1 ring-custom-purple ring-offset-1 ring-offset-custom-purple transform transition-transform group-hover:-translate-y-2 group-hover:translate-x-2 group-focus:-translate-y-1 group-focus:-translate-x-1">Iniciar Sesion</span>
                    </Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default HomeNavBar;
