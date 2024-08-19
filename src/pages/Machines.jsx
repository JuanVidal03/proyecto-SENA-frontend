import { Suspense, lazy, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faPlus } from "@fortawesome/free-solid-svg-icons";

const DashboaradLayout = lazy(() => import("../layout/Dashboarad.layout.jsx"));
const Loader = lazy(() => import("../components/loader/Loader.jsx"));
const MachineCard = lazy(() => import("../components/MachineCard.jsx"));

import { getAllMachines } from "../services/machines.services.js";

const Machines = () => {

    document.title = `Maquinas | ${import.meta.env.VITE_COMPANY_NAME}`;

    const [maquinas, setMaquinas] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const getAllMachinesService = async() => {
            
            const maquinasService = await getAllMachines();
            setMaquinas(maquinasService.data.maquinas)
            setLoading(false);
        }
        getAllMachinesService();
    }, []);


    return (
        <Suspense fallback={<Loader/>}>
            <DashboaradLayout>
                { loading && <Loader/> }
                <h1 className="text-3xl text-white">Maquinas registradas</h1>
                <div className="grid grid-cols-4 mt-10 gap-6">
                    {
                        maquinas?.map(maquina => (
                            <MachineCard
                                maquina={maquina}
                            />
                        ))
                    }
                    <div className="overflow-hidden w-full h-[350px] flex gap-3 cursor-pointer flex-col justify-center items-center bg-transparent border-dotted border-2 border- rounded-lg transition-all p-5 group hover:bg-gray-100 shadow-userCard">
                        <FontAwesomeIcon className="text-gray-500 text-3xl" icon={faPlus}/>
                        <p className="text-gray-500">Crear maquina</p>
                    </div> 
                </div>
            </DashboaradLayout>
        </Suspense>
    );
}

export default Machines;
