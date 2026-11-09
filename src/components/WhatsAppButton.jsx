
import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
    const phoneNumber = "573012787447";

    const message =
        "Hola, estoy interesado en conocer más sobre los productos y servicios de Fitting Valves.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar a Fitting Valves por WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-[#20BA5A]"
        >
            <MessageCircle size={30} strokeWidth={2.2} />
        </a>
    );
}

export default WhatsAppButton;
