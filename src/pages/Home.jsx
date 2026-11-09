
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import AboutPreview from "../components/AboutPreview";
import Representations from "../components/Representations";
import ProductsPreview from "../components/ProductsPreview";

import slide1 from "../assets/home/carrusel/slide-1.jpg";
import slide2 from "../assets/home/carrusel/slide-2.jpg";
import slide3 from "../assets/home/carrusel/slide-3.jpg";
import slide4 from "../assets/home/carrusel/slide-4.jpg";
import slide5 from "../assets/home/carrusel/slide-5.jpg";

const slides = [
    {
        id: 1,
        image: slide1,
        eyebrow: "FITTING VALVES",
        title: "Importadores Industriales",
        position: "items-center justify-center text-center",
        textPosition: "items-center",
    },
    {
        id: 2,
        image: slide2,
        eyebrow: "IMPULSAMOS EL DESARROLLO",
        title: "Conectamos El Progreso",
        position: "items-center justify-start text-center",
        textPosition: "items-start",
    },
    {
        id: 3,
        image: slide3,
        eyebrow: "COMPROMISO Y EXPERIENCIA",
        title: "Calidad Que Impulsa La Industria",
        position: "items-end justify-start text-left",
        textPosition: "items-start",
    },
    {
        id: 4,
        image: slide4,
        eyebrow: "LA EXCELENCIA ES EL COMIENZO",
        title: "La Mejora Continua Es El Camino",
        position: "items-center justify-end text-right",
        textPosition: "items-end",
    },
    {
        id: 5,
        image: slide5,
        eyebrow: "CRECEMOS CON NUESTROS CLIENTES",
        title: "Avanzamos Con La Industria",
        position: "items-end justify-center text-center",
        textPosition: "items-center",
    },
];

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = () => {
        setCurrentSlide((previous) => (previous + 1) % slides.length);
    };

    const previousSlide = () => {
        setCurrentSlide((previous) =>
            previous === 0 ? slides.length - 1 : previous - 1
        );
    };

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentSlide((previous) => (previous + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <>
            {/* CARRUSEL PRINCIPAL */}
            <section
                className="relative isolate flex min-h-[calc(100svh-5.5rem)] w-full overflow-hidden bg-neutral-950"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Imágenes del carrusel */}
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            currentSlide === index ? "opacity-100" : "opacity-0"
                        }`}
                        aria-hidden={currentSlide !== index}
                    >
                        <img
                            src={slide.image}
                            alt=""
                            className="h-full w-full object-cover object-center"
                            loading={index === 0 ? "eager" : "lazy"}
                            fetchPriority={index === 0 ? "high" : "auto"}
                        />

                        {/* Capa oscura para mejorar el contraste */}
                        <div className="absolute inset-0 bg-black/55" />
                    </div>
                ))}

                {/* Contenido de la diapositiva */}
                <div
                    key={slides[currentSlide].id}
                    className={`relative z-10 flex w-full flex-col px-8 py-16 md:px-20 lg:px-28 ${slides[currentSlide].position}`}
                >
                    <div
                        className={`flex max-w-4xl flex-col ${slides[currentSlide].textPosition} animate-slide-content`}
                    >
                        {/* Texto amarillo */}
                        <p className="mb-4 text-xl font-extrabold uppercase tracking-[0.2em] text-[#F5C400] md:text-3xl lg:text-4xl">
                            {slides[currentSlide].eyebrow}
                        </p>

                        {/* Título blanco */}
                        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            {slides[currentSlide].title}
                        </h1>
                    </div>
                </div>

                {/* Botón anterior */}
                <button
                    onClick={previousSlide}
                    aria-label="Imagen anterior"
                    className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/25 p-3 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-[#F5C400] hover:text-neutral-950 md:left-8"
                >
                    <ChevronLeft size={26} />
                </button>

                {/* Botón siguiente */}
                <button
                    onClick={nextSlide}
                    aria-label="Imagen siguiente"
                    className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/25 p-3 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-[#F5C400] hover:text-neutral-950 md:right-8"
                >
                    <ChevronRight size={26} />
                </button>

                {/* Indicadores */}
                <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Ir a la diapositiva ${index + 1}`}
                            aria-current={currentSlide === index ? "true" : undefined}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                currentSlide === index
                                    ? "w-9 bg-[#F5C400]"
                                    : "w-2.5 bg-white/60 hover:bg-white"
                            }`}
                        />
                    ))}
                </div>
            </section>

            {/* NUEVA SECCIÓN: CONOCE FITTING VALVES */}

            <AboutPreview />
            
            {/* NUEVA SECCIÓN: DISTRIBUIDORES Y CLIENTES */}
            <Representations />

            {/* NUEVA SECCIÓN: CONOCE NUESTROS PRODUCTOS */}
            <ProductsPreview />
        </>
    );
}

export default Home;
