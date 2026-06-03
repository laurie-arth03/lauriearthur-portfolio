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
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10">
          Développeur Fullstack spécialisé en React et Node.js. 
          Je transforme vos idées en produits numériques d'exception.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-500/20">
            Voir mes projets
          </button>
          <button className="px-8 py-4 border border-slate-700 text-white font-bold rounded-xl hover:bg-slate-800 transition-all">
            Me contacter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;