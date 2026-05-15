import Hero from "./components/hero";
import Problema from "./components/problema";
import ComoFunciona from "./components/como-funciona";
import Evidencia from "./components/evidencia";
import Estudios from "./components/estudios";
import ParaQuien from "./components/para-quien";
import CtaContacto from "./components/cta-contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <Problema />
      <ComoFunciona />
      <Evidencia />
      <Estudios />
      <ParaQuien />
      <CtaContacto />
      <footer className="py-8 px-4 border-t border-card-border">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <span>iBot Detector &mdash; {new Date().getFullYear()}</span>
          <span className="font-mono">
            <span className="text-brand">$</span> el conjunto revela el patrón
          </span>
        </div>
      </footer>
    </>
  );
}
