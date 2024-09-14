import { lazy, Suspense, useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const DashboardLayout = lazy(() => import("../layout/Dashboarad.layout.jsx"));
const Loader = lazy(() => import("../components/loader/Loader.jsx"));
const Modal = lazy(() => import("../components/Modal.jsx"));
const TipoProcesoCard = lazy(() => import("../components/TipoProcesoCard.jsx"));
const FormTipoProceso = lazy(() => import("../components/FormTipoProceso.jsx"));

import { getAllTipoProcesos } from "../services/tipoProcesos.services.js";

import { AuthContext } from "../context/AuthProvider.context.jsx";
import { TipoProcesoContext } from "../context/TipoProceso.context.jsx";

const TipoProcesos = () => {
  document.title = `Tipos de procesos | ${import.meta.env.VITE_COMPANY_NAME}`;

  const { setModalState } = useContext(AuthContext);
  const { tipoProcesos, setTipoProcesos } = useContext(TipoProcesoContext);

  const [loading, setLoading] = useState(false);

  // get all tipo procesos
  useEffect(() => {
    setLoading(true);

    const getAllTipoProcesosService = async () => {
      try {

        const tipoProcesos = await getAllTipoProcesos();
        setTipoProcesos(tipoProcesos.data.tiposProcesos);
        setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getAllTipoProcesosService();
  }, []);

  return (
    <Suspense fallback={null}>
      <DashboardLayout>

        <Modal content={<FormTipoProceso/>}/>
        { loading && <Loader/> }
        
        <div className="flex items-center justify-between gap-6">
          <h1 className="text-3xl text-white">Tipos de procesos</h1>
          <div className="flex gap-6">
            <input
                onChange={(e) => setUsersFilterInput(e.target.value)}
                className="rounded-full p-2 outline-none px-4 text-gray-500"
                type="text"
                placeholder="Filtrar resultados"
            />
            <div className="flex justify-center items-center relative w-10 h-10 bg-white rounded-full">
                <button
                onClick={() => {
                    setModalState(true);
                }}
                className="flex justify-center items-center relative z-50 w-full h-full"
                >
                <FontAwesomeIcon
                    className="text-[1rem] text-azul-fuerte relative z-10 "
                    icon={faPlus}
                />
                </button>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-3 gap-8 mt-8">
            {
                tipoProcesos?.map(tipoProceso => (
                    <TipoProcesoCard key={tipoProceso._id} tipoProceso={tipoProceso}/>
                ))
            }
            <div
              onClick={() => {
                setModalState(true);
              }}
              className="h-[350px] flex gap-3 cursor-pointer flex-col justify-center items-center bg-transparent border-dotted border-2 rounded-lg transition-all bg-gray-body p-5 group hover:bg-gray-100 hover:scale-105"
            >
              <FontAwesomeIcon className="text-gray-500 text-3xl" icon={faPlus} />
              <h6 className="text-gray-500">Crear tipo de proceso</h6>
            </div>
        </div>
      </DashboardLayout>
    </Suspense>
  );
};

export default TipoProcesos;
