import React from "react";
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
import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside>
      <div className="icons">
        <div className="icon-text">
          <i className="icons-sidebar">
            <FontAwesomeIcon icon={faHouse} />
          </i>
          <p>Inicio</p>
        </div>
        <div className="icon-text">
          <i className="icons-sidebar">
            <FontAwesomeIcon icon={faUser} />
          </i>
          <p>Operarios</p>
        </div>
        <div className="icon-text">
          <i className="icons-sidebar">
            <FontAwesomeIcon icon={faGears} />
          </i>
          <p>Maquinas</p>
        </div>
        <div className="icon-text">
          <i className="icons-sidebar">
            <FontAwesomeIcon icon={faPlantWilt} />
          </i>
          <p>Procesos</p>
        </div>
        <div className="icon-text">
          <i className="icons-sidebar">
            <FontAwesomeIcon icon={faNoteSticky} />
          </i>
          <p>Archivos</p>
        </div>
        <div className="icon-text">
          <i className="icons-sidebar">
            <FontAwesomeIcon icon={faUsers} />
          </i>
          <p>Proveedores</p>
        </div>
        <div className="icon-text">
          <i className="icons-sidebar icon-chart">
            <FontAwesomeIcon icon={faChartLine} />
          </i>
          <p>Estadisticas</p>
        </div>
      </div>
    </aside>
  );
}
