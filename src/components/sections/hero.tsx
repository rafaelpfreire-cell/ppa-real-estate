import Image from "next/image";
import { CtaLink } from "@/components/ui/cta-link";
import { Eyebrow } from "@/components/ui/eyebrow";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-end overflow-hidden bg-ink text-white sm:min-h-[85vh] lg:min-h-[92vh]">
      <Image
        src="/assets/web/ibis-indaiatuba-02.jpg"
        alt="Ibis Indaiatuba, fachada do empreendimento"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[32%_38%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" aria-hidden="true" />
      <span
        className="absolute left-6 top-28 hidden h-16 w-px bg-accent/70 sm:block md:left-10"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-32 md:px-10 md:pb-20">
        <div className="max-w-2xl">
          <Eyebrow tone="on-dark">PPA Real Estate</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Arquitetamos oportunidades imobiliárias estratégicas.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            A PPA desenvolve e estrutura empreendimentos imobiliários voltados ao investidor, com
            foco atual em hotelaria.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CtaLink href="/tese" variant="solid">
              Conheça nossa tese
            </CtaLink>
            <CtaLink href="/portfolio" variant="outline">
              Conheça nosso portfólio
            </CtaLink>
          </div>
        </div>

        <p className="mt-12 text-xs uppercase tracking-[0.25em] text-white/50">
          Ibis Indaiatuba · SP
        </p>
      </div>
    </section>
  );
}
