import { ExternalLink, Globe, Smartphone, ShoppingCart } from 'lucide-react';

const projects = [
  {
    title: 'Plateforme E-commerce Luxe',
    category: 'E-commerce',
    description: 'Boutique en ligne haut de gamme avec expérience client personnalisée',
    icon: ShoppingCart,
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'Stripe', 'AWS']
  },
  {
    title: 'Application Mobile Finance',
    category: 'Mobile',
    description: 'Application de gestion financière avec tableaux de bord interactifs',
    icon: Smartphone,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'TypeScript', 'GraphQL']
  },
  {
    title: 'Portail Web Entreprise',
    category: 'Web',
    description: "Plateforme web complète pour la gestion d'équipes distribuées",
    icon: Globe,
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'Python', 'PostgreSQL']
  },
  {
    title: 'Marketplace B2B',
    category: 'E-commerce',
    description: 'Place de marché connectant fournisseurs et revendeurs',
    icon: ShoppingCart,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Supabase', 'Vercel']
  },
  {
    title: 'App Santé & Bien-être',
    category: 'Mobile',
    description: 'Application de suivi santé avec coaching personnalisé',
    icon: Smartphone,
    image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Flutter', 'Firebase', 'ML Kit']
  },
  {
    title: 'Site Corporate',
    category: 'Web',
    description: 'Site vitrine moderne avec animations et contenus dynamiques',
    icon: Globe,
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Tailwind', 'Framer Motion']
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Découvrez quelques-uns des projets qui ont transformé le business de nos clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm font-semibold text-blue-600 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link">
                    Voir le projet
                    <ExternalLink className="ml-2 group-hover/link:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
