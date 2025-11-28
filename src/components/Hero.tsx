import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>

      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            DigiStudio
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#clients" className="hover:text-blue-400 transition-colors">Clients</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors">Réalisations</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-6 space-y-4 pb-6">
            <a href="#services" className="block hover:text-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#clients" className="block hover:text-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>Clients</a>
            <a href="#portfolio" className="block hover:text-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>Réalisations</a>
            <a href="#contact" className="block hover:text-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transformez vos idées en{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              expériences digitales
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
            Agence spécialisée en développement web, mobile et solutions e-commerce sur mesure
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 text-center shadow-lg shadow-blue-500/50"
            >
              Démarrer un projet
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 text-center"
            >
              Voir nos réalisations
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
