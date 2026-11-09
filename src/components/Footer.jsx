
import {
    MapPin,
    Phone,
    Mail,
    ArrowUp,
} from "lucide-react";

function Footer() {
    const currentYear = new Date().getFullYear();

    const offices = [
        {
            city: "Bucaramanga",
            address: "Km. 6 Vía Bucaramanga a Girón, Bodega 1",
            phones: ["PBX: (7) 700 0350", "Cel: (316) 529-8387"],
        },
        {
            city: "Bogotá D.C.",
            phones: ["Tel: 323 227 4952"],
        },
        {
            city: "Medellín",
            phones: ["Tel: 317 437 7486"],
        },
        {
            city: "Barranquilla",
            address: "Vía 40 # 85-999, Bodega B4, Parque Logika",
            phones: ["Tel: (5) 311 2410"],
        },
        {
            city: "Barrancabermeja",
            address: "Calle 71 N.º 21-39",
            phones: ["Tel: (7) 622 2271"],
        },
    ];

    return (
        <footer className="bg-[#172536] px-6 pt-8 text-white md:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">

                {/* CONTENIDO PRINCIPAL */}
                <div className="grid grid-cols-1 gap-7 pb-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

                    {/* MARCA */}
                    <div>
                        <h2 className="text-xl font-extrabold tracking-tight">
                            FITTING <span className="text-[#F5C400]">VALVES</span>
                        </h2>

                        <div className="mt-2 h-1 w-10 rounded-full bg-[#F5C400]" />

                        <p className="mt-3 max-w-xs text-xs leading-6 text-slate-300">
                            Soluciones industriales para la conducción de fluidos,
                            comprometidos con la calidad y el desarrollo de la industria.
                        </p>

                        {/* INSTAGRAM */}
                        <div className="mt-4">
                            <p className="mb-2 text-xs font-semibold text-white">
                                Síguenos
                            </p>

                            <a
                                href="https://www.instagram.com/fittingvalves/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visitar Instagram de Fitting Valves"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 text-slate-300 transition-all duration-300 hover:border-[#F5C400] hover:bg-[#F5C400] hover:text-neutral-950"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle
                                        cx="18"
                                        cy="6"
                                        r="1"
                                        fill="currentColor"
                                        stroke="none"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* SEDES */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        <h3 className="mb-4 text-base font-bold">
                            Nuestras sedes
                        </h3>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">

                            {offices.map((office) => (
                                <div key={office.city}>
                                    <div className="flex items-center gap-2">
                                        <MapPin
                                            size={15}
                                            className="shrink-0 text-[#F5C400]"
                                        />

                                        <h4 className="text-sm font-semibold text-white">
                                            {office.city}
                                        </h4>
                                    </div>

                                    {office.address && (
                                        <p className="ml-5 mt-1 text-xs leading-5 text-slate-400">
                                            {office.address}
                                        </p>
                                    )}

                                    {office.phones.map((phone) => (
                                        <p
                                            key={phone}
                                            className="ml-5 mt-1 text-xs text-slate-400"
                                        >
                                            {phone}
                                        </p>
                                    ))}
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* CONTACTO */}
                    <div>
                        <h3 className="mb-4 text-base font-bold">
                            Contáctanos
                        </h3>

                        <div className="space-y-4">

                            {/* TELÉFONO */}
                            <div className="flex items-start gap-2">
                                <Phone
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#F5C400]"
                                />

                                <div>
                                    <p className="text-xs font-semibold text-white">
                                        Línea de atención
                                    </p>

                                    <a
                                        href="tel:+573165298387"
                                        className="mt-1 block text-xs text-slate-400 transition-colors hover:text-[#F5C400]"
                                    >
                                        (316) 529-8387
                                    </a>
                                </div>
                            </div>

                            {/* CORREO */}
                            <div className="flex items-start gap-2">
                                <Mail
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#F5C400]"
                                />

                                <div>
                                    <p className="text-xs font-semibold text-white">
                                        Correo electrónico
                                    </p>

                                    <a
                                        href="mailto:ventas@fittingvalves.com"
                                        className="mt-1 block break-all text-xs text-slate-400 transition-colors hover:text-[#F5C400]"
                                    >
                                        ventas@fittingvalves.com
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* BARRA INFERIOR */}
                <div className="border-t border-slate-600/60 py-4">
                    <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row">

                        <p className="text-xs text-slate-400">
                            © {currentYear}{" "}
                            <span className="font-bold text-white">
                                Fitting Valves.
                            </span>{" "}
                            Todos los derechos reservados.
                        </p>

                        <button
                            type="button"
                            onClick={() =>
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                })
                            }
                            aria-label="Volver al inicio"
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F5C400] text-neutral-950 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
                        >
                            <ArrowUp size={19} />
                        </button>

                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
