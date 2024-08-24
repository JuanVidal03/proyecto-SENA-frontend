import { Suspense, lazy, useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";

const DashboaradLayout = lazy(() => import("../layout/Dashboarad.layout.jsx"));
const Loader = lazy(() => import("../components/loader/Loader.jsx"));
const MachineCard = lazy(() => import("../components/MachineCard.jsx"));

import { MachineContext } from "../context/Machine.context.jsx";

import { getAllMachines, createMachine } from "../services/machines.services.js";

const Machines = () => {

    document.title = `Maquinas | ${import.meta.env.VITE_COMPANY_NAME}`;

    const { machines, setMachines } = useContext(MachineContext);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const getAllMachinesService = async() => {
            
            const maquinasService = await getAllMachines();
            setMachines(maquinasService.maquinas);
            setLoading(false);
        }
        getAllMachinesService();
    }, []);


    const createMachineService = async() => {

        setLoading(true);
        const machineCreated = await createMachine();

        if(!machineCreated.status) {
            setLoading(false);
            toast.error("Error al crear la maquina.");
        }

        if (machineCreated && machineCreated.status === 201) {
            setLoading(false);
            toast.success(machineCreated.data.message);
        }
        setMachines([...machines, machineCreated.data.maquina]);
    }


    return (
        <Suspense fallback={<Loader/>}>
            <DashboaradLayout>
                <ToastContainer/>
                { loading && <Loader/> }
                <h1 className="text-3xl text-white">Maquinas registradas</h1>
                <div className="grid grid-cols-4 mt-10 gap-6">
                    {
                        machines?.map(maquina => (
                            <MachineCard
                                key={maquina._id}
                                maquina={maquina}
                                isSlider={false}
                            />
                        ))
                    }
                    <div
                        onClick={createMachineService}
                        className="overflow-hidden w-full h-[420px] flex gap-3 cursor-pointer flex-col justify-center items-center bg-transparent border-dotted border-2 rounded-lg transition-all p-5 group hover:bg-gray-100 hover:scale-105"
                    >
                        <FontAwesomeIcon className="text-gray-500 text-3xl" icon={faPlus}/>
                        <p className="text-gray-500">Crear maquina</p>
                    </div> 
                </div>
            </DashboaradLayout>
        </Suspense>
    );
}

export default Machines;
