const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="inline-block px-3 py-1 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-xs font-medium mb-6">
          Disponible pour de nouveaux projets
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Je crée des interfaces <br />
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            modernes et performantes.
          </span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10  gap-2 relative left-40">
          Transformons vos idées en produits numériques d'exception!
        </p>
      </div>
    </section>
  );
};

export default Hero;