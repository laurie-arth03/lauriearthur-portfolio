import React, { useState, useEffect } from 'react';
import maPhoto from '../assets/photo.jpg';
import { 
  Mail, Phone, ExternalLink, 
  Code2, Layout, 
  BookOpen, GraduationCap, 
  CheckCircle2, Globe, Cpu, Star, ArrowRight
} from 'lucide-react';

// Icône Github SVG
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} height={size} 
    viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const PortfolioLaurie = () => {
  const [githubRepos, setGithubRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/laurie-arth03/repos?sort=updated&per_page=8');
        const data = await response.json();
        setGithubRepos(data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur GitHub:", error);
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const skills = ["React JS", "Tailwind CSS", "Django", "Python", "MySQL", "PHP", "Figma", "Git", "PostgreSQL", "JavaScript"];
  
  const formations = [
    { year: "2025", title: "Licence en Développement d'Applications", school: "Athénée Saint Joseph Antsirabe" },
    { year: "2025", title: "Formation Design Web", school: "Orange Digital Center" },
    { year: "2022", title: "Baccalauréat Série C", school: "Lycée de référence" }
  ];

  // Palette enrichie pour les éclats
  const sparkleColors = ["#ffffff", "#ffffff", "#3b82f6", "#e0f2fe"];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* SYSTÈME D'ÉTOILES */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full"></div>
        
        {/* Génération des 70 étoiles */}
        {[...Array(70)].map((_, i) => {
          const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
          const size = Math.random() * 2.5 + 0.5; // Tailles variées
          return (
            <div 
              key={i}
              className="absolute rounded-full animate-sparkle"
              style={{
                width: size + 'px',
                height: size + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                backgroundColor: 'white', // Cœur toujours blanc pour l'éclat
                // TRIPLE HALO : Blanc intense + Couleur + Lueur diffuse
                boxShadow: `
                  0 0 ${size * 3}px 1px #fff, 
                  0 0 ${size * 6}px ${color}, 
                  0 0 ${size * 15}px ${color}44
                `,
                animationDelay: Math.random() * 8 + 's',
                animationDuration: Math.random() * 4 + 3 + 's',
                opacity: Math.random() * 0.8 + 0.2
              }}
            ></div>
          );
        })}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        {/* NAV GLASS */}
        <nav className="flex justify-between items-center mb-16 sticky top-4 z-50 backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-3xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="font-bold text-black text-xs">LA</span>
            </div>
            <span className="font-bold tracking-[0.2em] text-[10px] uppercase hidden sm:block">Laurie Arthur</span>
          </div>
          <a href="mailto:lauriarth@gmail.com" className="px-5 py-2 bg-white text-black hover:bg-blue-600 hover:text-white rounded-2xl text-[10px] font-black transition-all">
            ME CONTACTER
          </a>
        </nav>

        {/* HERO SECTION */}
        <div className="flex flex-col md:flex-row items-center gap-14 mb-40 pt-10">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg md:text-6xl font-serif font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-400">
                RABENARIVO
            </h3>
            <h3 className="text-4xl md:text-6xl font-light text-blue-400 mb-8 italic font-serif">
                Tsiory Laurie Arthur
            </h3>
            <p className="text-slate-400 text-lg max-w-xl leading-relaxed mb-10 font-medium">
                Développeuse Fullstack spécialisée en <span className="text-white border-b border-blue-500/50">React & Django</span>. 
                Bienvenue dans mon univers numérique.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-5">
                <div className="px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-center min-w-[100px]">
                    <div className="text-2xl font-black italic">L3</div>
                    <div className="text-[9px] text-blue-400 font-black uppercase tracking-widest">Niveau</div>
                </div>
                <div className="px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-center min-w-[100px]">
                    <div className="text-2xl font-black italic">{githubRepos.length}</div>
                    <div className="text-[9px] text-blue-400 font-black uppercase tracking-widest">Projets Git</div>
                </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-25 animate-pulse group-hover:opacity-40 transition-opacity"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-[180px] shadow-2xl">
                <img 
                    src={maPhoto}
                    alt="Laurie Arthur" 
                    className="w-full h-full object-cover relative z-10 transition-transform duration-700 hover:scale-105"
                />
            </div>
          </div>
        </div>

        {/* SECTION PROJETS */}
        <section className="mb-40">
          <div className="flex items-end justify-between mb-12 px-2">
            <div>
              <h3 className="text-3xl font-black tracking-tighter italic uppercase">Travaux Récents</h3>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mt-1">Live from GitHub</p>
            </div>
            <div className="flex gap-3 text-slate-500 items-center">
               <span className="text-[10px] font-black uppercase tracking-[0.2em]">Scroll pour voir</span>
               <ArrowRight size={16} className="animate-bounce-x text-blue-500" />
            </div>
          </div>

          <div className="flex overflow-x-auto pb-10 gap-6 snap-x custom-scrollbar px-2">
            {loading ? (
              <div className="w-full text-center py-20 text-slate-600 animate-pulse uppercase tracking-[0.3em] text-xs font-black">Synchronisation GitHub...</div>
            ) : (
              githubRepos.map((repo, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center group bg-white/5 border border-white/10 rounded-[45px] p-10 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-md relative overflow-hidden"
                >
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
                  
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                      <Code2 className="text-blue-400" size={28} />
                    </div>
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter group-hover:text-blue-400 transition-colors truncate">
                    {repo.name.replace(/-/g, ' ')}
                  </h4>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-10 h-12 line-clamp-2 italic font-medium">
                    {repo.description || "Développement innovant et architecture logicielle sur GitHub."}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="px-4 py-1.5 bg-blue-500/10 rounded-xl text-[10px] font-black text-blue-300 border border-blue-500/20 uppercase">
                      {repo.language || 'Code'}
                    </span>
                    {repo.stargazers_count > 0 && (
                      <div className="flex items-center gap-1.5 text-yellow-500 font-bold text-sm">
                        <Star size={14} fill="currentColor" /> {repo.stargazers_count}
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* PARCOURS & SKILLS */}
        <div className="grid md:grid-cols-2 gap-8 mb-40">
            <div className="bg-white/5 border border-white/10 rounded-[50px] p-12 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl"></div>
                <h3 className="text-2xl font-black mb-12 flex items-center gap-3 italic uppercase tracking-tighter">
                    <GraduationCap className="text-blue-500" size={32} /> Formation
                </h3>
                <div className="space-y-12">
                    {formations.map((f, i) => (
                        <div key={i} className="relative pl-10 group border-l border-white/10">
                            <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[4.5px] top-2 group-hover:scale-[2.5] transition-transform shadow-[0_0_10px_#3b82f6]"></div>
                            <span className="text-blue-400 font-black text-[10px] tracking-[0.2em]">{f.year}</span>
                            <h4 className="text-xl font-bold text-white mt-1 uppercase tracking-tight">{f.title}</h4>
                            <p className="text-slate-500 text-sm font-bold uppercase mt-1">{f.school}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-8">
                <div className="bg-white/5 border border-white/10 rounded-[50px] p-12 backdrop-blur-md">
                    <h3 className="text-2xl font-black mb-10 flex items-center gap-4 italic text-blue-400 uppercase tracking-tighter">
                        <Cpu size={32} /> Stack Technique
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                        {skills.map((skill, i) => (
                            <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-black hover:bg-white hover:text-black transition-all cursor-default uppercase tracking-widest">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="bg-blue-600 rounded-[50px] p-12 shadow-2xl shadow-blue-600/20 relative overflow-hidden group">
                    <h3 className="text-white font-black text-2xl mb-8 italic uppercase tracking-tighter relative z-10">Qualités</h3>
                    <div className="grid grid-cols-2 gap-6 relative z-10">
                        {["Originalité", "Attentive", "Souci du détail", "Équipe"].map((s, i) => (
                            <div key={i} className="flex items-center gap-3 text-[11px] font-black text-blue-50 uppercase tracking-tighter">
                                <CheckCircle2 size={16} /> {s}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-[60px] p-12 md:p-24 mb-20 text-center backdrop-blur-3xl group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            
            <h4 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none">Parlons de votre <span className="text-blue-500 italic">projet</span></h4>
            <p className="text-slate-400 mb-16 max-w-lg mx-auto font-bold uppercase tracking-tight text-sm">Disponible pour de nouvelles opportunités en 202.</p>
            
            <div className="flex flex-wrap justify-center gap-8 relative z-10">
                <a href="mailto:lauriarth@gmail.com" className="flex items-center gap-4 px-10 py-5 bg-white text-black rounded-[2rem] font-black text-xs hover:scale-110 transition-transform shadow-xl">
                    <Mail size={18} /> EMAIL
                </a>
                <a href="https://github.com/laurie-arth03" target="_blank" rel="noreferrer" className="flex items-center gap-4 px-10 py-5 bg-white/5 border border-white/10 rounded-[2rem] font-black text-xs hover:bg-white/10 transition-all">
                    <GithubIcon size={18} /> PROFILE GITHUB
                </a>
            </div>
        </div>
      </div>

      <footer className="py-16 border-t border-white/5 opacity-40 text-center">
        <div className="text-[10px] font-black uppercase tracking-[0.8em]">
            © 2026 LAURIE ARTHUR • FRONTEND DEVELOPER
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,900&family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');
        
        body { font-family: 'Plus Jakarta Sans', sans-serif; scroll-behavior: smooth; }
        .font-serif { font-family: 'Playfair Display', serif; }

        .custom-scrollbar::-webkit-scrollbar { height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; margin: 0 40px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #3b82f6; }

        @keyframes sparkle {
          0%, 100% { transform: scale(1); opacity: 0.3; filter: blur(0px); }
          50% { transform: scale(1.8); opacity: 1; filter: blur(0.5px) brightness(1.5); }
        }
        .animate-sparkle { animation: sparkle ease-in-out infinite; }

        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(8px); }
        }
        .animate-bounce-x { animation: bounce-x 1s infinite; }
      `}} />
    </div>
  );
};

export default PortfolioLaurie;