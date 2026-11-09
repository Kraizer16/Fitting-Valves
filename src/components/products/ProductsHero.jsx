
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import industrialImage from "../../assets/home/acerca/tuberias.jpg";

function ProductsHero() {
    return (
        <section className="relative flex min-h-105 items-center overflow-hidden bg-[#172536] md:min-h-125">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${industrialImage})` }}
            />

            <div className="absolute inset-0 bg-[#172536]/80" />

            <div className="relative mx-auto w-full max-w-7xl px-6 py-20">
                <div className="max-w-3xl">
                    <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-[#F5C400]">
                        <span className="h-0.5 w-10 bg-[#F5C400]" />
                        Soluciones para la industria
                    </p>

                    <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
                        Nuestros
                        <span className="text-[#F5C400]"> productos</span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 md:text-lg">
                        Conoce nuestro portafolio de maquinaria, equipos, válvulas,
                        accesorios y soluciones industriales para la conducción de fluidos.
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <Link
                            to="/productos#catalogo"
                            className="inline-flex items-center gap-3 rounded-md bg-[#F5C400] px-7 py-3.5 font-bold text-[#172536] transition hover:bg-yellow-400"
                        >
                            Explorar catálogo
                            <ArrowDown size={19} />
                        </Link>

                        <Link
                            to="/contacto"
                            className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-[#F5C400]"
                        >
                            Solicitar información
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#F5C400]" />
        </section>
    );
}

export default ProductsHero;
