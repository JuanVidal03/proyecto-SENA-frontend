import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";

export default function Machines({ numberMachine, state, operator }) {
  return (
    <div className="w-full max-w-[22%] bg-white rounded-xl flex flex-col p-4 items-center justify-center shadow-lg">
      <i className="text-7xl">
        <FontAwesomeIcon icon={faGears} />
      </i>
      <p className="text-2xl font-medium">MAQUINA: {numberMachine}</p>
      <p className="font-medium">ESTADO</p>
      <p className="border-b-4 border-b-lime-500">{state}</p>
      <p className="font-medium">OPERARIO</p>
      <p>{operator}</p>
    </div>
  );
}
