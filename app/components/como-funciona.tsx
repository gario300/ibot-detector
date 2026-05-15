import { Crosshair, GitBranch, Radar, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: Crosshair,
    step: "1",
    title: "Semillas",
    description:
      "El operador define cuentas semilla sospechosas. El detector toma control desde ahí.",
  },
  {
    icon: GitBranch,
    step: "2",
    title: "Exploración",
    description:
      "Mapeamos following y followers hasta 3 niveles de profundidad. Recolectamos perfiles públicos y tweets para análisis.",
  },
  {
    icon: Radar,
    step: "3",
    title: "Detección",
    description:
      "Aplicamos 37 señales heurísticas + análisis LLM en 4 dimensiones: contenido IA, comportamiento, red y persona.",
  },
];

export default function ComoFunciona() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Cómo Funciona
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
          Usamos inteligencia de bots para detectar otros bots.
          <span className="block text-brand font-semibold mt-1">
            Cazador de cazadores.
          </span>
        </p>

        <div className="relative grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-3 z-10">
                    <ArrowDown className="w-5 h-5 text-brand/50 -rotate-90" />
                  </div>
                )}
                <div className="rounded-xl border border-card-border bg-card p-8 text-center hover:border-brand/20 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                  <div className="text-brand font-mono text-xs tracking-wider mb-2 uppercase">
                    Paso {s.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
