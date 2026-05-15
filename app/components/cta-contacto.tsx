import { MessageCircle, Code2, ArrowRight, Shield } from "lucide-react";

export default function CtaContacto() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="rounded-xl border border-brand/20 bg-brand/5 p-10 md:p-14">
          <Shield className="w-10 h-10 text-brand mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Cada caso es distinto
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Empecemos con un análisis inicial de tu exposición. Sin compromiso.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://x.com/iBotDetectorMx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-cta text-white font-semibold text-base hover:bg-cta-hover transition-colors duration-200 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              Enviá un DM
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/drgz/iBot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-card-border text-gray-300 font-medium text-base hover:border-gray-600 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <Code2 className="w-5 h-5" />
              Código
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-card-border">
            <p className="text-muted text-xs leading-relaxed">
              Análisis basado exclusivamente en datos públicos de perfil y
              tweets. No almacenamos información privada ni realizamos scraping
              de contenido no público.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
