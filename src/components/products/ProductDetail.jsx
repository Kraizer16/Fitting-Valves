
import { X, FileText, ExternalLink, CheckCircle2 } from "lucide-react";

function ProductDetail({ product, onClose }) {
    if (!product) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="product-detail-title"
                className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
                onClick={(event) => event.stopPropagation()}
            >
                {/* Cerrar */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Cerrar detalles"
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:bg-gray-100"
                >
                    <X size={22} />
                </button>

                <div className="grid md:grid-cols-2">

                    {/* Imagen */}
                    <div className="flex min-h-[300px] items-center justify-center bg-gray-50 p-8 md:min-h-[500px]">
                        {product.image ? (
                            <img
                                src={product.image}
                                alt={product.name}
                                className="max-h-[420px] w-full object-contain"
                            />
                        ) : (
                            <p className="text-sm text-gray-400">
                                Imagen no disponible
                            </p>
                        )}
                    </div>

                    {/* Información */}
                    <div className="p-7 md:p-10">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
                            {product.category}
                        </p>

                        <h2
                            id="product-detail-title"
                            className="mt-3 text-3xl font-extrabold text-[#172536]"
                        >
                            {product.name}
                        </h2>

                        <p className="mt-2 text-sm font-medium text-gray-400">
                            Marca: {product.brand}
                        </p>

                        <div className="my-6 h-1 w-16 rounded-full bg-[#F5C400]" />

                        <p className="text-sm leading-7 text-gray-600">
                            {product.description}
                        </p>

                        {/* Especificaciones */}
                        {product.specifications?.length > 0 && (
                            <div className="mt-8">
                                <h3 className="mb-4 text-lg font-bold text-[#172536]">
                                    Especificaciones técnicas
                                </h3>

                                <div className="divide-y divide-gray-100 border-y border-gray-100">
                                    {product.specifications.map((specification, index) => (
                                        <div
                                            key={index}
                                            className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-4 py-3 text-sm"
                                        >
                                            <span className="font-semibold text-gray-500">
                                                {specification.label}
                                            </span>

                                            <span className="text-gray-700">
                                                {specification.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Ficha técnica */}
                        {product.technicalSheet && (
                            <a
                                href={product.technicalSheet}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-8 flex items-center justify-center gap-2 rounded-md bg-[#F5C400] px-5 py-3 font-bold text-[#172536] transition hover:bg-yellow-400"
                            >
                                <FileText size={19} />
                                Consultar ficha técnica
                                <ExternalLink size={16} />
                            </a>
                        )}

                        {!product.technicalSheet && (
                            <p className="mt-8 flex items-start gap-2 text-xs leading-5 text-gray-400">
                                <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                                Consulta las características y especificaciones disponibles
                                de este producto.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
