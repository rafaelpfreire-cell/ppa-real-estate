import Link from "next/link";
import { CtaLink } from "@/components/ui/cta-link";
import { Eyebrow } from "@/components/ui/eyebrow";

export function PortfolioClosingSection() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <Eyebrow tone="on-dark">Novas oportunidades</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl md:text-4xl">
          Novos projetos começam com a leitura da oportunidade certa.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
          Continuamos buscando mercados, terrenos e oportunidades capazes de sustentar novos
          empreendimentos.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <CtaLink href="/contato" variant="solid">
            Fale com a PPA
          </CtaLink>
          <Link
            href="/tese"
            className="text-sm font-medium text-white/70 underline underline-offset-4 transition-colors duration-200 hover:text-white"
          >
            Conheça nossa tese
          </Link>
        </div>
      </div>
    </section>
  );
}
