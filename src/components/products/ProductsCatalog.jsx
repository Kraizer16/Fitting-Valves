
import { useState } from "react";
import {
    Search,
    X,
    ChevronLeft,
    ChevronRight,
    SlidersHorizontal,
} from "lucide-react";

import products from "../../data/products";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";

const PRODUCTS_PER_PAGE = 9;

function normalizeText(value) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function ProductsCatalog() {
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const categories = [
        "Todos",
        ...new Set(products.map((product) => product.category)),
    ];

    // Filtrar productos por categoría y búsqueda
    const filteredProducts = products.filter((product) => {
        const matchesCategory =
            activeCategory === "Todos" ||
            product.category === activeCategory;

        const searchableText = normalizeText(
            `${product.name} ${product.brand} ${product.category} ${product.shortDescription}`
        );

        const matchesSearch = searchableText.includes(
            normalizeText(searchTerm.trim())
        );

        return matchesCategory && matchesSearch;
    });

    // Calcular paginación
    const totalPages = Math.ceil(
        filteredProducts.length / PRODUCTS_PER_PAGE
    );

    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;

    const visibleProducts = filteredProducts.slice(
        startIndex,
        startIndex + PRODUCTS_PER_PAGE
    );

    function handleSearch(value) {
        setSearchTerm(value);
        setCurrentPage(1);
    }

    function handleCategory(category) {
        setActiveCategory(category);
        setCurrentPage(1);
    }

    function clearFilters() {
        setSearchTerm("");
        setActiveCategory("Todos");
        setCurrentPage(1);
    }

    return (
        <section id="catalogo" className="scroll-mt-24 bg-white px-6 py-20">
            <div className="mx-auto max-w-7xl">

                {/* Encabezado */}
                <div className="mb-10 text-center">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-yellow-600">
                        Nuestro portafolio
                    </p>

                    <h2 className="text-3xl font-extrabold text-[#172536] md:text-4xl">
                        Soluciones para cada industria
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500">
                        Encuentra los productos que necesitas y conoce sus características,
                        especificaciones y aplicaciones industriales.
                    </p>
                </div>

                {/* Buscador */}
                <div className="mx-auto mb-8 max-w-3xl">
                    <div className="relative">
                        <Search
                            size={21}
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(event) => handleSearch(event.target.value)}
                            placeholder="Buscar por producto, marca o categoría..."
                            aria-label="Buscar productos"
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-4 pl-14 pr-12 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#F5C400] focus:bg-white focus:ring-2 focus:ring-yellow-100"
                        />

                        {searchTerm && (
                            <button
                                type="button"
                                onClick={() => handleSearch("")}
                                aria-label="Limpiar búsqueda"
                                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-700"
                            >
                                <X size={19} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Filtros */}
                <div className="mb-10">
                    <div className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold text-gray-500">
                        <SlidersHorizontal size={17} />
                        Filtrar por categoría
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => handleCategory(category)}
                                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${activeCategory === category
                                        ? "bg-[#172536] text-white shadow-md"
                                        : "border border-gray-200 bg-white text-gray-600 hover:border-[#172536] hover:text-[#172536]"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Resultados */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
                    <p className="text-sm text-gray-500">
                        {filteredProducts.length > 0 ? (
                            <>
                                Mostrando{" "}
                                <span className="font-bold text-[#172536]">
                                    {startIndex + 1}–
                                    {Math.min(
                                        startIndex + PRODUCTS_PER_PAGE,
                                        filteredProducts.length
                                    )}
                                </span>{" "}
                                de{" "}
                                <span className="font-bold text-[#172536]">
                                    {filteredProducts.length}
                                </span>{" "}
                                productos
                            </>
                        ) : (
                            "No se encontraron productos"
                        )}
                    </p>

                    {(searchTerm || activeCategory !== "Todos") && (
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="text-sm font-semibold text-yellow-700 transition hover:text-yellow-800"
                        >
                            Limpiar filtros
                        </button>
                    )}
                </div>

                {/* Tarjetas */}
                {visibleProducts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                        {visibleProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onViewDetails={setSelectedProduct}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-xl border border-dashed border-gray-300 px-6 py-16 text-center">
                        <Search size={36} className="mx-auto mb-4 text-gray-300" />

                        <h3 className="text-xl font-bold text-[#172536]">
                            No encontramos resultados
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            Intenta buscar con otro término o selecciona una categoría diferente.
                        </p>

                        <button
                            type="button"
                            onClick={clearFilters}
                            className="mt-6 rounded-md bg-[#172536] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#243b54]"
                        >
                            Ver todos los productos
                        </button>
                    </div>
                )}

                {/* Paginación */}
                {totalPages > 1 && (
                    <div className="mt-12 flex items-center justify-center gap-3">
                        <button
                            type="button"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((page) => page - 1)}
                            aria-label="Página anterior"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#172536] transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-30"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {Array.from(
                            { length: totalPages },
                            (_, index) => index + 1
                        ).map((page) => (
                            <button
                                key={page}
                                type="button"
                                onClick={() => setCurrentPage(page)}
                                className={`h-10 w-10 rounded-full text-sm font-bold transition ${currentPage === page
                                        ? "bg-[#172536] text-white"
                                        : "border border-gray-200 text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            type="button"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((page) => page + 1)}
                            aria-label="Página siguiente"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#172536] transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-30"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>

            {/* Ventana de detalle */}
            {selectedProduct && (
                <ProductDetail
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </section>
    );
}

export default ProductsCatalog;
