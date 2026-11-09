
import { useEffect } from "react";
import { X } from "lucide-react";

function ImageModal({ client, onClose }) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    if (!client) return null;

    return (
        <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/75 p-5 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-label={`Logo de ${client.name}`}
                className="relative w-full max-w-3xl rounded-2xl bg-white p-5 shadow-2xl md:p-8"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    aria-label="Cerrar imagen"
                    className="absolute right-3 top-3 z-10 rounded-full bg-neutral-100 p-2 text-neutral-700 transition-colors hover:bg-yellow-400 hover:text-neutral-950"
                >
                    <X size={22} />
                </button>

                <div className="flex min-h-62.5 items-center justify-center">
                    <img
                        src={client.image}
                        alt={`Logo de ${client.name}`}
                        className="max-h-[65vh] max-w-full object-contain"
                    />
                </div>

                <h3 className="mt-5 text-center text-xl font-bold text-neutral-900">
                    {client.name}
                </h3>
            </div>
        </div>
    );
}

export default ImageModal;
