import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="ZGS Hero Background"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-blue-800/70" />
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <div className="text-white space-y-8">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-blue-200 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Firma Legal y Corporativa
            </span>
          </div>

          <h1 className="animate-fade-up delay-100 text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
            Seguridad legal
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              para tu empresa
            </span>
          </h1>

          <p className="animate-fade-up delay-200 text-lg text-blue-100/80 max-w-xl leading-relaxed">
            Asesoría jurídica y corporativa integral. Ayudamos a empresas e inversionistas extranjeros a constituirse, regularizarse, operar y crecer de forma segura en México.
          </p>

          <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
            <a
              href="#servicios"
              className="px-8 py-4 rounded-2xl btn-shimmer text-white font-semibold shadow-xl shadow-blue-500/30 hover:shadow-blue-400/50 transition-all duration-300 text-base"
            >
              Nuestros Servicios
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 rounded-2xl glass border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-base"
            >
              Contáctanos →
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-up delay-400 grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
            {[
              { value: "100%", label: "Cumplimiento" },
              { value: "Seguro", label: "Crecimiento" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-semibold text-white">{stat.value}</div>
                <div className="text-blue-300 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Floating cards */}
        <div className="hidden lg:flex flex-row gap-6 justify-center items-center w-full">
          {/* Card 1: Legal */}
          <div className="animate-float glass rounded-3xl p-6 max-w-sm w-[320px] shadow-2xl border border-white/10">
            <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-700/20 flex items-center justify-center mb-5 border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-400/20 blur-2xl group-hover:bg-blue-400/30 transition-all duration-500" />
              {/* Balanza de la justicia */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-blue-300/80 drop-shadow-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="text-white font-medium text-lg mb-3">Servicios Legales</h3>
            <ul className="space-y-2">
              {[
                "Constitución y estructura empresarial",
                "Control corporativo y legal",
                "Derecho corporativo y contractual",
                "Trámites migratorios (INM)"
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-blue-100/90 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Fiscal */}
          <div className="animate-float glass rounded-3xl p-6 max-w-sm w-[320px] shadow-2xl border border-white/10" style={{ animationDelay: '1s' }}>
            <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 flex items-center justify-center mb-5 border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-cyan-400/20 blur-2xl group-hover:bg-cyan-400/30 transition-all duration-500" />
              {/* Calculadora */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-cyan-300/80 drop-shadow-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-white font-medium text-lg mb-3">Servicios Fiscales</h3>
            <ul className="space-y-2">
              {[
                "Control contable y fiscal",
                "Cumplimiento ante SAT",
                "Nómina y seguridad social",
                "Facturación y CFDI",
                "Regularización fiscal"
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-cyan-100/90 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-pulse">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}