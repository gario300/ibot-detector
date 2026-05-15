import {
  Database,
  Fingerprint,
  User,
  Clock,
  FileCode,
  Brain,
  Network,
  FileText,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "562", label: "Cuentas analizadas" },
  { value: "25", label: "Cuentas semilla" },
  { value: "42", label: "Análisis LLM completo" },
  { value: "43.3", label: "Puntaje máximo" },
];

const patterns = [
  {
    id: 1,
    title: "Bio vacía",
    desc: "Sin información personal, sin ubicación, sin intereses verificables.",
  },
  {
    id: 2,
    title: "Monotemáticas",
    desc: "El 100% de sus tweets hablan de un solo tema, sin variación.",
  },
  {
    id: 3,
    title: "Estructura repetitiva",
    desc: "Misma longitud, mismas palabras de apertura, mismo formato. Como una plantilla.",
  },
  {
    id: 4,
    title: "Actividad nocturna",
    desc: "Más del 35% de su actividad ocurre entre las 2 y las 5 de la madrugada.",
  },
  {
    id: 5,
    title: "Publicación en ráfagas",
    desc: "Varios tweets en minutos, luego silencio por horas o días. Sin ritmo natural.",
  },
  {
    id: 6,
    title: "Sin interacción humana",
    desc: "Cero respuestas, 0% de conexiones mutuas. Cuentas aisladas que hablan solas.",
  },
  {
    id: 7,
    title: "Sin errores ortográficos",
    desc: "Cero faltas en todo el timeline. Una persona siempre se equivoca alguna vez.",
  },
];

const profileSignals = [
  { name: "Bio vacía o casi vacía", count: 91 },
  { name: "Username con dígitos", count: 48 },
  { name: "Display name anómalo", count: 34 },
  { name: "Username prefijo numérico", count: 28 },
  { name: "Foto de perfil por defecto", count: 13 },
];

const temporalSignals = [
  { name: "Actividad esporádica", count: 79 },
  { name: "Tweets/día alto", count: 72 },
  { name: "Actividad nocturna (2-5 AM)", count: 61 },
  { name: "Ráfagas de actividad", count: 40 },
  { name: "Distribución horaria plana", count: 18 },
  { name: "Silencios largos", count: 13 },
];

const contentSignals = [
  { name: "Estructura narrativa repetitiva", note: "18/18" },
  { name: "Sin experiencia personal", note: "18/18" },
  { name: "Expresión emocional plana", note: "17/18" },
  { name: "Fijación léxica", note: "12/18" },
];

const llmAccounts = [
  {
    username: "@diariodeac",
    score: "43.33",
    topic: "Accidentes automovilísticos",
    seed: "GorditaCat80",
  },
  {
    username: "@RoxyRubio89",
    score: "40.88",
    topic: "Coordinación",
    seed: "RoxyRubio89",
  },
  {
    username: "@Damaris2036022",
    score: "40.22",
    topic: "TikTok",
    seed: "Marisol23393000",
  },
  {
    username: "@PRISCIL02797675",
    score: "40.10",
    topic: "San Juan del Sur",
    seed: "DNXAldo",
  },
  {
    username: "@EthanLevins2",
    score: "39.93",
    topic: "Política internacional",
    seed: "cherryklauklau",
  },
  {
    username: "@BTS_ARMY",
    score: "39.00",
    topic: "Espectáculo FIFA 2026",
    seed: "ShinyAmber321",
  },
  {
    username: "@Cuauhtemoc_1521",
    score: "34.42",
    topic: "Historia de México",
    seed: "ShinyAmber321",
  },
  {
    username: "@yatoedity",
    score: "34.05",
    topic: "Farming seguidores",
    seed: "RoxyRubio89",
  },
];

const hubs = [
  { name: "@Marisol23393000", count: 54 },
  { name: "@B_Day85_20_10", count: 53 },
  { name: "@edgarpeinado_", count: 45 },
  { name: "@DNXAldo", count: 41, maxScore: "40.10" },
  { name: "@Miya1153897", count: 41, maxScore: "38.21" },
  { name: "@RoxyRubio89", count: 39, maxScore: "40.88" },
  { name: "@ShinyAmber321", count: 39 },
  { name: "@GorditaCat80", count: 38, maxScore: "43.33" },
  { name: "@xsam74", count: 32 },
  { name: "@coffee86460", count: 28 },
  { name: "@cherryklauklau", count: 25 },
  { name: "@LaComentologa", count: "~", isNew: true },
  { name: "@unleguleyodijo", count: "~", isNew: true },
];

