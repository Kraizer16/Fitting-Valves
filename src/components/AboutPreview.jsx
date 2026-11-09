import { Link } from "react-router-dom";

import empresa1 from "../assets/home/acerca/empresa-1.jpg";
import empresa2 from "../assets/home/acerca/empresa-2.jpg";

import { ArrowRight, Medal } from "lucide-react";

function AboutPreview() {
    return (
        <section className="overflow-hidden bg-white px-6 py-20 md:px-10 lg:px-16">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
                {/* TEXTO */}
                <div className="max-w-xl">
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C49B00]">
                        FITTING VALVES
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight text-neutral-900 md:text-4xl lg:text-5xl">
                        Experiencia que impulsa la industria.
                    </h2>

                    <div className="mt-6 h-1 w-20 rounded-full bg-[#F5C400]" />

                    <p className="mt-7 text-base leading-8 text-neutral-600">
                        Somos una compañía especializada en la importación y
                        comercialización de maquinaria, equipos y repuestos industriales
                        para la conducción de fluidos.
                    </p>

                    <p className="mt-4 text-base leading-8 text-neutral-600">
                        Trabajamos para ofrecer soluciones confiables que contribuyan al
                        desarrollo de los diferentes sectores industriales.
                    </p>

                    <Link
                        to="/nosotros"
                        className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#F5C400] px-7 py-3.5 font-bold text-neutral-900 transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg"
                    >
                        Conoce nuestra empresa
                        <ArrowRight
                            size={20}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                {/* COLLAGE DE IMÁGENES */}
                <div className="relative mx-auto w-full max-w-xl">
                    {/* Imagen principal */}
                    <div className="relative z-10 ml-auto w-[85%] overflow-hidden rounded-2xl shadow-xl">
                        <img
                            src={empresa1}
                            alt="Instalaciones de Fitting Valves"
                            loading="lazy"
                            className="h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[350px]"
                        />
                    </div>

                    {/* Imagen secundaria */}
                    <div className="relative z-20 -mt-20 w-[65%] overflow-hidden rounded-2xl border-8 border-white shadow-xl md:-mt-28">
                        <img
                            src={empresa2}
                            alt="Actividad empresarial de Fitting Valves"
                            loading="lazy"
                            className="h-[190px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[240px]"
                        />
                    </div>

                    {/* INSIGNIA DE TRAYECTORIA */}
                    <div className="absolute bottom-5 right-1 z-20 flex items-center gap-3 rounded-2xl border border-neutral-100 bg-[#F5C400] px-4 py-3 shadow-lg md:-bottom-6 md:right-2 md:px-5 md:py-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F5C400]/20">
                            <Medal size={25} strokeWidth={1.8} className="text-yellow-700" />
                        </div>

                        <div>
                            <h3 className="text-lg font-extrabold leading-tight text-neutral-900">
                                Desde 2007
                            </h3>

                            <p className="mt-1 text-xs font-medium text-neutral-500">
                                Experiencia y compromiso
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPreview;
