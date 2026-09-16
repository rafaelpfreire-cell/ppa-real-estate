import { CtaLink } from "@/components/ui/cta-link";
import { Eyebrow } from "@/components/ui/eyebrow";

const pillars = [
  {
    title: "Curadoria",
    description: "Cidades e localizações com demanda estrutural e economia diversificada.",
  },
  {
    title: "Modelagem",
    description:
      "Viabilidade auditada antes de qualquer lançamento, com estudo de ocupação e custo de capital.",
  },
  {
    title: "Operação bandeirada",
    description: "Ativos operados sob padrão de marca global, com governança de operação.",
  },
  {
    title: "Governança",
    description: "Estrutura dedicada por projeto, com reporting periódico ao investidor.",
  },
];

const outcomes = [
  { title: "Renda", description: "Distribuições recorrentes ligadas à operação do ativo." },
  {
    title: "Valorização",
    description: "Apreciação do ativo ao longo do amadurecimento do projeto.",
  },
  {
    title: "Proteção patrimonial",
    description: "Lastro em ativo real, com baixa correlação com o mercado de capitais.",
  },
];

export function ThesisSection() {
  return (
    <section className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow tone="on-dark">Nossa tese</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Hotelaria como classe de ativo.
          </h2>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/15 pt-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-white/15">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className={`lg:px-8 ${index === 0 ? "lg:pl-0" : ""}`}>
              <span className="font-display text-sm text-accent">0{index + 1}</span>
              <p className="mt-3 font-display text-xl font-semibold">{pillar.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-3">
          {outcomes.map((outcome) => (
            <div key={outcome.title}>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {outcome.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{outcome.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <CtaLink href="/tese" variant="outline">
            Conheça nossa tese
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
