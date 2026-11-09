
import { useState } from "react";

import { distributors, clients } from "../data/representations";
import ImageModal from "./ImageModal";

function Representations() {
    const [selectedClient, setSelectedClient] = useState(null);

    return (
        <section className="bg-neutral-50 px-6 py-20 md:px-10 lg:px-16">

            {/* TÍTULO PRINCIPAL */}
            <div className="mx-auto mb-14 max-w-7xl text-center">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#C49B00]">
                    FITTING VALVES
                </p>

                <h2 className="text-3xl font-extrabold text-neutral-900 md:text-4xl lg:text-5xl">
                    Proveedores y Clientes
                </h2>

                <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#F5C400]" />
            </div>

            {/* GALERÍAS */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">

                {/* DISTRIBUIDORES */}
                <div>
                    <div className="mb-7 text-center">
                        <h3 className="text-2xl font-bold text-neutral-800">
                            Nuestros Proveedores
                        </h3>

                        <p className="mt-2 text-sm text-neutral-500">
                            Marcas que respaldan nuestras soluciones industriales
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        {distributors.map((distributor) => (
                            <a
                                key={distributor.id}
                                href={distributor.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visitar página oficial de ${distributor.name}`}
                                className="group flex flex-col items-center overflow-hidden rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="flex h-28 w-full items-center justify-center overflow-hidden rounded-xl bg-white p-2">
                                    <img
                                        src={distributor.image}
                                        alt={`Logo de ${distributor.name}`}
                                        loading="lazy"
                                        className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                                    />
                                </div>

                                <p className="mt-3 text-center text-sm font-semibold text-neutral-700 transition-colors duration-300 group-hover:text-yellow-700">
                                    {distributor.name}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>

                {/* CLIENTES */}
                <div>
                    <div className="mb-7 text-center">
                        <h3 className="text-2xl font-bold text-neutral-800">
                            Nuestros clientes
                        </h3>

                        <p className="mt-2 text-sm text-neutral-500">
                            Empresas que confían en nuestro trabajo
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        {clients.map((client) => (
                            <button
                                key={client.id}
                                type="button"
                                onClick={() => setSelectedClient(client)}
                                aria-label={`Ampliar logo de ${client.name}`}
                                className="group flex flex-col items-center overflow-hidden rounded-2xl border border-neutral-200 bg-white p-3 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="flex h-28 w-full items-center justify-center overflow-hidden rounded-xl bg-white p-2">
                                    <img
                                        src={client.image}
                                        alt={`Logo de ${client.name}`}
                                        loading="lazy"
                                        className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                                    />
                                </div>

                                <p className="mt-3 w-full text-center text-sm font-semibold text-neutral-700 transition-colors duration-300 group-hover:text-yellow-700">
                                    {client.name}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

            </div>

            {/* MODAL DE CLIENTES */}
            <ImageModal
                client={selectedClient}
                onClose={() => setSelectedClient(null)}
            />

        </section>
    );
}

export default Representations;
