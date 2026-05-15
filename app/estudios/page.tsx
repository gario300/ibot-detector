import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Cog,
  BarChart3,
  Brain,
  Network,
  Fingerprint,
  BookOpen,
  List,
  User,
  Clock,
  FileCode,
  Share2,
  ExternalLink,
} from "lucide-react";
import EstudiosAccordion from "./estudios-accordion";
import {
  stats,
  patterns,
  profileSignals,
  temporalSignals,
  contentSignals,
  networkSignals,
  scoreDistribution,
  llmMonotopicAccounts,
  contentExampleTweets,
  behaviorExampleReplies,
  personaFrequencies,
  hubs,
  aggravationFactors,
  sources,
  top30Accounts,
} from "./estudios-data";

function SigBar({ label, value, max }: { label: string; value: number | string; max: number }) {
  const pct = typeof value === "number" ? Math.round((value / max) * 100) : 100;
  return (
    <div className="mb-2.5">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-gray-300">{label}</span>
        <span className="text-muted font-mono">{value}</span>
      </div>
      <div className="h-1.5 bg-card-border rounded-full overflow-hidden">
        <div
          className="h-full bg-brand/40 rounded-full"
          style={{ width: `${Math.min(pct, 100)}%` }}
        />
      </div>
    </div>
  );
}

