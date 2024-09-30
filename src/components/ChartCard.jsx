import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

defaults.responsive = true;
defaults.maintainAspectRatio = false;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const ChartCard = ({ chart }) => {
    return (
        <Link to={`/seguimiento/${chart._id}`}>
            <div className="bg-white rounded-md px-4 py-2 w-full h-[300px] flex justify-center items-center transition-all hover:shadow-userCardHover hover:scale-105 cursor-pointer">
                <Line
                    data={{
                        labels: chart.datos.map(data => data.fecha),
                        datasets: [
                            {
                                label: "Temp. Interna",
                                data: chart.datos.map(data => data.tempInterna),
                                backgroundColor: "#00913f",
                                borderColor: "#00913f   ",
                            },
                            {
                                label: "Temp. Ambiente",
                                data: chart.datos.map(data => data.tempAmbiente),
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
                                text: chart.titulo
                            }
                        }
                    }}
                />
            </div>
        </Link>

    );
}

export default ChartCard;
