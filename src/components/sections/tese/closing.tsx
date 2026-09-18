import Link from "next/link";
import { CtaLink } from "@/components/ui/cta-link";
import { Eyebrow } from "@/components/ui/eyebrow";

export function TeseClosingSection() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <Eyebrow tone="on-dark">Da tese à execução</Eyebrow>
        <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
          Uma tese imobiliária ganha consistência quando se traduz em projetos reais.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
          A PPA aplica essa lógica no desenvolvimento de empreendimentos hoteleiros em diferentes
          mercados do país.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <CtaLink href="/portfolio" variant="solid">
            Conheça nosso portfólio
          </CtaLink>
          <Link
            href="/contato"
            className="text-sm font-medium text-white/70 underline underline-offset-4 transition-colors duration-200 hover:text-white"
          >
            Fale com a PPA
          </Link>
        </div>
      </div>
    </section>
  );
}
