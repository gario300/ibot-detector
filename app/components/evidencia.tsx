import { CheckCircle, Search, Shield } from "lucide-react";

const signals = [
  "Bio vacía o casi vacía",
  "Actividad nocturna (2-5 AM)",
  "Sentimiento extremo consistente",
  "Monotema sin variación real",
  "Comportamiento robótico en interacciones",
];

export default function Evidencia() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-xl border border-card-border bg-card p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-brand" />
            <span className="text-brand font-mono text-sm tracking-wider uppercase">
              Capacidad Demostrada
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            El score individual no decide —{" "}
            <span className="text-brand">el conjunto revela el patrón</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Desplegamos el sistema sobre un escenario controlado. El detector
            rastreó desde cuentas semilla, mapeó conexiones en múltiples niveles,
            y aplicó 37 señales heurísticas combinadas con análisis LLM en 4
            dimensiones. El resultado: patrones de coordinación invisibles al
            análisis individual.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-lg border border-card-border bg-black/30 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Search className="w-4 h-4 text-brand" />
                <span className="text-sm font-mono text-brand tracking-wider uppercase">
                  Señales Detectadas
                </span>
              </div>
              <ul className="space-y-2.5">
                {signals.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2.5 text-sm text-gray-300"
                  >
                    <CheckCircle className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-card-border bg-black/30 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-4 h-4 text-brand" />
                <span className="text-sm font-mono text-brand tracking-wider uppercase">
                  Dimensiones de Análisis (LLM)
                </span>
              </div>
              <ul className="space-y-2.5">
                {[
                  ["Contenido IA", "Detección de texto generado por IA"],
                  ["Comportamiento", "Patrones de interacción robóticos"],
                  ["Red", "Aislamiento o coordinación con otros bots"],
                  ["Persona", "Consistencia bio vs. tweets reales"],
                ].map(([dim, desc]) => (
                  <li key={dim} className="text-sm text-gray-300">
                    <span className="text-brand font-semibold">{dim}</span>
                    {" — "}
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-card-border pt-6 text-center">
            <p className="text-muted text-sm italic">
              Metodología validada en entorno controlado. Precisión confirmada.
              Datos públicos de perfil y tweets únicamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
