
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import {
    House,
    Building2,
    Package,
    Mail,
    ChevronDown,
    Eye,
    Target,
    Menu,
    X,
} from "lucide-react";

import logo from "../assets/logo.png";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const lastScrollY = useRef(0);

    const { pathname } = useLocation();

    const nosotrosActive = pathname === "/nosotros";

    // Detectar la dirección del scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Mantener visible el Navbar cuando los menús están abiertos
            if (open || mobileOpen) {
                setIsVisible(true);
                lastScrollY.current = currentScrollY;
                return;
            }

            // Mostrar siempre el Navbar cerca del inicio
            if (currentScrollY < 80) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current + 5) {
                // Scroll hacia abajo
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY.current - 5) {
                // Scroll hacia arriba
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [open, mobileOpen]);

    const linkStyle = ({ isActive }) =>
        `flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 group ${
            isActive
                ? "bg-yellow-400/15 text-yellow-700"
                : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
        }`;

    const IconStyle = ({ isActive }) =>
        `transition-transform duration-300 group-hover:-translate-y-0.5 ${
            isActive ? "scale-110" : ""
        }`;

    const closeMenus = () => {
        setOpen(false);
        setMobileOpen(false);
    };

    return (
        <header
            className={`sticky top-0 z-50 px-4 pt-4 transition-transform duration-300 ease-in-out ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-full border border-white/70 bg-white/80 px-6 py-3.5 shadow-lg shadow-black/5 backdrop-blur-xl">

                {/* IDENTIDAD DE MARCA */}
                <Link
                    to="/"
                    onClick={closeMenus}
                    className="flex shrink-0 items-center gap-3"
                >
                    <img
                        src={logo}
                        alt="Símbolo de Fitting Valves"
                        className="h-12 w-12 object-contain md:h-14 md:w-14"
                    />

                    <span className="whitespace-nowrap text-xl font-extrabold tracking-tight sm:text-2xl">
                        <span className="text-neutral-950">FITTING</span>{" "}
                        <span className="text-[#F5C400]">VALVES</span>
                    </span>
                </Link>

                {/* MENÚ DE ESCRITORIO */}
                <div className="hidden items-center gap-2 md:flex">

                    <NavLink to="/" end className={linkStyle}>
                        {({ isActive }) => (
                            <>
                                <House
                                    size={17}
                                    strokeWidth={2}
                                    className={IconStyle({ isActive })}
                                />
                                Inicio
                            </>
                        )}
                    </NavLink>

                    {/* NOSOTROS */}
                    <div className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            aria-expanded={open}
                            className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                                nosotrosActive
                                    ? "bg-yellow-400/15 text-yellow-700"
                                    : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                            }`}
                        >
                            <Building2
                                size={17}
                                strokeWidth={2}
                                className={IconStyle({
                                    isActive: nosotrosActive,
                                })}
                            />

                            Nosotros

                            <ChevronDown
                                size={15}
                                className={`transition-transform duration-300 ${
                                    open ? "rotate-180" : ""
                                }`}
                            />
                        </button>

                        {/* SUBMENÚ */}
                        {open && (
                            <div className="absolute right-0 top-full z-50 w-60 pt-3">
                                <div className="rounded-2xl border border-white/70 bg-white/90 p-2 shadow-xl shadow-black/10 backdrop-blur-xl">

                                    <NavLink
                                        to="/nosotros"
                                        onClick={closeMenus}
                                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-yellow-400/15 hover:text-yellow-700"
                                    >
                                        {({ isActive }) => (
                                            <>
                                                <Building2
                                                    size={18}
                                                    className={IconStyle({
                                                        isActive,
                                                    })}
                                                />
                                                Sobre nosotros
                                            </>
                                        )}
                                    </NavLink>

                                    <NavLink
                                        to="/nosotros#vision"
                                        onClick={closeMenus}
                                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-yellow-400/15 hover:text-yellow-700"
                                    >
                                        {({ isActive }) => (
                                            <>
                                                <Eye
                                                    size={18}
                                                    className={IconStyle({
                                                        isActive,
                                                    })}
                                                />
                                                Nuestra visión
                                            </>
                                        )}
                                    </NavLink>

                                    <NavLink
                                        to="/nosotros#mision"
                                        onClick={closeMenus}
                                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-yellow-400/15 hover:text-yellow-700"
                                    >
                                        {({ isActive }) => (
                                            <>
                                                <Target
                                                    size={18}
                                                    className={IconStyle({
                                                        isActive,
                                                    })}
                                                />
                                                Nuestra misión
                                            </>
                                        )}
                                    </NavLink>

                                </div>
                            </div>
                        )}
                    </div>

                    <NavLink to="/productos" className={linkStyle}>
                        {({ isActive }) => (
                            <>
                                <Package
                                    size={17}
                                    strokeWidth={2}
                                    className={IconStyle({ isActive })}
                                />
                                Productos
                            </>
                        )}
                    </NavLink>

                    <NavLink to="/contacto" className={linkStyle}>
                        {({ isActive }) => (
                            <>
                                <Mail
                                    size={17}
                                    strokeWidth={2}
                                    className={IconStyle({ isActive })}
                                />
                                Contacto
                            </>
                        )}
                    </NavLink>

                </div>

                {/* BOTÓN MENÚ MÓVIL */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={mobileOpen}
                    className="rounded-full p-2 text-neutral-800 transition-colors hover:bg-neutral-100 md:hidden"
                >
                    {mobileOpen ? <X size={23} /> : <Menu size={23} />}
                </button>
            </nav>

            {/* MENÚ DESPLEGABLE MÓVIL */}
            {mobileOpen && (
                <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/70 bg-white/90 p-4 shadow-xl shadow-black/10 backdrop-blur-xl md:hidden">
                    <div className="flex flex-col gap-2">

                        <NavLink
                            to="/"
                            end
                            onClick={closeMenus}
                            className={linkStyle}
                        >
                            <House size={18} />
                            Inicio
                        </NavLink>

                        <button
                            onClick={() => setOpen(!open)}
                            className="flex items-center justify-between rounded-full px-4 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100"
                        >
                            <span className="flex items-center gap-2">
                                <Building2 size={18} />
                                Nosotros
                            </span>

                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${
                                    open ? "rotate-180" : ""
                                }`}
                            />
                        </button>

                        {open && (
                            <div className="ml-5 flex flex-col gap-1 border-l-2 border-yellow-400 pl-3">

                                <Link
                                    to="/nosotros"
                                    onClick={closeMenus}
                                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-neutral-600 hover:bg-yellow-400/15"
                                >
                                    <Building2 size={17} />
                                    Sobre nosotros
                                </Link>

                                <Link
                                    to="/nosotros#vision"
                                    onClick={closeMenus}
                                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-neutral-600 hover:bg-yellow-400/15"
                                >
                                    <Eye size={17} />
                                    Nuestra visión
                                </Link>

                                <Link
                                    to="/nosotros#mision"
                                    onClick={closeMenus}
                                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-neutral-600 hover:bg-yellow-400/15"
                                >
                                    <Target size={17} />
                                    Nuestra misión
                                </Link>

                            </div>
                        )}

                        <NavLink
                            to="/productos"
                            onClick={closeMenus}
                            className={linkStyle}
                        >
                            <Package size={18} />
                            Productos
                        </NavLink>

                        <NavLink
                            to="/contacto"
                            onClick={closeMenus}
                            className={linkStyle}
                        >
                            <Mail size={18} />
                            Contacto
                        </NavLink>

                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
