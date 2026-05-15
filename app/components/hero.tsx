import { Shield, ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/5 text-brand text-xs font-mono tracking-wider mb-8 uppercase">
          <Shield className="w-3.5 h-3.5" />
          Detección de Redes de Bots
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
          El conjunto{" "}
          <span className="animate-glow text-brand">revela el patrón</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Detectamos redes de bots que manipulan la opinión artificialmente en
          Twitter/X. No analizamos cuentas sueltas — mapeamos la{" "}
          <span className="text-gray-200 font-semibold">red completa</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://x.com/iBotDetectorMx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-cta text-white font-semibold text-base hover:bg-cta-hover transition-colors duration-200 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitá un análisis
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/drgz/iBot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-card-border text-gray-300 font-medium text-base hover:border-gray-600 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Seguí la investigación
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono text-muted">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            Análisis en tiempo real
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            Datos públicos de perfil y tweets
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            Sin falsos positivos confirmados
          </span>
        </div>
      </div>
    </section>
  );
}
