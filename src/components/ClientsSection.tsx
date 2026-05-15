const clients = [
  { name: "Empresa Alpha", sector: "Tecnología", initials: "EA" },
  { name: "Grupo Beta", sector: "Construcción", initials: "GB" },
  { name: "Corp Gamma", sector: "Finanzas", initials: "CG" },
  { name: "Delta Corp", sector: "Retail", initials: "DC" },
  { name: "Epsilon SA", sector: "Manufactura", initials: "ES" },
  { name: "Zeta Group", sector: "Salud", initials: "ZG" },
  { name: "Eta Ventures", sector: "Startups", initials: "EV" },
  { name: "Theta LLC", sector: "Logística", initials: "TL" },
];

const testimonials = [
  {
    name: "Carlos M.",
    role: "CEO, Empresa Alpha",
    text: "ZGS transformó por completo nuestra operación. En 6 meses vimos resultados que no habíamos logrado en años. Su equipo es simplemente excepcional.",
    initials: "CM",
  },
  {
    name: "Laura G.",
    role: "Directora, Corp Gamma",
    text: "El nivel de profesionalismo y la calidad de sus soluciones no tienen comparación. Recomendamos ZGS sin dudarlo a cualquier empresa que quiera crecer.",
    initials: "LG",
  },
  {
    name: "Roberto S.",
    role: "Gerente, Delta Corp",
    text: "Lo que más valoro de ZGS es su compromiso genuino con nuestros objetivos. Se convirtieron en un aliado estratégico invaluable para nuestro negocio.",
    initials: "RS",
  },
];

export default function ClientsSection() {
  return (
    <section id="clientes" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-5 tracking-wide uppercase">
            Clientes
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-blue-950 leading-tight mb-5">
            Empresas que confían
            <span className="block gradient-text">en nosotros</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Más de 150 empresas líderes han elegido a ZGS como su socio
            estratégico de confianza.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-24">
          {clients.map((client) => (
            <div
              key={client.name}
              className="card-hover group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-blue-50 hover:border-blue-200 bg-white hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
            >
              {/* Logo placeholder */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-medium text-lg shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 group-hover:scale-110 transition-all duration-300">
                {client.initials}
              </div>
              <div className="text-center">
                <div className="font-semibold text-blue-950 text-sm">{client.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{client.sector}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-divider mb-24" />

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-950">
            Lo que dicen nuestros clientes
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`card-hover p-8 rounded-3xl border border-blue-50 bg-gradient-to-br from-white to-blue-50/50 hover:border-blue-200 transition-all duration-300`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-blue-950 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image placeholder strip */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100 p-10 text-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-200/50 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-blue-400 font-medium text-sm">Galería de proyectos — Tus imágenes aquí</p>
          <p className="text-blue-300 text-xs mt-1">Reemplaza este bloque con tus logos o fotos de proyectos reales</p>
        </div>
      </div>
    </section>
  );
}
