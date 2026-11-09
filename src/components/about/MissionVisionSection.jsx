
import { Eye, Target } from "lucide-react";

function MissionVisionSection() {
    return (
        <section className="overflow-hidden">

            {/* VISIÓN */}
            <div
                id="vision"
                className="relative scroll-mt-24 overflow-hidden bg-[#172536] px-6 py-24 text-white md:py-28"
            >
                {/* Elementos decorativos */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/10" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">

                    <div>
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5C400] text-[#172536]">
                            <Eye size={34} />
                        </div>

                        <p className="font-bold uppercase tracking-[0.25em] text-[#F5C400]">
                            Nuestra proyección
                        </p>

                        <h2 className="mt-4 text-5xl font-extrabold md:text-6xl">
                            Visión
                        </h2>

                        <div className="mt-7 h-1.5 w-20 rounded-full bg-[#F5C400]" />
                    </div>

                    <div>
                        <p className="text-xl leading-9 text-gray-200 md:text-2xl md:leading-10">
                            Consolidarnos a nivel nacional como la mejor opción en el
                            suministro de maquinaria, equipos, repuestos y accesorios
                            industriales para los sistemas de conducción de fluidos.
                        </p>
                    </div>

                </div>
            </div>

            {/* MISIÓN */}
            <div
                id="mision"
                className="scroll-mt-24 bg-white px-6 py-24 md:py-28"
            >
                <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">

                    <div className="order-2 md:order-1">
                        <p className="text-xl leading-9 text-gray-600 md:text-2xl md:leading-10">
                            Importar y comercializar maquinaria, equipos y repuestos
                            industriales para la conducción de fluidos, colocando a
                            disposición de nuestros clientes todo el potencial material
                            y humano proyectados al mejoramiento integral, maximizando
                            el desarrollo de empleados, accionistas, clientes y la
                            comunidad.
                        </p>
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#172536] text-[#F5C400]">
                            <Target size={34} />
                        </div>

                        <p className="font-bold uppercase tracking-[0.25em] text-yellow-600">
                            Nuestra razón de ser
                        </p>

                        <h2 className="mt-4 text-5xl font-extrabold text-[#172536] md:text-6xl">
                            Misión
                        </h2>

                        <div className="mt-7 h-1.5 w-20 rounded-full bg-[#F5C400]" />
                    </div>

                </div>
            </div>

        </section>
    );
}

export default MissionVisionSection;
