import { Building2, TrendingUp, Users, Award } from 'lucide-react';

const stats = [
  { icon: Users, value: '40+', label: 'Clients satisfaits' },
  { icon: Award, value: '90+', label: 'Projets réalisés' },
  { icon: TrendingUp, value: '95%', label: 'Taux de satisfaction' },
  { icon: Building2, value: '17+', label: "Années d'expérience" }
];

const clients = [
  'AWS', 'Supabase', 'Stripe', 'Google Reserve', 'Open AI', 'CLaude AI'
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Nous accompagnons des entreprises de toutes tailles dans leur transformation digitale
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700">
          <p className="text-center text-slate-400 mb-8 text-sm uppercase tracking-wider">
            Nos partenaires
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
              >
                <span className="text-slate-300 font-semibold text-lg">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
