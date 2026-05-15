import { AlertTriangle, Users, EyeOff } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Daño reputacional",
    description:
      "Una red de bots puede destruir la credibilidad de una figura pública en días. Nadie te dice que esa ola de críticas no son 5000 personas — son 5 cuentas con 1000 bots cada una.",
  },
  {
    icon: Users,
    title: "Decisiones sobre datos falsos",
    description:
      "Gobiernos, campañas e instituciones toman decisiones estratégicas basadas en métricas de opinión pública distorsionadas por bots. El ruido artificial se convierte en input real.",
  },
  {
    icon: EyeOff,
    title: "Ciego a la coordinación",
    description:
      "Las herramientas tradicionales analizan cuentas individuales. No ven que 17 cuentas con score bajo, mismas señales y mismo horario, son una sola red coordinada.",
  },
];

export default function Problema() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          El Problema
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
          Los bots no son solo spam. Son una máquina de distorsión que afecta
          reputaciones, campañas y democracias.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-xl border border-card-border bg-card p-8 hover:border-brand/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
