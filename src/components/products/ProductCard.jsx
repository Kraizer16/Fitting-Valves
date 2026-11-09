
import { ArrowUpRight, Tag } from "lucide-react";

function ProductCard({ product, onViewDetails }) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Imagen del producto */}
            <div className="relative flex h-60 items-center justify-center overflow-hidden bg-gray-50 p-6">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        onError={(event) => {
                            event.currentTarget.style.display = "none";
                        }}
                        className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                ) : (
                    <span className="text-sm text-gray-400">
                        Imagen no disponible
                    </span>
                )}

                <span className="absolute left-4 top-4 rounded-full bg-[#172536] px-3 py-1.5 text-xs font-semibold text-white">
                    {product.category}
                </span>
            </div>

            {/* Información */}
            <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    <Tag size={14} />
                    {product.brand}
                </div>

                <h3 className="text-xl font-bold text-[#172536] transition group-hover:text-yellow-600">
                    {product.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                    {product.shortDescription}
                </p>

                <button
                    type="button"
                    onClick={() => onViewDetails(product)}
                    className="mt-6 flex w-full items-center justify-between border-t border-gray-100 pt-4 text-sm font-bold text-[#172536] transition hover:text-yellow-600"
                >
                    Conocer producto
                    <ArrowUpRight size={19} />
                </button>
            </div>
        </article>
    );
}

export default ProductCard;
