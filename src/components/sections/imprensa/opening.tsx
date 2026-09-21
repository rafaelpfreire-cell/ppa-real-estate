import { Eyebrow } from "@/components/ui/eyebrow";

export function ImprensaOpeningSection() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:px-10 md:pt-20 md:pb-12">
        <div className="max-w-3xl">
          <Eyebrow tone="on-light">Imprensa</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            PPA em pauta.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/80">
            Projetos, movimentos e parcerias da PPA Real Estate acompanhados pela imprensa e pelo
            mercado.
          </p>
        </div>
      </div>
    </section>
  );
}
