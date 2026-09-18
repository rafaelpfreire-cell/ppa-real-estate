import { CtaLink } from "@/components/ui/cta-link";
import { Eyebrow } from "@/components/ui/eyebrow";

export function AboutHospitalityThesisSection() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow tone="on-dark">Nossa tese</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            A hotelaria no centro da nossa estratégia.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/75">
            Hotéis combinam ativo imobiliário e operação. Seu desenvolvimento exige integração
            entre produto, bandeira, gestão e capital — exatamente o tipo de estruturação em que a
            PPA concentra sua atuação. É nesse mercado que hoje desenvolvemos nossa principal
            tese, em conjunto com grupos hoteleiros e operadores especializados.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            Para o investidor, isso significa acessar ativos reais estruturados desde a origem
            para uma operação profissional e de longo prazo.
          </p>

          <div className="mt-10">
            <CtaLink href="/tese" variant="outline">
              Conheça nossa tese
            </CtaLink>
          </div>
        </div>

        <div>
          <p className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
            Ativo imobiliário
          </p>
          <p className="my-1 font-display text-xl font-bold leading-tight text-accent sm:text-2xl md:text-3xl lg:text-4xl">
            +
          </p>
          <p className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-white/70 sm:text-2xl md:text-3xl lg:text-4xl">
            Operação especializada
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/50 sm:text-sm">
            Produto · Bandeira · Gestão · Capital
          </p>
        </div>
      </div>
    </section>
  );
}
