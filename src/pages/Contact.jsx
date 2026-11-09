
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Building2,
  User,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

// Configuración de EmailJS desde las variables de entorno
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  // Actualizar los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  // Enviar formulario mediante EmailJS
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("Faltan las variables de configuración de EmailJS.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || "No especificada",
          phone: formData.phone || "No especificado",
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      console.log("Correo enviado correctamente:", response);

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setStatus("error");
    }
  };

  return (
    <section className="bg-gray-50">
      {/* Encabezado */}
      <div className="relative overflow-hidden bg-[#172536] px-6 py-20 text-center">
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#F5C400]">
            Estamos para ayudarte
          </p>

          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Hablemos de tus{" "}
            <span className="text-[#F5C400]">proyectos</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
            Nuestro equipo está preparado para asesorarte y ofrecerte
            soluciones industriales de acuerdo con las necesidades de tu empresa.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#F5C400]" />
      </div>

      {/* Contenido principal */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-5">

        {/* Información de contacto */}
        <div className="lg:col-span-2">
          <p className="text-sm font-bold uppercase tracking-widest text-yellow-600">
            Información de contacto
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#172536]">
            Estamos listos para escucharte
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Cuéntanos qué necesitas. Queremos acompañarte en tus proyectos
            industriales con productos y soluciones de calidad.
          </p>

          <div className="mt-10 space-y-7">

            {/* Correo */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#172536] text-[#F5C400]">
                <Mail size={22} />
              </div>

              <div>
                <h3 className="font-bold text-[#172536]">
                  Correo electrónico
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  marlonacg1603@gmail.com
                </p>
              </div>
            </div>

            {/* Ubicación */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#172536] text-[#F5C400]">
                <MapPin size={22} />
              </div>

              <div>
                <h3 className="font-bold text-[#172536]">
                  Ubicación
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Bucaramanga, Santander, Colombia
                </p>
              </div>
            </div>

            {/* Atención empresarial */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#172536] text-[#F5C400]">
                <Building2 size={22} />
              </div>

              <div>
                <h3 className="font-bold text-[#172536]">
                  Atención empresarial
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Soluciones para diferentes sectores industriales.
                </p>
              </div>
            </div>
          </div>

          {/* Mensaje adicional */}
          <div className="mt-12 rounded-xl bg-[#172536] p-7 text-white">
            <h3 className="text-xl font-bold">
              ¿Tienes un proyecto en mente?
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-300">
              Escríbenos y conversemos sobre cómo podemos ayudarte.
            </p>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm md:p-10 lg:col-span-3">
          <h2 className="text-2xl font-bold text-[#172536]">
            Envíanos un mensaje
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Completa el siguiente formulario y nos pondremos en contacto contigo.
          </p>

          {/* Mensaje de envío exitoso */}
          {status === "success" && (
            <div
              role="status"
              className="mt-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-sm text-green-700"
            >
              <CheckCircle2 size={20} className="shrink-0" />

              <p>
                ¡Tu mensaje fue enviado correctamente! Gracias por contactarnos.
              </p>
            </div>
          )}

          {/* Mensaje de error */}
          {status === "error" && (
            <div
              role="alert"
              className="mt-6 flex items-center gap-3 rounded-lg bg-red-50 p-4 text-sm text-red-700"
            >
              <AlertCircle size={20} className="shrink-0" />

              <p>
                No pudimos enviar tu mensaje. Inténtalo nuevamente.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">

            <div className="grid gap-6 md:grid-cols-2">

              {/* Nombre completo */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Nombre completo *
                </label>

                <div className="relative">
                  <User
                    className="absolute left-3 top-3.5 text-gray-400"
                    size={18}
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    autoComplete="name"
                    maxLength={100}
                    required
                    className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                  />
                </div>
              </div>

              {/* Correo electrónico */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Correo electrónico *
                </label>

                <div className="relative">
                  <Mail
                    className="absolute left-3 top-3.5 text-gray-400"
                    size={18}
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="correo@empresa.com"
                    autoComplete="email"
                    maxLength={150}
                    required
                    className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                  />
                </div>
              </div>

              {/* Empresa */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Empresa
                </label>

                <div className="relative">
                  <Building2
                    className="absolute left-3 top-3.5 text-gray-400"
                    size={18}
                  />

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    maxLength={150}
                    className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                  />
                </div>
              </div>

              {/* Teléfono */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Teléfono
                </label>

                <div className="relative">
                  <Phone
                    className="absolute left-3 top-3.5 text-gray-400"
                    size={18}
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Tu número de contacto"
                    autoComplete="tel"
                    maxLength={30}
                    className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                  />
                </div>
              </div>
            </div>

            {/* Asunto */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Asunto *
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarte?"
                maxLength={150}
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Mensaje *
              </label>

              <div className="relative">
                <MessageSquare
                  className="absolute left-3 top-4 text-gray-400"
                  size={18}
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos más sobre tu solicitud..."
                  rows={5}
                  maxLength={3000}
                  required
                  className="w-full resize-none rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                />
              </div>
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#172536] px-6 py-4 font-bold text-white transition hover:bg-[#243b55] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  Enviando mensaje...
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                </>
              ) : (
                <>
                  Enviar mensaje
                  <Send size={18} />
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-400">
              Los campos marcados con * son obligatorios.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
