import React from "react";

export default function ApproachSection() {
  return (
    <section id="enfoque" className="py-28 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-5 tracking-wide uppercase">
              Nuestro Enfoque
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-blue-950 leading-tight mb-6">
              Más que un servicio, somos
              <span className="block gradient-text">tu estructura integral</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              En <strong className="text-blue-900">ZGS</strong> entendemos que muchas empresas requieren más que un abogado o un contador; necesitan una estructura integral que les permita operar correctamente en México.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Ofrecemos soluciones empresariales completas. Trabajamos tanto con empresas mexicanas como con inversionistas extranjeros que buscan establecer y desarrollar operaciones de manera segura y estructurada.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Estrategia Corporativa",
                "Cumplimiento Legal",
                "Regularización Fiscal",
                "Control Administrativo",
                "Acompañamiento Operativo",
                "Soluciones Personalizadas"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-blue-900 font-medium">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual/Card Content */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-lg" />
            <div className="relative bg-gradient-to-br from-blue-900 to-blue-950 rounded-3xl p-10 md:p-12 shadow-2xl text-white overflow-hidden">
              {/* Inner decor */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
              
              <h3 className="text-3xl font-medium mb-4 relative z-10">Servicios Integrales y Personalizados</h3>
              <div className="w-16 h-1 bg-blue-400 rounded-full mb-8 relative z-10" />
              
              <p className="text-blue-100/90 text-lg leading-relaxed mb-8 relative z-10">
                Cada empresa tiene necesidades distintas. Nuestros servicios pueden contratarse de forma individual o integral, adaptándonos al tamaño, operación y etapa de crecimiento de cada cliente.
              </p>
              
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10 relative z-10">
                <p className="font-semibold text-white mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Disponibilidad Total
                </p>
                <p className="text-sm text-blue-200">
                  Estamos abiertos a desarrollar soluciones adicionales conforme a las necesidades específicas de tu proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
