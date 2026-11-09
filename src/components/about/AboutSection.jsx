
import {
    ShieldCheck,
    Target,
    CheckCircle2,
    Award,
    TrendingUp,
} from "lucide-react";

import empresa1 from "../../assets/home/acerca/empresa-1.jpg";
import reconocimientos from "../../assets/home/acerca/reconocimientos.png";

function AboutSection() {
    const objectives = [
        {
            number: "01",
            title: "Calidad y cumplimiento",
            description:
                "Garantizar el cumplimiento de las especificaciones técnicas, requisitos y expectativas de los productos suministrados a nuestros clientes.",
            icon: CheckCircle2,
        },
        {
            number: "02",
            title: "Agilidad y eficacia",
            description:
                "Ser la mejor opción para el suministro de productos de manera ágil y eficaz, contribuyendo al buen desarrollo de los proyectos de nuestros clientes.",
            icon: TrendingUp,
        },
        {
            number: "03",
            title: "Atención y orientación",
            description:
                "Ofrecer la mejor atención y orientación técnica a nuestros clientes a través de las competencias adecuadas de nuestro talento humano.",
            icon: Target,
        },
    ];

    return (
        <>
            {/* SOBRE NOSOTROS */}
            <section id="sobre-nosotros" className="bg-white px-6 py-20 md:py-24">
                <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

                    <div>
                        <p className="font-bold uppercase tracking-[0.25em] text-yellow-600">
                            Conócenos
                        </p>

                        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#172536] md:text-5xl">
                            Experiencia que impulsa la industria.
                        </h1>

                        <p className="mt-7 text-base leading-8 text-gray-600">
                            <strong className="text-neutral-800">
                                FITTING VALVES S.A.S.
                            </strong>{" "}
                            es una compañía colombiana fundada en 2007, dedicada a la
                            importación y comercialización de equipos, maquinaria,
                            válvulas, tuberías, accesorios y sistemas de vapor.
                        </p>

                        <p className="mt-4 text-base leading-8 text-gray-600">
                            Atendemos sectores como el petroquímico, petróleo, gas,
                            palma, papel, alimentos y farmacéutico, ofreciendo a
                            nuestros clientes soluciones con calidad, agilidad y
                            cumplimiento para el desarrollo de sus proyectos.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-8">
                            <div>
                                <p className="text-3xl font-extrabold text-yellow-600">
                                    2007
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    Año de fundación
                                </p>
                            </div>

                            <div>
                                <p className="text-3xl font-extrabold text-yellow-600">
                                    +15
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    Años de trayectoria
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -right-3 -top-3 h-full w-full rounded-2xl border-2 border-yellow-400 md:-right-5 md:-top-5" />

                        <img
                            src={empresa1}
                            alt="Actividad industrial de Fitting Valves"
                            className="relative z-10 h-[350px] w-full rounded-2xl object-cover shadow-xl md:h-[430px]"
                        />

                        <div className="absolute -bottom-5 left-5 z-20 rounded-xl bg-[#172536] px-6 py-4 text-white shadow-lg">
                            <p className="text-sm font-semibold text-yellow-400">
                                FITTING VALVES S.A.S.
                            </p>
                            <p className="mt-1 text-lg font-bold">
                                Soluciones para la industria
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* POLÍTICA DE CALIDAD */}
            <section
                id="politica-calidad"
                className="bg-[#172536] px-6 py-20 text-white"
            >
                <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[auto_1fr]">

                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-yellow-400 text-[#172536]">
                        <ShieldCheck size={42} />
                    </div>

                    <div>
                        <p className="font-bold uppercase tracking-[0.2em] text-yellow-400">
                            Nuestro compromiso
                        </p>

                        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                            Política de calidad
                        </h2>

                        <p className="mt-6 max-w-5xl text-base leading-8 text-gray-300">
                            Importar y comercializar productos de excelente calidad de
                            manera ágil y oportuna, con representación exclusiva de
                            marcas reconocidas mundialmente para apoyar el desarrollo
                            de los proyectos de nuestros clientes y la satisfacción de
                            sus necesidades y expectativas a través de la mejora
                            continua de la eficacia de nuestro Sistema de Gestión de
                            Calidad.
                        </p>
                    </div>

                </div>
            </section>

            {/* OBJETIVOS DE CALIDAD */}
            <section
                id="objetivos-calidad"
                className="bg-neutral-50 px-6 py-20 md:py-24"
            >
                <div className="mx-auto max-w-7xl">

                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <p className="font-bold uppercase tracking-[0.2em] text-yellow-600">
                            Nuestro propósito
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-[#172536] md:text-4xl">
                            Objetivos de calidad
                        </h2>

                        <p className="mt-5 leading-7 text-gray-600">
                            Trabajamos bajo objetivos que orientan nuestros procesos
                            y fortalecen la calidad de las soluciones que ofrecemos.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {objectives.map((objective) => {
                            const Icon = objective.icon;

                            return (
                                <article
                                    key={objective.number}
                                    className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-4xl font-extrabold text-yellow-500">
                                            {objective.number}
                                        </span>

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-[#172536] transition-colors group-hover:bg-yellow-400">
                                            <Icon size={25} />
                                        </div>
                                    </div>

                                    <h3 className="mt-8 text-xl font-bold text-[#172536]">
                                        {objective.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-gray-600">
                                        {objective.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* RECONOCIMIENTOS */}
            <section className="bg-white px-6 py-20 md:py-24">
                <div className="mx-auto max-w-7xl">

                    <div className="mb-12 text-center">
                        <p className="font-bold uppercase tracking-[0.2em] text-yellow-600">
                            Nuestra trayectoria
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-[#172536] md:text-4xl">
                            Reconocimientos que nos respaldan
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
                            Nuestro compromiso con la excelencia se refleja en los
                            reconocimientos y avances alcanzados a lo largo de nuestra
                            trayectoria.
                        </p>
                    </div>

                    <div className="grid items-center gap-10 overflow-hidden rounded-2xl bg-neutral-50 p-7 md:grid-cols-2 md:p-12">

                        <div>
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400 text-[#172536]">
                                <Award size={30} />
                            </div>

                            <p className="mt-7 text-sm font-bold uppercase tracking-widest text-yellow-600">
                                Ecopetrol · 2014
                            </p>

                            <h3 className="mt-3 text-2xl font-extrabold text-[#172536] md:text-3xl">
                                Premio SUME MÁS a la Excelencia
                            </h3>

                            <p className="mt-5 leading-8 text-gray-600">
                                En 2014 fuimos reconocidos por Ecopetrol y sus empresas
                                aliadas con el premio SUME MÁS a la Excelencia, un
                                reconocimiento que destaca nuestro desempeño como
                                proveedor y compromiso con nuestros clientes.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <img
                                src={reconocimientos}
                                alt="Reconocimiento y certificación de Fitting Valves"
                                loading="lazy"
                                className="max-h-[350px] w-full rounded-xl object-contain"
                            />
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}

export default AboutSection;
