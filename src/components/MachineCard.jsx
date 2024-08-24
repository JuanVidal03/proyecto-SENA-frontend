import { useContext, useState, Suspense, lazy } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const Loader = lazy(() =>import("../components/loader/Loader.jsx"));

import { MachineContext } from "../context/Machine.context.jsx";

import { deleteMachineById } from "../services/machines.services.js";

const MachineCard = ({ maquina, isSlider }) => {

    const { machines, setMachines } = useContext(MachineContext);
    const [loading, setLoading] = useState(false);
    
    const deleteMachine = async(id) => {
        setLoading(true);
        try {
            
            const findIndexMachine  = machines.findIndex(machine => machine._id === id);
            const deletedMachineService = await deleteMachineById(id);
            machines.splice(findIndexMachine, 1);
            setMachines([...machines]);
            setLoading(false);

            deletedMachineService.status && deletedMachineService.status === 200 ? (
                toast.success("Maquina eliminada exitosamente!")
            ) : (
                toast.error(`Error al eliminar la maquina con id: ${id}`)
            )
            
        } catch (error) {
            setLoading(false);
            console.log(error);
            return error;
            
        }
    }

    return (
        <Suspense>
            { loading && <Loader/> }
            <div className={`overflow-hidden w-full h-[420px] flex flex-col justify-center items-center bg-white rounded-lg shadow-userCard transition-all p-5 group hover:shadow-userCardHover ${isSlider ? "hover:shadow-userCardHover" : "hover:scale-105"}`}>
                <div className={`h-[40%] relative flex justify-center items-center z-20 after:content-[''] after:rounded-full after:transition-all after:absolute after:w-[155%] after:h-[90%] after:top-[3%] after:-z-20 ${maquina.estado === "Activo" ? "after:bg-green-500" : maquina.estado === "Inactivo" ? "after:bg-red-500" : maquina.estado === "En Mantenimiento" && "after:bg-orange-500"} group-hover:after:h-[300%] group-hover:after:w-[300%] group-hover:after:scale-150 before:content-[''] before:opacity-0 group-hover:before:opacity-100 before:bg-white before:rounded-full before:transition-all before:absolute before:w-[155%] before:h-[90%] before:top-[3%] before:-z-10`}>
                    <FontAwesomeIcon className="text-[70px] text-white group-hover:text-gray-400" icon={faGears} />
                </div>
                <div className="flex relative z-20 flex-col justify-center items-center h-[50%]">
                    <h5 className="font-bold transition-all text-2xl group-hover:text-white">{maquina.id}</h5>
                    <p className="text-gray-500 group-hover:text-white transition-all text-xl">{maquina.nombre}</p>
                    <p className={`${maquina.estado === "Activo" ? "text-green-500" : maquina.estado === "Inactivo" ? "text-red-500" : maquina.estado === "En Mantenimiento" && "text-orange-500"} group-hover:text-white font-bold transition-all text-xl`}>{maquina.estado}</p>
                    {
                        !isSlider && (
                            <div className="opacity-0 hidden group-hover:block group-hover:opacity-100 mt-4">
                                <button onClick={() => deleteMachine(maquina._id)} className="bg-white py-3 flex justify-center items-center gap-2 w-full font-semibold">
                                    Eliminar
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                                <select className="mt-2 p-3 outline-none cursor-pointer">
                                    <option value={maquina.estado}>{maquina.estado}</option>
                                    <option value="">Activo</option>
                                    <option value="">Inactivo</option>
                                    <option value="">En Mantenimiento</option>
                                </select>
                            </div>
                        )
                    }
                </div>
            </div>
        </Suspense>
    );
}

export default MachineCard;
