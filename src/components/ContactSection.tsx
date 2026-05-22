"use client";
import { useState } from "react";

// ─── CONFIG — Edita estos datos ───────────────────────────────────────────────
const CONFIG = {
  whatsapp: "525534623727",            // Número con código de país, sin "+"
  whatsappMsg: "Hola, me gustaría recibir más información sobre sus servicios.",
  phone: "+52 55 3462 3727",
  email: "contacto@zgs.com",
  address: "Av. Ejército Nacional Mexicano 425, Chapultepec Morales, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX",
  instagram: "https://instagram.com/zgs",
  facebook: "https://facebook.com/zgs",
  linkedin: "https://linkedin.com/company/zgs",
  twitter: "https://twitter.com/zgs",
  // Google Maps embed — reemplaza con tu ubicación real
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15050.211786636733!2d-99.197022!3d19.4326077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2020215dfae79%3A0xbcc005cc94747eb6!2sAv.%20Ej%C3%A9rcito%20Nacional%20Mexicano%20425%2C%20Granada%2C%20Miguel%20Hidalgo%2C%2011520%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1700000000000",
};

const socialLinks = [
  {
    name: "Instagram",
    href: CONFIG.instagram,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: CONFIG.facebook,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: CONFIG.linkedin,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: CONFIG.twitter,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí conecta tu backend / Formspree / etc.
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const waLink = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMsg)}`;

  return (
    <section id="contacto" className="py-28 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-5 tracking-wide uppercase">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-blue-950 leading-tight mb-5">
            Hablemos hoy mismo
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Estamos listos para atenderte. Elige el canal que más te convenga.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT — Contact Info */}
          <div className="space-y-8">
            {/* Quick contact cards */}
            <a
              id="whatsapp-btn"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover flex items-center gap-5 p-6 rounded-3xl bg-gradient-to-r from-green-500 to-green-400 text-white shadow-xl shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-lg">WhatsApp</div>
                <div className="text-white/80 text-sm">Escríbenos ahora, respuesta inmediata</div>
                <div className="font-semibold mt-1">{CONFIG.phone}</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* Phone */}
            <a
              id="phone-btn"
              href={`tel:${CONFIG.phone.replace(/\s|-/g, "")}`}
              className="card-hover flex items-center gap-5 p-6 rounded-3xl bg-white border border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-lg hover:shadow-blue-100 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-blue-950 text-lg">Teléfono</div>
                <div className="text-gray-400 text-sm">Lunes a viernes, 8am – 6pm</div>
                <div className="font-semibold text-blue-700 mt-1">{CONFIG.phone}</div>
              </div>
            </a>

            {/* Email */}
            <a
              id="email-btn"
              href={`mailto:${CONFIG.email}`}
              className="card-hover flex items-center gap-5 p-6 rounded-3xl bg-white border border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-lg hover:shadow-blue-100 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-blue-950 text-lg">Correo electrónico</div>
                <div className="text-gray-400 text-sm">Respondemos en menos de 24h</div>
                <div className="font-semibold text-blue-700 mt-1">{CONFIG.email}</div>
              </div>
            </a>
          </div>

          {/* RIGHT — Contact Form */}
          <div className="p-8 md:p-10 rounded-3xl bg-white border border-blue-100 shadow-sm">
            <h3 className="text-2xl font-medium text-blue-950 mb-2">Envíanos un mensaje</h3>
            <p className="text-gray-400 text-sm mb-8">Completa el formulario y te contactaremos a la brevedad.</p>

            {sent && (
              <div className="mb-6 px-5 py-4 rounded-2xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                ¡Mensaje enviado! Te contactaremos pronto.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" suppressHydrationWarning>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-900 mb-1.5">Nombre completo</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  suppressHydrationWarning
                  className="w-full px-5 py-3.5 rounded-2xl border border-blue-100 bg-blue-50/30 text-blue-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-200 text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-1.5">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="correo@empresa.com"
                  suppressHydrationWarning
                  className="w-full px-5 py-3.5 rounded-2xl border border-blue-100 bg-blue-50/30 text-blue-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-200 text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-900 mb-1.5">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  suppressHydrationWarning
                  className="w-full px-5 py-3.5 rounded-2xl border border-blue-100 bg-blue-50/30 text-blue-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-200 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                id="submit-form-btn"
                className="w-full py-4 rounded-2xl btn-shimmer text-white font-semibold shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 text-base"
              >
                Enviar mensaje →
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-medium text-blue-950 mb-2">Nuestra ubicación</h3>
            <p className="text-gray-400 text-sm flex items-center justify-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {CONFIG.address}
            </p>
          </div>
          <div className="map-container rounded-3xl overflow-hidden shadow-xl shadow-blue-500/10 border border-blue-100 h-[420px]">
            <iframe
              src={CONFIG.mapSrc}
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación ZGS"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
