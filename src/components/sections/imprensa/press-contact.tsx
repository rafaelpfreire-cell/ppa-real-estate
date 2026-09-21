import { CtaLink } from "@/components/ui/cta-link";
import { Eyebrow } from "@/components/ui/eyebrow";

export function ImprensaPressContactSection() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
          <div>
            <Eyebrow tone="on-dark">Imprensa e comunicação</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl md:text-4xl">
              Para pautas, informações e materiais institucionais.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              Entre em contato com a PPA Real Estate para assuntos relacionados à imprensa e
              comunicação.
            </p>
          </div>

          <div className="md:shrink-0">
            <CtaLink href="/contato" variant="solid">
              Fale com a PPA
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
