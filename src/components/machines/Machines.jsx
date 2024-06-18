import React from "react";
import "./machines.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";

export default function Machines({ numberMachine, state, operator }) {
  return (
    <div className="machine">
      <i className="icon-machine">
        <FontAwesomeIcon icon={faGears} />
      </i>
      <p className="name-machine">MAQUINA: {numberMachine}</p>
      <p className="state-machine">ESTADO</p>
      <p className="color-state">{state}</p>
      <p className="operatorMachine">OPERARIO</p>
      <p>{operator}</p>
    </div>
  );
}
