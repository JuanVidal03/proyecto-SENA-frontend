import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";

const MachineCard = ({ maquina }) => {
    return (
        <div key={maquina._id} className="overflow-hidden w-full h-[350px] flex flex-col justify-center items-center bg-white rounded-lg shadow-userCard transition-all p-5 group hover:shadow-userCardHover hover:scale-105">
            <div className={`h-[50%] relative flex justify-center items-center z-20 after:content-[''] after:rounded-full after:transition-all after:absolute after:w-[175%] after:h-[100%] after:top-[0%] after:-z-20 ${maquina.estado === "Activo" ? "after:bg-green-500" : maquina.estado === "Inactivo" ? "after:bg-red-500" : maquina.estado === "En Mantenimiento" && "after:bg-orange-500"} group-hover:after:h-[300%] group-hover:after:w-[300%] group-hover:after:scale-150 before:content-[''] before:opacity-0 group-hover:before:opacity-100 before:bg-white before:rounded-full before:transition-all before:absolute before:w-[175%] before:h-[100%] before:top-[0%] before:-z-10`}>
                <FontAwesomeIcon className="text-[70px] text-white group-hover:text-gray-400" icon={faGears} />
            </div>
            <div className="flex relative z-20 flex-col justify-center items-center h-[50%]">
                <h5 className="font-bold transition-all text-2xl group-hover:text-white">{maquina.id}</h5>
                <p className="text-gray-500 group-hover:text-white transition-all text-xl">{maquina.nombre}</p>
                <p className={`${maquina.estado === "Activo" ? "text-green-500" : maquina.estado === "Inactivo" ? "text-red-500" : maquina.estado === "En Mantenimiento" && "text-orange-500"} group-hover:text-white font-bold transition-all text-xl`}>{maquina.estado}</p>
            </div>
        </div>
    );
}

export default MachineCard;
