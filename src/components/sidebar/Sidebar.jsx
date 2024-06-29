import React from "react";
import { Link,  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faChartLine,
  faNoteSticky,
  faPlantWilt,
  faUsers,
  faGears,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {

  return (
    <aside className="w-full max-w-[20%] flex justify-center pt-4 sticky">
      <div className="w-full max-w-[60%] flex justify-between flex-wrap absolute">
        <div className="cursor-pointer w-full max-w-[45%] flex-col text-center text-azul-iconos px-4 rounded-md mb-4">
          <Link className="text-4xl text-azul-iconos" to='/' >
            <FontAwesomeIcon icon={faHouse} />
          </Link>
          <p>Inicio</p>
        </div>
        <div className="cursor-pointer w-full max-w-[45%] flex-col text-center text-azul-iconos px-4 rounded-md mb-4">
          <Link className="text-4xl text-azul-iconos" to='/workers' >
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <p>Operarios</p>
        </div>
        <div className="cursor-pointer w-full max-w-[45%] flex-col text-center text-azul-iconos px-4 rounded-md mb-4">
          <i className="text-4xl text-azul-iconos">
            <FontAwesomeIcon icon={faGears} />
          </i>
          <p>Maquinas</p>
        </div>
        <div className="cursor-pointer w-full max-w-[45%] flex-col text-center text-azul-iconos px-4 rounded-md mb-4">
          <i className="text-4xl text-azul-iconos">
            <FontAwesomeIcon icon={faPlantWilt} />
          </i>
          <p>Procesos</p>
        </div>
        <div className="cursor-pointer w-full max-w-[45%] flex-col text-center text-azul-iconos px-4 rounded-md mb-4">
          <i className="text-4xl text-azul-iconos">
            <FontAwesomeIcon icon={faNoteSticky} />
          </i>
          <p>Archivos</p>
        </div>
        <div className="cursor-pointer w-full max-w-[45%] flex-col text-center text-azul-iconos px-4 rounded-md mb-4">
          <i className="text-4xl text-azul-iconos">
            <FontAwesomeIcon icon={faUsers} />
          </i>
          <p>Proveedores</p>
        </div>
        <div className="cursor-pointer w-full max-w-[45%] flex-col text-center text-azul-iconos px-4 rounded-md mb-4">
          <i className="text-4xl text-azul-iconos">
            <FontAwesomeIcon icon={faChartLine} />
          </i>
          <p>Estadisticas</p>
        </div>
      </div>
    </aside>
  );
}