function Tag({ children, color }: { children: string; color?: "red" | "yellow" | "green" }) {
  const colors = {
    red: "bg-red-500/10 text-red-400 border-red-500/20",
    yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    green: "bg-brand/10 text-brand border-brand/20",
  };
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-[11px] font-mono border ${colors[color ?? "green"]} mr-1.5 mb-1.5`}
    >
      {children}
    </span>
  );
}

export default function EstudiosPage() {
  const maxProfile = Math.max(...profileSignals.map((s) => s.count));
  const maxTemporal = Math.max(...temporalSignals.map((s) => s.count));

  const sections = [
    {
      id: 1,
      title: "Resumen Ejecutivo",
      icon: <FileText className="w-4 h-4 text-brand" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-card-border bg-card p-4 text-center"
              >
                <div className="text-xl sm:text-2xl font-bold text-brand mb-0.5">
                  {s.value}
                </div>
                <div className="text-muted text-[11px] leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-brand/20 bg-brand/5 p-4 text-sm text-gray-300 leading-relaxed">
            <strong className="text-white">Hallazgo principal:</strong> Se documentaron 562
            cuentas que presentan señales de comportamiento automatizado y coordinado. El 100%
            de las cuentas analizadas a profundidad (42) muestran simultáneamente:{" "}
            <strong>monotematismo, estructura repetitiva, ausencia de experiencia personal y
            planitud emocional</strong>. La red se organiza en 25 hubs conectados entre sí. Las
            semillas nuevas confirmaron los mismos patrones a 2 grados de separación
            (hop=2).
          </div>
          <p className="text-muted text-sm leading-relaxed">
            Este reporte documenta observaciones cuantitativas (perfil, temporal, red) y
            cualitativas (análisis de contenido y comportamiento mediante LLM). No clasifica
            cuentas como bots o humanas — describe patrones de comportamiento automatizado y
            coordinado que se repiten de forma consistente.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Metodología",
      icon: <Cog className="w-4 h-4 text-brand" />,
      content: (
        <div className="space-y-5">
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Pipeline de análisis</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { step: "1", label: "Scraping", desc: "Playwright + Stealth" },
                { step: "2", label: "Heurísticas", desc: "37 señales. Filtro rápido" },
                { step: "3", label: "LLM Groq", desc: "4 prompts de análisis" },
                { step: "4", label: "Scoring", desc: "Ponderado + decay por hop" },
              ].map((s) => (
                <div
                  key={s.step}
                  className="rounded-lg border border-card-border bg-card p-4 text-center"
                >
                  <div className="w-8 h-8 rounded-full bg-brand/20 text-brand font-mono text-xs font-bold flex items-center justify-center mx-auto mb-2">
                    {s.step}
                  </div>
                  <div className="text-sm font-semibold text-white mb-0.5">{s.label}</div>
                  <div className="text-muted text-xs">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              Distribución de puntajes
            </h4>
            <div className="space-y-2">
              {scoreDistribution.map((d) => (
                <SigBar
                  key={d.range}
                  label={d.range}
                  value={d.count}
                  max={scoreDistribution[0].count}
                />
              ))}
            </div>
            <p className="text-muted text-xs mt-2">
              El 74% puntúa bajo (descartados como humanos). Las 42 cuentas con score &ge;30
              recibieron análisis LLM completo.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Señales de Comportamiento Automatizado",
      icon: <BarChart3 className="w-4 h-4 text-brand" />,
      content: (
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-lg border border-card-border bg-card p-4">
            <div className="flex items-center gap-2 mb-3">
              <User className="w-3.5 h-3.5 text-brand" />
              <span className="text-xs font-mono text-brand tracking-wider uppercase">
                Perfil
              </span>
            </div>
            {profileSignals.map((s) => (
              <SigBar key={s.name} label={s.name} value={s.count} max={maxProfile} />
            ))}
          </div>
          <div className="rounded-lg border border-card-border bg-card p-4">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-3.5 h-3.5 text-brand" />
              <span className="text-xs font-mono text-brand tracking-wider uppercase">
                Temporal
              </span>
            </div>
            {temporalSignals.map((s) => (
              <SigBar key={s.name} label={s.name} value={s.count} max={maxTemporal} />
            ))}
          </div>
          <div className="rounded-lg border border-card-border bg-card p-4">
            <div className="flex items-center gap-2 mb-3">
              <FileCode className="w-3.5 h-3.5 text-brand" />
              <span className="text-xs font-mono text-brand tracking-wider uppercase">
                Contenido
              </span>
            </div>
            {contentSignals.map((s) => (
              <SigBar key={s.name} label={s.name} value={s.note} max={42} />
            ))}
          </div>
          <div className="rounded-lg border border-card-border bg-card p-4">
            <div className="flex items-center gap-2 mb-3">
              <Share2 className="w-3.5 h-3.5 text-brand" />
              <span className="text-xs font-mono text-brand tracking-wider uppercase">
                Red
              </span>
            </div>
            {networkSignals.map((s) => (
              <SigBar key={s.name} label={s.name} value={s.note} max={42} />
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Análisis LLM",
      icon: <Brain className="w-4 h-4 text-brand" />,
      content: (
        <div className="space-y-6">
          {/* 4.1 Monotematismo */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              4.1 Monotematismo — 100% de las cuentas
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-muted text-[11px] uppercase tracking-wider border-b border-card-border">
                    <th className="text-left py-2 pr-2 font-medium">Cuenta</th>
                    <th className="text-right py-2 px-2 font-medium">Score</th>
                    <th className="text-left py-2 pl-2 font-medium">Tema dominante</th>
                    <th className="text-right py-2 pl-2 font-medium">Fijación</th>
                  </tr>
                </thead>
                <tbody>
                  {llmMonotopicAccounts.map((a) => (
                    <tr
                      key={a.username}
                      className="border-b border-card-border/40 last:border-0"
                    >
                      <td className="py-2 pr-2 text-gray-300">{a.username}</td>
                      <td className="py-2 px-2 text-right text-brand font-mono font-semibold">
                        {a.score}
                      </td>
                      <td className="py-2 pl-2 text-muted text-xs">{a.topic}</td>
                      <td className="py-2 pl-2 text-right text-muted text-xs">
                        {a.fixation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 4.2 Contenido */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              4.2 Patrones de contenido automatizado
            </h4>
            <div className="flex flex-wrap mb-4">
              <Tag color="red">formalOveruse</Tag>
              <Tag color="red">repetitiveStructure</Tag>
              <Tag color="red">noPersonalExperience</Tag>
              <Tag color="yellow">amplificationRatio &gt;80%</Tag>
            </div>
            <div className="space-y-2">
              {contentExampleTweets.map((e) => (
                <div
                  key={e.username}
                  className="rounded-lg border border-card-border bg-black/50 p-3"
                >
                  <div className="text-xs text-brand font-mono mb-1">{e.username}</div>
                  <div className="text-xs text-gray-400 font-mono leading-relaxed mb-1">
                    {e.text}
                  </div>
                  <div className="text-muted text-[11px]">→ {e.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 4.3 Comportamiento */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              4.3 Patrones de comportamiento automatizado
            </h4>
            <div className="flex flex-wrap mb-4">
              <Tag color="red">circularArguments</Tag>
              <Tag color="red">emotionalFlatness</Tag>
              <Tag color="red">noOpinionVariation</Tag>
              <Tag color="yellow">alwaysReactive</Tag>
            </div>
            <div className="space-y-2">
              {behaviorExampleReplies.map((e) => (
                <div
                  key={e.username}
                  className="rounded-lg border border-card-border bg-black/50 p-3"
                >
                  <div className="text-xs text-brand font-mono mb-1">{e.username}</div>
                  <div className="text-xs text-gray-400 leading-relaxed">{e.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 4.4 Escritura */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              4.4 Patrones de escritura automatizada
            </h4>
            <table className="w-full text-sm max-w-md">
              <thead>
                <tr className="text-muted text-[11px] uppercase tracking-wider border-b border-card-border">
                  <th className="text-left py-2 font-medium">Patrón detectado</th>
                  <th className="text-right py-2 font-medium">Frecuencia</th>
                </tr>
              </thead>
              <tbody>
                {personaFrequencies.map((p) => (
                  <tr
                    key={p.signal}
                    className="border-b border-card-border/40 last:border-0"
                  >
                    <td className="py-2 text-gray-300">{p.signal}</td>
                    <td className="py-2 text-right text-brand font-mono font-semibold">
                      {p.freq}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Análisis de Red",
      icon: <Network className="w-4 h-4 text-brand" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              Hubs — cuentas semilla
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {hubs.map((h) => (
                <div
                  key={h.name}
                  className="flex items-center justify-between rounded px-3 py-2 bg-card border border-card-border"
                >
                  <span className="text-xs text-gray-300">
                    {h.name}
                    {h.isNew && (
                      <span className="ml-1.5 inline-block px-1.5 py-0.5 rounded text-[10px] bg-brand/20 text-brand font-mono">
                        nueva
                      </span>
                    )}
                  </span>
                  <span className="text-muted text-xs">
                    → {h.candidates}
                    {h.maxScore && (
                      <span className="text-brand/60 ml-1">(máx {h.maxScore})</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-brand/20 bg-brand/5 p-4 text-sm text-gray-300 leading-relaxed">
            Cuanto más activo es el hub, mayores son los scores máximos de sus candidatos. Las
            2 seeds nuevas ya produjeron hallazgos con score alto a hop=2, confirmando que la
            propagación profunda descubre más cuentas con los mismos patrones.
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">
              Aislamiento de red
            </h4>
            <ul className="space-y-1.5 text-sm text-muted">
              <li>• <strong className="text-gray-300">18/42</strong> tienen 0% de conexiones mutuas (nadie les sigue de vuelta)</li>
              <li>• <strong className="text-gray-300">19/42</strong> muestran amplificación mutua entre pares del mismo cluster</li>
              <li>• El contenido rara vez recibe interacción humana (likes bajos, respuestas cero)</li>
              <li>• Patrón de isla: siguen a muchos, pero nadie les sigue</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Perfil de Comportamiento Automatizado Recurrente",
      icon: <Fingerprint className="w-4 h-4 text-brand" />,
      content: (
        <div className="space-y-4">
          <div className="rounded-lg border border-brand/20 bg-card p-5">
            <h4 className="text-sm font-semibold text-white mb-4">
              Las 7 señales que se repiten en las cuentas con mayor puntaje de automatización
            </h4>
            <div className="space-y-3">
              {patterns.map((p) => (
                <div key={p.num} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand/20 text-brand font-mono text-[11px] font-bold shrink-0 mt-0.5">
                    {p.num}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">{p.title}</div>
                    <div className="text-muted text-xs leading-relaxed mt-0.5">
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-muted text-sm leading-relaxed">
            Este perfil no clasifica cuentas como bots o humanas. Describe patrones de
            comportamiento automatizado que aparecen de forma consistente. Una persona que
            tuitea sobre accidentes no repite las mismas 5 palabras en todos sus tweets. Una
            persona no publica el 69% de sus tweets entre 2 y 5 AM sin excepción.
          </p>
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">
              Factores que refuerzan el patrón
            </h4>
            <ul className="space-y-1.5 text-sm text-muted">
              {aggravationFactors.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Fuentes y Referencias",
      icon: <BookOpen className="w-4 h-4 text-brand" />,
      content: (
        <div className="space-y-2">
          {sources.map((s, i) => (
            <div
              key={i}
              className="rounded-lg border border-card-border bg-card p-3 flex items-start gap-3"
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-brand/20 text-brand font-mono text-[11px] font-bold shrink-0 mt-0.5">
                {i + 1}
              </span>
              <div className="min-w-0">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand hover:underline"
                >
                  {s.title}
                </a>
                <div className="text-muted text-xs mt-0.5">
                  {s.author} — {s.journal}
                </div>
              </div>
              <ExternalLink className="w-3 h-3 text-muted shrink-0 mt-0.5" />
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 8,
      title: "Apéndice — Top 30 Cuentas",
      icon: <List className="w-4 h-4 text-brand" />,
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-muted text-[11px] uppercase tracking-wider border-b border-card-border">
                <th className="text-left py-2 pr-2 font-medium">#</th>
                <th className="text-left py-2 px-2 font-medium">Cuenta</th>
                <th className="text-right py-2 px-2 font-medium">Score</th>
                <th className="text-left py-2 px-2 font-medium">Hub</th>
                <th className="text-right py-2 px-2 font-medium">Hop</th>
                <th className="text-right py-2 pl-2 font-medium">Análisis</th>
              </tr>
            </thead>
            <tbody>
              {top30Accounts.map((a) => (
                <tr
                  key={a.pos}
                  className="border-b border-card-border/40 last:border-0"
                >
                  <td className="py-2 pr-2 text-muted text-xs">{a.pos}</td>
                  <td className="py-2 px-2 text-gray-300">{a.username}</td>
                  <td className={`py-2 px-2 text-right font-mono font-semibold ${Number(a.score) >= 30 ? "text-red-400" : "text-yellow-400"}`}>
                    {a.score}
                  </td>
                  <td className="py-2 px-2 text-muted text-xs max-w-[120px] truncate">
                    {a.seed}
                  </td>
                  <td className="py-2 px-2 text-right text-muted text-xs">{a.hop}</td>
                  <td className="py-2 pl-2 text-right text-muted text-xs">
                    {a.depth === "full" ? "LLM" : "quick"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-muted text-xs mt-3">
            Score = puntaje compuesto (heurísticas + LLM). Hop = distancia desde la semilla.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#EAEAEA]">
      {/* HEADER */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-muted text-sm hover:text-brand transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Volver al inicio
          </Link>

          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-brand font-mono text-xs tracking-wider uppercase mb-4 bg-brand/10 px-3 py-1 rounded-full">
              <FileText className="w-3.5 h-3.5" />
              Reporte Completo
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Comportamiento Automatizado{" "}
              <span className="text-brand">y Coordinado</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Análisis de 562 cuentas — señales, patrones y evidencia de coordinación
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-card-border bg-card p-4 text-center"
              >
                <div className="text-xl font-bold text-brand mb-0.5">{s.value}</div>
                <div className="text-muted text-[11px] leading-tight">{s.label}</div>
              </div>
            ))}
          </div>

          <EstudiosAccordion sections={sections} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 border-t border-card-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            ¿Querés analizar tu propia red?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Desplegamos el mismo sistema de detección sobre las cuentas que te interesan.
            Misma metodología, mismos 4 prompts de LLM, mismos patrones de coordinación.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-brand text-black font-semibold px-8 py-3 rounded-lg hover:bg-brand-dim transition-colors text-sm"
          >
            Solicitar análisis
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 border-t border-card-border">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <span>iBot Detector &mdash; {new Date().getFullYear()}</span>
          <span className="font-mono">
            <span className="text-brand">$</span> el conjunto revela el patrón
          </span>
        </div>
      </footer>
    </div>
  );
}
