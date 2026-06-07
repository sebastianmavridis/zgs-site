export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-700"
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-300/10 rounded-full blur-2xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-blue-200 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Soluciones legales y corporativas para empresas
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl">
          Tu empresa,{" "}
          <span className="gradient-text">protegida</span>
          {" "}y lista para crecer
        </h1>

        {/* Sub-headline */}
        <p className="animate-fade-up delay-200 text-blue-200/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
          Acompañamos a empresas nacionales y extranjeras en cada etapa de su
          operación: desde la constitución hasta la expansión internacional.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4">
          <a
            href="#contacto"
            className="px-8 py-4 rounded-2xl text-white font-semibold btn-shimmer shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300 text-base"
          >
            Agenda una consulta
          </a>
          <a
            href="#servicios"
            className="px-8 py-4 rounded-2xl glass text-white font-medium hover:bg-white/10 transition-all duration-300 text-base"
          >
            Ver servicios →
          </a>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up delay-400 mt-20 grid grid-cols-3 gap-8 md:gap-16 border-t border-white/10 pt-12 w-full max-w-2xl">
          {[
            { value: "+500", label: "Empresas atendidas" },
            { value: "10+", label: "Años de experiencia" },
            { value: "100%", label: "Compromiso legal" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-blue-300/70 text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
