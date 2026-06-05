import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import maPhoto from '../assets/photo.jpg';
import { 
  Mail, Phone, ExternalLink, 
  Code2, Layout, 
  BookOpen, GraduationCap, 
  CheckCircle2, Globe, Cpu, Star, ArrowRight, ChevronDown, X
} from 'lucide-react';

// Identifiants EmailJS
const SERVICE_ID = "service_kx30txr";
const TEMPLATE_ID = "template_t9yib2j";
const PUBLIC_KEY = "r-OJNV5N1A_g2DQRx";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailStatus, setEmailStatus] = useState(""); 
  
  const dropdownRef = useRef(null);

  const handleSendEmail = (e) => {
    e.preventDefault();
    setEmailStatus("ENVOI EN COURS...");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setEmailStatus("MESSAGE ENVOYÉ ! ✨");
        setTimeout(() => {
          setIsModalOpen(false);
          setEmailStatus("");
        }, 2500);
      }, (error) => {
        setEmailStatus("ERREUR D'ENVOI...");
      });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/laurie-arth03/repos?sort=updated&per_page=8');
        const data = await response.json();
        setGithubRepos(data);
        setLoading(false);
      } catch (error) {
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

  const qualities = ["Originalité", "Attentive", "Souci du détail", "Équipe"];
  const sparkleColors = ["#ffffff", "#ffffff", "#3b82f6", "#e0f2fe"];

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-blue-300/30 overflow-x-hidden relative">
      
      {/* BACKGROUND VOIE LACTÉE */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-cyan-500/10 blur-[150px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-[#020617]"></div>
      </div>

      {/* MODAL CONTACT - Améliorée pour mobile */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 backdrop-blur-xl bg-slate-900/60 overflow-y-auto">
            <div className="bg-slate-800 border border-white/10 p-6 md:p-12 rounded-[30px] md:rounded-[40px] w-full max-w-lg relative shadow-2xl animate-in fade-in zoom-in duration-300 my-auto">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-white transition-colors">
                    <X size={24} md:size={28} />
                </button>
                <h3 className="text-2xl md:text-3xl font-black mb-2 italic uppercase tracking-tighter">Contact</h3>
                <p className="text-slate-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-6 md:mb-8">Envoyer un message à Laurie</p>
                <form onSubmit={handleSendEmail} className="space-y-4">
                    <input type="text" name="from_name" required placeholder="Votre Nom" className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all text-sm" />
                    <input type="email" name="reply_to" required placeholder="Votre Email" className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all text-sm" />
                    <textarea name="message" required rows="4" placeholder="Votre message..." className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all text-sm resize-none"></textarea>
                    <button type="submit" className="w-full py-4 md:py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all uppercase tracking-widest text-xs">
                        {emailStatus || "ENVOYER"}
                    </button>
                </form>
            </div>
        </div>
      )}

      {/* SYSTÈME D'ÉTOILES */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(50)].map((_, i) => { // Réduit à 50 pour performance mobile
          const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
          const size = Math.random() * 2 + 0.5;
          return (
            <div key={i} className="absolute rounded-full animate-sparkle"
              style={{
                width: size + 'px', height: size + 'px', top: Math.random() * 100 + '%', left: Math.random() * 100 + '%',
                backgroundColor: 'white',
                boxShadow: `0 0 ${size * 3}px 1px #fff, 0 0 ${size * 6}px ${color}`,
                animationDelay: Math.random() * 8 + 's', animationDuration: Math.random() * 4 + 3 + 's', opacity: Math.random() * 0.8 + 0.2
              }}
            ></div>
          );
        })}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-8">
        
        {/* NAV - Responsive */}
        <nav className="flex justify-between items-center mb-10 md:mb-16 sticky top-4 z-50 backdrop-blur-md bg-white/5 border border-white/10 p-3 md:p-4 rounded-2xl md:rounded-3xl">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="font-bold text-black text-[10px] md:text-xs">LA</span>
            </div>
            <span className="font-bold tracking-[0.2em] text-[10px] uppercase hidden xs:block">Laurie Arthur</span>
          </div>
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 px-4 md:px-5 py-2 bg-white text-black hover:bg-blue-600 hover:text-white rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black transition-all">
                ME CONTACTER <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 md:w-48 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl z-[100] animate-in fade-in zoom-in-95 duration-200">
                    <button onClick={() => { setIsModalOpen(true); setIsDropdownOpen(false); }} className="w-full flex items-center gap-3 px-4 py-3 text-[10px] md:text-[11px] font-bold hover:bg-white hover:text-black transition-colors">
                        <Mail size={16} /> EMAIL
                    </button>
                    <a href="https://github.com/laurie-arth03" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-3 text-[10px] md:text-[11px] font-bold hover:bg-white hover:text-black transition-colors border-t border-white/5">
                        <GithubIcon size={16} /> GITHUB
                    </a>
                </div>
            )}
          </div>
        </nav>

        {/* HERO - Adapté */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 mb-20 md:mb-40 pt-4 md:pt-10">
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-400 uppercase tracking-tighter">RABENARIVO</h3>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-blue-400 mb-6 md:mb-8 italic font-serif">Tsiory Laurie Arthur</h3>
            <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed mb-8 md:mb-10 font-medium md:relative md:bottom-6">
                Développeuse Fullstack spécialisée en <span className="text-white border-b border-blue-500/50">React & Django</span>. <br />
                Bienvenue dans mon espace dev !
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-5">
                <div className="px-4 py-3 md:px-6 md:py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl text-center min-w-[100px]">
                    <div className="text-xl md:text-2xl font-black italic">Technicienne</div>
                    <div className="text-[8px] md:text-[9px] text-blue-400 font-black uppercase tracking-widest">Niveau</div>
                </div>
                <div className="px-4 py-3 md:px-6 md:py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl text-center min-w-[100px]">
                    <div className="text-xl md:text-2xl font-black italic">{githubRepos.length || "0"}</div>
                    <div className="text-[8px] md:text-[9px] text-blue-400 font-black uppercase tracking-widest">Projets Git</div>
                </div>
            </div>
          </div>
          <div className="relative group order-1 md:order-2">
            <div className="absolute inset-0 bg-blue-500 blur-[60px] md:blur-[100px] opacity-20 animate-pulse group-hover:opacity-40 transition-opacity"></div>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 overflow-hidden rounded-full md:rounded-[180px] shadow-2xl border-2 border-white/10">
                <img src={maPhoto} alt="Laurie Arthur" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </div>

        {/* SECTION PROJETS GITHUB */}
        <section className="mb-20 md:mb-40">
          <div className="flex items-end justify-between mb-8 md:mb-12 px-2">
            <div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tighter italic uppercase">Travaux Récents</h3>
              <p className="text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">Live from GitHub</p>
            </div>
            <ArrowRight size={24} className="animate-bounce-x text-blue-500 hidden xs:block" />
          </div>
          <div className="flex overflow-x-auto pb-6 gap-4 md:gap-6 snap-x custom-scrollbar px-2">
            {loading ? (
              <div className="w-full text-center py-20 text-slate-600 animate-pulse uppercase tracking-[0.3em] text-[10px] font-black">Sync GitHub...</div>
            ) : (
              githubRepos.map((repo, i) => (
                <div key={i} className="flex-shrink-0 w-[280px] md:w-[400px] snap-center group bg-white/5 border border-white/10 rounded-[30px] md:rounded-[45px] p-6 md:p-10 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-md relative overflow-hidden">
                  <div className="flex justify-between items-start mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20"><Code2 className="text-blue-400" size={24} md:size={28} /></div>
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="p-2 md:p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all"><ExternalLink size={16} md:size={18} /></a>
                  </div>
                  <h4 className="text-xl md:text-2xl font-black mb-3 md:mb-4 uppercase truncate">{repo.name.replace(/-/g, ' ')}</h4>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-10 h-12 line-clamp-2 italic font-medium">{repo.description || "Aucune description disponible."}</p>
                  <div className="pt-4 md:pt-6 border-t border-white/10">
                    <span className="px-3 py-1 md:px-4 md:py-1.5 bg-blue-500/10 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black text-blue-300 uppercase">{repo.language || 'Code'}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* SECTION FORMATION / SKILLS / QUALITÉS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-40">
            {/* BLOC GAUCHE : FORMATION */}
            <div className="bg-white/5 border border-white/10 rounded-[35px] md:rounded-[50px] p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
                <h3 className="text-xl md:text-2xl font-black mb-8 md:mb-12 flex items-center gap-3 italic uppercase tracking-tighter">
                  <GraduationCap className="text-blue-500" size={28} md:size={32} /> FORMATION
                </h3>
                <div className="space-y-10 md:space-y-16">
                    {formations.map((f, i) => (
                        <div key={i} className="relative pl-8 md:pl-10 border-l border-white/10 flex flex-col items-start">
                            <div className="absolute w-2 h-2 md:w-2.5 md:h-2.5 bg-blue-500 rounded-full -left-[4.5px] md:-left-[5.5px] top-1.5 transition-transform shadow-[0_0_10px_#3b82f6]"></div>
                            <span className="text-blue-500 font-black text-[10px] md:text-xs tracking-widest">{f.year}</span>
                            <h4 className="text-lg md:text-2xl font-black text-white mt-1 uppercase leading-tight">{f.title}</h4>
                            <p className="text-slate-500 text-[9px] md:text-[10px] font-black uppercase mt-1 tracking-widest">{f.school}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* COLONNE DROITE : STACK + QUALITÉS */}
            <div className="flex flex-col gap-6 md:gap-8">
                {/* BLOC STACK TECHNIQUE */}
                <div className="bg-white/5 border border-white/10 rounded-[35px] md:rounded-[50px] p-8 md:p-12 backdrop-blur-md">
                    <h3 className="text-xl md:text-2xl font-black mb-8 md:mb-10 flex items-center gap-3 italic text-blue-400 uppercase tracking-tighter">
                      <Cpu size={28} md:size={32} /> STACK TECHNIQUE
                    </h3>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {skills.map((skill, i) => (
                            <span key={i} className="px-4 py-2 md:px-6 md:py-3 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl text-[9px] md:text-[11px] font-black hover:bg-white hover:text-black transition-all uppercase tracking-widest cursor-default">
                              {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* BLOC QUALITÉS */}
                <div className="bg-blue-600 rounded-[35px] md:rounded-[50px] p-8 md:p-12 flex flex-col items-center justify-center shadow-2xl shadow-blue-500/20">
                    <h3 className="text-2xl md:text-3xl font-black mb-8 md:mb-12 italic uppercase tracking-tighter text-white">QUALITÉS</h3>
                    <div className="grid grid-cols-2 gap-x-6 md:gap-x-12 gap-y-8 md:gap-y-10 w-full max-w-sm mx-auto">
                        {qualities.map((q, i) => (
                            <div key={i} className="flex items-center gap-2 md:gap-3">
                                <CheckCircle2 size={16} className="text-white shrink-0" />
                                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white">{q}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION CONTACT CTA */}
        <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-[40px] md:rounded-[60px] p-10 md:p-24 mb-10 md:mb-20 text-center backdrop-blur-3xl">
            <h4 className="text-3xl sm:text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-tight md:leading-none">
              Parlons de votre <br className="hidden sm:block"/><span className="text-blue-500 italic">projet</span>
            </h4>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-8 relative z-10">
                <button onClick={() => setIsModalOpen(true)} className="flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-white text-black rounded-2xl md:rounded-[2rem] font-black text-[10px] md:text-xs hover:scale-105 transition-transform shadow-xl">
                    <Mail size={18} /> EMAIL
                </button>
                <a href="https://github.com/laurie-arth03" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-white/5 border border-white/10 rounded-2xl md:rounded-[2rem] font-black text-[10px] md:text-xs hover:bg-white/10 transition-all">
                    <GithubIcon size={18} /> GITHUB
                </a>
            </div>
        </div>
        
        <p className="text-slate-400 text-sm md:text-xl max-w-2xl mb-10 mx-auto text-center px-4">
          Transformons vos idées en produits numériques d'exception !
        </p>

      </div>


      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,900&family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; scroll-behavior: smooth; background: #020617; overflow-x: hidden; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .custom-scrollbar::-webkit-scrollbar { height: 4px; }
        @media (min-width: 768px) { .custom-scrollbar::-webkit-scrollbar { height: 6px; } }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 10px; }
        @keyframes sparkle { 0%, 100% { transform: scale(1); opacity: 0.3; } 50% { transform: scale(1.5); opacity: 1; } }
        .animate-sparkle { animation: sparkle ease-in-out infinite; }
        @keyframes bounce-x { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(5px); } }
        .animate-bounce-x { animation: bounce-x 1s infinite; }
      `}} />
    </div>
  );
};

export default PortfolioLaurie;