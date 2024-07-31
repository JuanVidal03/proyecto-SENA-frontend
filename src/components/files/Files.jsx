import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";

import './files.css'

export default function Files() {
  return (
    <div className="w-full max-w-[45%] bg-white flex justify-between rounded-xl font-medium shadow-lg">
      <div className="w-[70%] p-4">
        <p>Fecha: 12/12/2023</p>
        <p>Maquina 2</p>
        <p>Encargado:</p>
        <p>Juan Carlos</p>
      </div>
      <div className="circle-file">
        <i className="cursor-pointer text-6xl text-white">
          <FontAwesomeIcon icon={faCircleDown} />
        </i>
      </div>
    </div>
  );
}
