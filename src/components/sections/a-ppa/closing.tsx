import { CtaLink } from "@/components/ui/cta-link";
import { Eyebrow } from "@/components/ui/eyebrow";

export function AboutClosingSection() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
          <div>
            <Eyebrow tone="on-light">PPA Real Estate</Eyebrow>
            <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              Transformamos oportunidades imobiliárias em empreendimentos pensados sob a ótica de
              quem investe.
            </p>
          </div>

          <div className="md:shrink-0">
            <CtaLink href="/portfolio" variant="solid">
              Conheça nosso portfólio
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