export default function Estudios() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-brand font-mono text-xs tracking-wider uppercase mb-4 bg-brand/10 px-3 py-1 rounded-full">
            <Database className="w-3.5 h-3.5" />
            Estudio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Comportamiento Automatizado{" "}
            <span className="text-brand">y Coordinado</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Análisis de 562 cuentas — señales, patrones y evidencia de
            coordinación.
          </p>
        </div>

        {/* --- STATS BAR --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-card-border bg-card p-5 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-brand mb-1">
                {s.value}
              </div>
              <div className="text-muted text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        {/* --- 7 PATRONES --- */}
        <div className="rounded-xl border border-card-border bg-card p-6 md:p-10 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Fingerprint className="w-6 h-6 text-brand" />
            <span className="text-brand font-mono text-sm tracking-wider uppercase">
              7 patrones de comportamiento automatizado
            </span>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Cada cuenta por separado podría tener una explicación. Pero cuando
            las 7 señales aparecen juntas en las mismas cuentas, conectadas
            entre sí, el patrón deja de ser coincidencia.
          </p>
          <div className="space-y-4">
            {patterns.map((p) => (
              <div
                key={p.id}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-brand/5 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand/20 text-brand font-mono text-xs font-bold shrink-0 mt-0.5">
                  {p.id}
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {p.title}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SEÑALES DETECTADAS (3 columnas) --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Perfil */}
          <div className="rounded-lg border border-card-border bg-black/30 p-6">
            <div className="flex items-center gap-2 mb-4">
              <User className="w-4 h-4 text-brand" />
              <span className="text-sm font-mono text-brand tracking-wider uppercase">
                Perfil
              </span>
            </div>
            <div className="space-y-3">
              {profileSignals.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-300">{s.name}</span>
                    <span className="text-muted">{s.count}x</span>
                  </div>
                  <div className="h-1.5 bg-card-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand/40 rounded-full"
                      style={{ width: `${(s.count / 91) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Temporal */}
          <div className="rounded-lg border border-card-border bg-black/30 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-brand" />
              <span className="text-sm font-mono text-brand tracking-wider uppercase">
                Temporal
              </span>
            </div>
            <div className="space-y-3">
              {temporalSignals.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-300">{s.name}</span>
                    <span className="text-muted">{s.count}x</span>
                  </div>
                  <div className="h-1.5 bg-card-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand/40 rounded-full"
                      style={{ width: `${(s.count / 79) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contenido */}
          <div className="rounded-lg border border-card-border bg-black/30 p-6">
            <div className="flex items-center gap-2 mb-4">
              <FileCode className="w-4 h-4 text-brand" />
              <span className="text-sm font-mono text-brand tracking-wider uppercase">
                Contenido
              </span>
            </div>
            <div className="space-y-3">
              {contentSignals.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-300">{s.name}</span>
                    <span className="text-brand font-mono">{s.note}</span>
                  </div>
                  <div className="h-1.5 bg-card-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand/60 rounded-full"
                      style={{
                        width: s.note.includes("18")
                          ? "100%"
                          : s.note.includes("17")
                            ? "94%"
                            : "67%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- ANÁLISIS LLM + HUBS --- */}
        <div className="grid md:grid-cols-5 gap-6 mb-12">
          {/* LLM Accounts Table (3 cols) */}
          <div className="md:col-span-3 rounded-lg border border-card-border bg-black/30 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-4 h-4 text-brand" />
              <span className="text-sm font-mono text-brand tracking-wider uppercase">
                Análisis LLM — Top 8
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-muted text-xs uppercase tracking-wider border-b border-card-border">
                    <th className="text-left py-2 pr-3 font-medium">
                      Cuenta
                    </th>
                    <th className="text-right py-2 px-2 font-medium">
                      Score
                    </th>
                    <th className="text-left py-2 pl-3 font-medium">
                      Tema dominante
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {llmAccounts.map((a) => (
                    <tr
                      key={a.username}
                      className="border-b border-card-border/50 last:border-0"
                    >
                      <td className="py-2.5 pr-3 text-gray-300">
                        {a.username}
                      </td>
                      <td className="py-2.5 px-2 text-right text-brand font-mono font-semibold">
                        {a.score}
                      </td>
                      <td className="py-2.5 pl-3 text-muted text-xs">
                        {a.topic}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Hubs Grid (2 cols) */}
          <div className="md:col-span-2 rounded-lg border border-card-border bg-black/30 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Network className="w-4 h-4 text-brand" />
              <span className="text-sm font-mono text-brand tracking-wider uppercase">
                Hubs de la red
              </span>
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {hubs.map((h) => (
                <div
                  key={h.name}
                  className="flex items-center justify-between rounded px-2.5 py-1.5 hover:bg-brand/5 transition-colors"
                >
                  <span className="text-xs text-gray-300 truncate mr-2">
                    {h.name}
                    {h.isNew && (
                      <span className="ml-1.5 inline-block px-1.5 py-0.5 rounded text-[10px] bg-brand/20 text-brand font-mono">
                        nueva
                      </span>
                    )}
                  </span>
                  <span className="text-muted text-xs shrink-0">
                    → {h.count}
                    {h.maxScore && (
                      <span className="text-brand/60 ml-1">
                        (máx {h.maxScore})
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- METODOLOGÍA + FUENTES --- */}
        <div className="rounded-xl border border-dashed border-card-border bg-card/50 p-6 md:p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="w-4 h-4 text-brand" />
            <span className="text-sm font-mono text-brand tracking-wider uppercase">
              Metodología y Fuentes
            </span>
          </div>
          <p className="text-muted text-sm leading-relaxed max-w-2xl mx-auto mb-4">
            Pipeline: Playwright + Stealth → 37 señales heurísticas → LLM Groq
            (4 prompts: contenido, comportamiento, red, persona). Respaldado por
            12 fuentes académicas incluyendo Ferrara et al. (2016), RTbust
            (2019), Botometer, y Benford&apos;s Law.
          </p>
          <Link
            href="/estudios"
            className="inline-flex items-center gap-1.5 text-brand text-sm hover:underline"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Ver reporte completo con datos y metodología
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
