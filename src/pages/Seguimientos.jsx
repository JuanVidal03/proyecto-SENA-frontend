import { useState, useEffect, Suspense, lazy, useContext } from "react";
import { toast } from "react-toastify";

const DashboaradLayout = lazy(() => import("../layout/Dashboarad.layout.jsx"));
const ChartCard = lazy(() => import("../components/ChartCard.jsx"));
const Loader = lazy(() => import("../components/loader/Loader.jsx"));

import { getAllSeguimientos } from "../services/seguimiento.services.js";
import { chartSchema } from "../utils/chartSchema.js";
import { SeguimientoContext } from "../context/Seguimiento.context.jsx";

const Seguimientos = () => {

    document.title = `Seguimientos | ${import.meta.env.VITE_COMPANY_NAME}`;

    const { setSeguimiento } = useContext(SeguimientoContext);

    const [seguimientos, setSeguimientos] = useState([]);
    const [chartsToRender, setChartsToRender] = useState([]);
    const [loading, setLoading] = useState(false);

    // todos los seguimientos
    useEffect(() => {
        setLoading(true);
        const getSeguimientos = async() => {
            try {
                
                const response = await getAllSeguimientos();
                setSeguimientos(response.data.seguimientos);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
                return toast.error("Ocurrio algo al traer los usuarios.");
            }
        }
        getSeguimientos();
    }, []);


    // render charts
    useEffect(() => {
        setChartsToRender(chartSchema(seguimientos));
    }, [seguimientos]);


    // set the sigle seguimiento
    const handleSigleSeguimiento = (seguimiento) => setSeguimiento(seguimiento);

    return (
        <Suspense fallback={null}>
            <DashboaradLayout>
                { loading && <Loader/> }
                <h1 className="text-3xl text-white">Seguimientos</h1>

                <section className="grid grid-cols-2 gap-8 mt-8">
                        {
                            chartsToRender.map(chart => (
                                <div key={chart._id} onClick={() => handleSigleSeguimiento(chart)}>
                                    <ChartCard
                                        chart={chart}
                                    />
                                </div>
                            ))
                        }
                </section>

            </DashboaradLayout>
        </Suspense>
    );
}

export default Seguimientos;
