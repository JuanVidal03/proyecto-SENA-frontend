import { Suspense, lazy, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { toast } from "react-toastify";
import Papa from "papaparse";

defaults.responsive = true;
defaults.maintainAspectRatio = false;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const DashboaradLayout = lazy(() => import("../layout/Dashboarad.layout.jsx"));
const Loader = lazy(() => import("../components/loader/Loader.jsx"));
import { SeguimientoContext } from "../context/Seguimiento.context.jsx";

const SingleSeguimineto = () => {

    const { seguimiento } = useContext(SeguimientoContext);
    
    // download seguimiento csv
    const handleDownloadInfo = () => {

        try {

            const csv = Papa.unparse([seguimiento]);
            const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${seguimiento.titulo}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            toast.error("Error al generar el Excel, intentalo de nuevo");
        }


    }

    return (
        <Suspense fallback={null}>
            <DashboaradLayout>
                <section className="bg-white rounded-md w-full p-8">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold">{ seguimiento.titulo }</h1>
                        <div>
                            <button onClick={handleDownloadInfo} className="text-xl hover:bg-azul-iconos hover:text-white transition-all rounded-md p-3 flex gap-4 justify-center items-center">
                                <FontAwesomeIcon icon={faCloudArrowDown}/>
                                <p>Descargar información</p>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 bg-gray-50 rounded-lg p-4 mt-4">
                        <div className="leading-8">
                            <p className="font-bold">Proveedor: <span className="font-medium">{ seguimiento.proveedor }</span></p>
                            <p className="font-bold">Operario: <span className="font-medium">{ seguimiento.operador }</span></p>
                            <p className="font-bold">Proceso realizado: <span className="font-medium">{ seguimiento.tipoProceso }</span></p>
                            <p className="font-bold">Variedad café: <span className="font-medium">{ seguimiento.variedad }</span></p>
                            <p className="font-bold">Peso: <span className="font-medium">{ seguimiento.peso } kg</span></p>
                        </div>
                        <div className="leading-8">
                            <p className="font-bold">Mauina: <span className="font-medium">{ seguimiento.maquina } kg</span></p>
                            <p className="font-bold">Fecha: <span className="font-medium">{ seguimiento.fecha }</span></p>
                            <p className="font-bold">Temperatura Inicial: <span className="font-medium">{ seguimiento.variedad }</span></p>
                            <p className="font-bold">Temperatura Final: <span className="font-medium">{ seguimiento.variedad }</span></p>
                        </div>
                    </div>
                </section>

                <section className="bg-white rounded-md mt-8 h-[500px] p-8">
                    <Line
                        data={{
                            labels: seguimiento.datos.map(data => data.fecha),
                            datasets: [
                                {
                                    label: "Temp. Interna",
                                    data: seguimiento.datos.map(data => data.tempInterna),
                                    backgroundColor: "#00913f",
                                    borderColor: "#00913f   ",
                                },
                                {
                                    label: "Temp. Ambiente",
                                    data: seguimiento.datos.map(data => data.tempAmbiente),
                                    backgroundColor: "#041090",
                                    borderColor: "#041090"
                                },
                            ],
                        }}
                        options={{
                            elements: {
                                line: {
                                    tension: 0.3
                                }
                            },
                            plugins: {
                                title: {
                                    text: "Grafica Temp. Ambiente VS Temp. Interna"
                                }
                            }
                        }}
                    />
                </section>
            </DashboaradLayout>
        </Suspense>
    );
}

export default SingleSeguimineto;
