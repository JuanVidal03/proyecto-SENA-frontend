import { Suspense, lazy } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBullseye,
    faMountainSun,
    faSeedling,
    faTractor,
    faRecycle
} from "@fortawesome/free-solid-svg-icons";

const Loader = lazy(() => import("../components/loader/Loader.jsx"));
const HomeNavBar = lazy(() => import("../components/HomeNavBar.jsx"));
const Button = lazy(() => import("../components/Button.jsx"));

import heroImage from "../assets/test-hero-image.png";
import aboutImage from "../assets/about.png";


const Home = () => {

    document.title = `Inicio | ${import.meta.env.VITE_COMPANY_NAME}`;

    return (
        <Suspense fallback={null}>
            <div className="bg-dark text-white">

                <section id="hero" className="w-full flex flex-col items-center h-screen after:absolute after:content-[''] after:w-[90%] after:h-[95%] after:top-[-10%] after:left-[-20%] after:rounded-[100px] after:bg-custom-purple after:z-10 after:rotate-[170deg]">
                    
                    <HomeNavBar/>

                    <div className="relative z-20 flex justify-center w-full h-full">
                        <div className="w-full flex max-w-[1300px]">
                            <div className="w-[50%] h-full flex flex-col justify-center">
                                <h1 className="text-7xl mb-2 font-semibold">Zenit Code</h1>
                                <p className="text-lg mb-4">Innovamos con tecnología para transformar procesos, mejorando cada aspecto del flujo de trabajo. Nuestra misión es impulsar la eficiencia y sostenibilidad en cualquier industria, permitiendo a las empresas alcanzar nuevos niveles de productividad y responsabilidad ambiental.</p>
                                
                                <Button
                                    color="white"
                                    textColor="dark"
                                    path="contacto"
                                    text="Contactanos"
                                />

                            </div>
                            <figure className="w-[60%] h-full flex justify-center items-end">
                                <img className="w-full transition-all animate-moveHero" src={heroImage} alt="imagen del hero de la empresa" />
                            </figure>
                        </div>
                    </div>

                </section>

                <main>
                    <section id="about" className="w-full flex flex-col items-center pt-[5.5rem]">

                        <div className="w-full flex flex-col gap-16 max-w-[1300px]">
                            <div className="w-full flex flex-col justify-center items-center">
                                <h2 className="text-5xl text-center font-semibold">Sobre Nosotros</h2>
                                <p className="mt-5 text-center text-lg w-full max-w-[1000px]">Zenit Code es una empresa tecnológica que impulsa la transformación digital, proporcionando soluciones innovadoras y personalizadas que optimizan procesos, aumentan la productividad y garantizan la sostenibilidad. A través de la implementación de tecnologías de vanguardia.</p>
                            </div>

                            <div className="flex">
                                <figure className="w-[50%] h-full sticky top-[4.1rem] ">
                                    <img className="w-full relative z-10" src={aboutImage} alt="about image" />
                                </figure>
                                <div className="w-[50%] h-full flex flex-col gap-8 justify-center items-center">

                                    <article className="border-2 border-custom-purple max-w-[70%] bg-transparent group relative inline-flex focus:outline-none w-full sm:w-auto">
                                        <div className=" flex-col gap-8 w-full text-white inline-flex items-center justify-center self-stretch px-4 py-12 text-lg text-center font-medium bg-custom-purple ring-1 ring-custom-purple ring-offset-1 ring-offset-custom-purple transform transition-all group-hover:-translate-y-3 group-hover:translate-x-3 group-focus:-translate-y-1 group-focus:-translate-x-1">
                                            <div className="flex justify-center items-center">
                                                <FontAwesomeIcon className="text-7xl" icon={faMountainSun}/>
                                            </div>
                                            <div className="flex flex-col gap-4 justify-center items-center">
                                                <h5 className="font-semibold text-3xl">Misión</h5>
                                                <p className="text-lg text-center">La misión de Zenit Code es liderar la transformación digital del sector agroalimentario, proporcionando soluciones innovadoras y personalizadas que optimizan procesos, aumentan la productividad, garantizan la sostenibilidad y empoderan a los agricultores, contribuyendo a un futuro alimentario seguro y sostenible.</p>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="border-2 border-white max-w-[70%] bg-transparent group relative inline-flex focus:outline-none w-full sm:w-auto">
                                        <div className="flex-col gap-8 w-full text-white inline-flex items-center justify-center self-stretch px-4 py-12 text-lg text-center font-medium bg-transparent ring-1 ring-white ring-offset-1 ring-offset-white transform transition-all group-hover:-translate-y-3 group-hover:translate-x-3 group-focus:-translate-y-1 group-focus:-translate-x-1 hover:bg-[#ffffff80] hover:backdrop-blur-sm">
                                            <div className="flex justify-center items-center">
                                                <FontAwesomeIcon className="text-7xl" icon={faBullseye}/>
                                            </div>
                                            <div className="flex flex-col gap-4 justify-center items-center">
                                                <h5 className="font-semibold text-3xl">Visión</h5>
                                                <p className="text-lg text-center">La visión de Zenit Code es liderar un futuro donde la agricultura esté conectada tecnológicamente, equilibrando eficiencia y sostenibilidad con un mínimo impacto ambiental, mejorando la vida de las personas y el planeta.</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>

                        </div>

                    </section>

                    <section id="services" className="w-ful pt-[5.5rem] flex flex-col items-center">
                        <div className="w-full flex flex-col gap-12 max-w-[1300px]">
                            <div className="w-full flex flex-col justify-center items-center">
                                <h2 className="text-5xl text-center font-semibold">Nuestros Servicios</h2>
                                <p className="mt-5 text-center text-lg w-full max-w-[1000px]">Ofrecemos soluciones tecnológicas innovadoras para el sector agroalimentario, incluyendo plataformas de gestión agrícola conectada, automatización de procesos, monitoreo remoto de cultivos y riego inteligente. Empoderamos a los agricultores con herramientas personalizadas que optimizan la productividad y minimizan el impacto ambiental.</p>
                            </div>

                            <div className="grid grid-cols-3 gap-5">
                                <div className="border-2 border-custom-purple bg-transparent group relative inline-flex focus:outline-none w-full sm:w-auto">
                                    <span className="flex-col gap-8 w-full text-white inline-flex items-center justify-center self-stretch px-4 py-8 text-lg text-center font-medium bg-custom-purple ring-1 ring-custom-purple ring-offset-1 ring-offset-custom-purple transform transition-transform group-hover:-translate-y-3 group-hover:translate-x-3 group-focus:-translate-y-1 group-focus:-translate-x-1">
                                        <figure>
                                            <FontAwesomeIcon className="text-7xl" icon={faSeedling}/>
                                        </figure>
                                        <div className="flex flex-col gap-4">
                                            <h6 className="font-bold text-2xl">Automatización de Procesos Agrícolas</h6>
                                            <p>Desarrollo de software para automatizar tareas como la siembra, riego, cosecha, y el monitoreo de cultivos. Implementación de sensores IoT para recopilar datos en tiempo real de los campos y optimizar el uso de recursos como agua y fertilizantes.</p>
                                        </div>
                                    </span>
                                </div>

                                <div className="border-2 border-white bg-transparent group relative inline-flex focus:outline-none w-full sm:w-auto">
                                    <span className="flex-col gap-8 w-full text-white inline-flex items-center justify-center self-stretch px-4 py-12 text-lg text-center font-medium bg-transparent ring-1 ring-white ring-offset-1 ring-offset-white transform transition-all group-hover:-translate-y-3 group-hover:translate-x-3 group-focus:-translate-y-1 group-focus:-translate-x-1 hover:bg-[#ffffff80] hover:backdrop-blur-sm">
                                        <figure>
                                            <FontAwesomeIcon className="text-7xl" icon={faTractor}/>
                                        </figure>
                                        <div className="flex flex-col gap-4">
                                            <h6 className="font-bold text-2xl">Sistemas de Gestión de Fincas</h6>
                                            <p>Soluciones personalizadas para el control de inventarios, planificación de cosechas, gestión de recursos y monitoreo del rendimiento de los cultivos. Paneles de control en tiempo real que brindan a los agricultores datos sobre el rendimiento y la productividad de sus operaciones.</p>
                                        </div>
                                    </span>
                                </div>


                                <div className="border-2 border-custom-purple bg-transparent group relative inline-flex focus:outline-none w-full sm:w-auto">
                                    <span className="flex-col gap-8 w-full text-white inline-flex items-center justify-center self-stretch px-4 py-2 text-lg text-center font-medium bg-custom-purple ring-1 ring-custom-purple ring-offset-1 ring-offset-custom-purple transform transition-transform group-hover:-translate-y-3 group-hover:translate-x-3 group-focus:-translate-y-1 group-focus:-translate-x-1">
                                        <figure>
                                            <FontAwesomeIcon className="text-7xl" icon={faRecycle}/>
                                        </figure>
                                        <div className="flex flex-col gap-4">
                                            <h6 className="font-bold text-2xl">Sistemas de Sostenibilidad y Gestión Ambiental</h6>
                                            <p>Implementación de soluciones tecnológicas para la gestión eficiente de los recursos naturales, como el agua y la energía. Desarrollo de herramientas que midan el impacto ambiental de las operaciones agrícolas y proporcionen recomendaciones para reducirlo.</p>
                                        </div>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section id="developers" className="w-ful pt-[5.5rem] flex flex-col items-center">
                        <div className="w-full flex flex-col gap-12 max-w-[1300px]">
                            <div className="w-full flex flex-col justify-center items-center">
                                <h2 className="text-5xl text-center font-semibold">Conoce Nuestro Equipo</h2>
                                <p className="mt-5 text-center text-lg w-full max-w-[1000px]">En <span className="font-bold">Zenit Code</span>, contamos con un equipo de desarrolladores apasionados y altamente capacitados que se especializan en transformar ideas en soluciones tecnológicas. Cada miembro de nuestro equipo aporta una combinación única de experiencia técnica y creatividad, asegurando que los proyectos sean entregados con la más alta calidad y dentro de los plazos establecidos.</p>
                            </div>
                        </div>
                    </section>
                </main>


                <footer className="w-full flex justify-center items-center py-4">
                    <p className="text-gray-500">© {new Date().getFullYear()} <span className="text-white font-semibold">{import.meta.env.VITE_COMPANY_NAME}</span>. Todos los derechos reservados.</p>
                </footer>
            </div>
        </Suspense>

    );
}

export default Home;
