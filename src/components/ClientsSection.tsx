const clients = [
  { name: "ONME", sector: "Service provider", initials: "ON" },
  { name: "MEIYANG", sector: "Talent", initials: "ME" },
  { name: "SUPER OCEAN", sector: "Logistics", initials: "SO" },
  { name: "CRECIEMIENTO SIN FRONTERAS", sector: "Ecommerce", initials: "CF" },
  { name: "GANA CHOY", sector: "Ecommerce", initials: "GC" },
  { name: "CLANSERTA ALBA", sector: "Ecommerce", initials: "CA" },
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
      </div>
    </section>
  );
}
