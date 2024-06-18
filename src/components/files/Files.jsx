import React from "react";
import "./files.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";

export default function Files() {
  return (
    <div className="file">
      <div className="conetnt-text">
        <p>Fecha: 12/12/2023</p>
        <p>Maquina 2</p>
        <p>Encargado:</p>
        <p>Juan Carlos</p>
      </div>
      <div className="circle-file">
        <i className="icon-files">
          <FontAwesomeIcon icon={faCircleDown} />
        </i>
      </div>
    </div>
  );
}
