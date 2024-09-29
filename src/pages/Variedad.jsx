import { Suspense, lazy } from "react";

const Loader = lazy(() => import("../components/loader/Loader.jsx"));
const DashboaradLayout = lazy(() => import("../layout/Dashboarad.layout.jsx"));

const Variedad = () => {
    return (
        <Suspense fallback={null}>
            <DashboaradLayout>
                
            <div className="flex items-center justify-between gap-6">
                <h1 className="text-3xl text-white">Variedades</h1>
                {/* <div className="flex gap-6">
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
                </div> */}
            </div>

            <div>
                
            </div>

                
            </DashboaradLayout>
        </Suspense>
    );
}

export default Variedad;
