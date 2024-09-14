import { lazy, useContext, useState, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const Loader = lazy(() => import("../components/loader/Loader.jsx"));

import { deleteTipoProceso } from "../services/tipoProcesos.services.js";

import { TipoProcesoContext } from "../context/TipoProceso.context.jsx";
import { AuthContext } from "../context/AuthProvider.context.jsx";

const TipoProcesoCard = ({ tipoProceso }) => {

    const { tipoProcesos, setTipoProcesos, setTipoProcesoToUpdate } = useContext(TipoProcesoContext);
    const { setModalState } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const handleDelete = async(id) => {
        setLoading(true);
        try {

            const deletedTipoProceso = await deleteTipoProceso(id);
            const deletedIndex = tipoProcesos.findIndex(tipoProceso => tipoProceso._id === id);

            tipoProcesos.splice(deletedIndex, 1);
            setTipoProcesos([...tipoProcesos]);

            deletedTipoProceso.status && deletedTipoProceso.status === 200 && toast.success("Eliminado correctamente!");
            setLoading(false);

        } catch (error) {
            toast.error("Error al eliminar la card.");
            setLoading(false);
        }
    }


    return (
        <Suspense fallback={null}>
            { loading && <Loader/> }
            <div className="bg-white transition-all hover:scale-105 hover:shadow-userCardHover flex flex-col justify-center h-[350px] p-6 rounded-lg group hover:bg-gray-100">
                <div className="flex flex-col gap-2 ">
                    <p className="font-bold">Nombre: <span className="font-normal">{ tipoProceso.nombre }</span></p>
                    <p className="font-bold">Descripción: <span className="font-normal">{ tipoProceso.descripcion }</span></p>
                </div>
                <div className="transition-all hidden w-full group-hover:flex gap-3 mt-5">
                    <FontAwesomeIcon onClick={() => {
                        setTipoProcesoToUpdate(tipoProceso);
                        setModalState(true);
                    }} className="text-xl w-[50%] py-3 transition-all rounded-lg cursor-pointer bg-azul-iconos text-white" icon={faPenToSquare}/>
                    <FontAwesomeIcon onClick={() => handleDelete(tipoProceso._id)} className="text-xl w-[50%] py-3 transition-all rounded-lg cursor-pointer bg-red-500 text-white" icon={faTrash}/>
                </div>
            </div>
        </Suspense>


    );
}

export default TipoProcesoCard;
