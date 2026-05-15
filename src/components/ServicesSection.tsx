const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Derecho Corporativo",
    bullets: [
      "Constitución de sociedades (S.A. de C.V., S.A.S., S. de R.L.)",
      "Elaboración y actualización de libros corporativos",
      "Asambleas, poderes y reestructuración corporativa",
      "Compraventa y transmisión de acciones",
      "Regularización de empresas"
    ],
    tag: "Corporativo",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Inversión Extranjera",
    bullets: [
      "Asesoría para extranjeros en México",
      "Compra de empresas por extranjeros",
      "Estructuración legal sin RFC inicial",
      "Inscripción en el RNIE",
      "Estrategia legal para entrada al mercado mexicano"
    ],
    tag: "Expansión",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Trámites Gubernamentales y COFEPRIS",
    bullets: [
      "Aviso de Funcionamiento y permisos de importación",
      "Licencias de funcionamiento y uso de suelo",
      "Protección Civil (Programa Interno)",
      "Estrategia para comercialización de suplementos/cosméticos",
      "Responsable sanitario y etiquetado normativo"
    ],
    tag: "Regulatorio",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Contratos y Documentación",
    bullets: [
      "Contratos mercantiles y laborales",
      "Contratos de prestación de servicios y arrendamiento",
      "Contratos con influencers y marketing digital",
      "Revisión y corrección de contratos",
      "Convenios y adendas"
    ],
    tag: "Legal",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Arrendamiento e Inmuebles",
    bullets: [
      "Negociación y estructuración de contratos",
      "Estrategia legal para arrendamiento comercial",
      "Inclusión de obligados solidarios",
      "Blindaje legal del arrendador o arrendatario",
      "Pólizas jurídicas y procesos completos"
    ],
    tag: "Inmuebles",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Derecho Laboral",
    bullets: [
      "Elaboración de contratos laborales",
      "Atención de demandas y contestación",
      "Comparecencia en audiencias",
      "Negociaciones y conciliaciones",
      "Cálculo de finiquitos e indemnizaciones"
    ],
    tag: "Laboral",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Propiedad Intelectual (IMPI)",
    bullets: [
      "Registro de marca en México",
      "Búsqueda fonética y viabilidad",
      "Estrategia de protección de marca",
      "Registro internacional (OMPI/WIPO)",
      "Defensa de marca"
    ],
    tag: "PI",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Servicios Fiscales y Contables",
    bullets: [
      "Contabilidad general y facturación CFDI 4.0",
      "Gestión de Nómina (SUA, IMSS, INFONAVIT)",
      "Cumplimiento de obligaciones fiscales (ISR, IVA, DIOT)",
      "Trámites fiscales (SAT, opiniones, constancias)",
      "Actualización de actividades y cambios de régimen"
    ],
    tag: "Fiscal",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Asesoría Legal Continua",
    bullets: [
      "Planes mensuales legales y fiscales",
      "Consultas ilimitadas (según plan)",
      "Seguimiento de asuntos legales",
      "Estrategia preventiva empresarial",
      "Coordinación legal-contable"
    ],
    tag: "Integral",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-28 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-5 tracking-wide uppercase">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-blue-950 leading-tight mb-5">
            ¿En qué ayudamos
            <span className="block gradient-text">a las empresas?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Ofrecemos servicios integrales y personalizados para que tu empresa opere con tranquilidad y certeza jurídica.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`card-hover group bg-white rounded-3xl p-8 shadow-sm border border-blue-50 hover:border-blue-200 transition-all duration-300 delay-${(i % 3) * 100}`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>

              {/* Tag */}
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4 tracking-wide">
                {service.tag}
              </span>

              <h3 className="text-xl font-medium text-blue-950 mb-4 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {(service.bullets || []).map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-500 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-500/20">
          <div className="text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">
              ¿Necesitas un servicio personalizado?
            </h3>
            <p className="text-blue-100/80">
              Hablemos y diseñemos juntos la solución perfecta para ti.
            </p>
          </div>
          <a
            href="#contacto"
            className="flex-shrink-0 px-8 py-4 rounded-2xl bg-white text-blue-700 font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg text-base"
          >
            Solicitar cotización →
          </a>
        </div>
      </div>
    </section>
  );
}
