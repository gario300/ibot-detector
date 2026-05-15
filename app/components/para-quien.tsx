import { Users, Building2, Newspaper, Megaphone, Search } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Gobiernos e instituciones públicas",
    desc: "Necesitan saber si la presión ciudadana es real o fabricada.",
  },
  {
    icon: Megaphone,
    title: "Candidatos y campañas políticas",
    desc: "Invierten millones en responder a la opinión pública — o a lo que parece serla.",
  },
  {
    icon: Users,
    title: "Figuras públicas e influencers",
    desc: "Su reputación depende de lo que pasa en Twitter/X. Sin detección, actúan a ciegas.",
  },
  {
    icon: Newspaper,
    title: "Medios y periodistas de investigación",
    desc: "Los bots fabrican tendencias y noticias falsas. Distinguir lo real de lo artificial es parte del oficio.",
  },
  {
    icon: Search,
    title: "Marcas con exposición mediática",
    desc: "Un boicot orquestado por bots puede costar millones en reputación y ventas.",
  },
];

export default function ParaQuien() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Para Quién
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
          Si tu reputación, tu campaña o tu institución depende de lo que pasa
          en Twitter/X — necesitás saber qué es real y qué es artificial.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {audiences.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="rounded-xl border border-card-border bg-card p-6 hover:border-brand/20 transition-colors duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                  <Icon className="w-4.5 h-4.5 text-brand" />
                </div>
                <h3 className="text-sm font-semibold mb-2">{a.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{a.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
