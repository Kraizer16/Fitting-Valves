
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import tuberias from "../assets/home/acerca/tuberias.jpg";

function ProductsPreview() {
    return (
        <section className="relative isolate flex min-h-[380px] items-center justify-center overflow-hidden px-6 py-24 md:min-h-[440px]">

            {/* IMAGEN DE FONDO */}
            <img
                src={tuberias}
                alt="Soluciones industriales para la conducción de fluidos"
                loading="lazy"
                className="absolute inset-0 -z-20 h-full w-full object-cover"
            />

            {/* OSCURECIMIENTO GENERAL */}
            <div className="absolute inset-0 -z-10 bg-neutral-950/55" />

            {/* DEGRADADO SUPERIOR */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 bg-gradient-to-b from-neutral-50 via-neutral-50/50 to-transparent" />

            {/* DEGRADADO INFERIOR */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

            {/* CONTENIDO */}
            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">

                <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#F5C400]">
                    SOLUCIONES INDUSTRIALES
                </p>

                <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                    Conoce nuestros productos
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-200 md:text-lg">
                    Descubre nuestra variedad de equipos, maquinaria y
                    soluciones para la conducción de fluidos.
                </p>

                {/* BOTÓN */}
                <Link
                    to="/productos"
                    className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#F5C400] px-8 py-4 font-bold text-neutral-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-xl"
                >
                    Explorar productos

                    <ArrowRight
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </Link>

            </div>
        </section>
    );
}

export default ProductsPreview;
