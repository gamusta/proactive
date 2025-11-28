import { Globe, Smartphone, ShoppingCart } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Développement Web',
    description: 'Sites web modernes et performants, applications web progressives et interfaces utilisateur intuitives.',
    features: ['React / NextJs', 'Node.js / Symfony', 'Design responsive', 'SEO optimisé']
  },
  {
    icon: Smartphone,
    title: 'Applications Mobile',
    description: 'Applications natives et cross-platform pour iOS et Android avec une expérience utilisateur exceptionnelle.',
    features: ['React Native', 'Flutter', 'iOS & Android', 'UI/UX Design']
  },
  {
    icon: ShoppingCart,
    title: 'Solutions E-commerce',
    description: 'Boutiques en ligne complètes avec gestion des paiements, inventaire et expérience client optimisée.',
    features: ['Shopify / WooCommerce', 'Paiements sécurisés', 'Gestion catalogue', 'Analytics avancés']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Des solutions digitales complètes pour faire grandir votre business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
