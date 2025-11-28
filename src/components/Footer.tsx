import { Linkedin, Twitter, Github, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              DigiStudio
            </div>
            <p className="text-slate-400 leading-relaxed">
              Votre partenaire digital pour créer des expériences web et mobile exceptionnelles.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Développement Web</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Applications Mobile</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">E-commerce</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Réalisations</a></li>
              <li><a href="#clients" className="hover:text-blue-400 transition-colors">Clients</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>&copy; 2024 DigiStudio. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-blue-400 transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
