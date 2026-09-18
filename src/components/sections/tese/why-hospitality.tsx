import { Eyebrow } from "@/components/ui/eyebrow";

const dimensions = [
  {
    title: "Ativo imobiliário",
    description: "A base física e locacional do empreendimento.",
  },
  {
    title: "Operação",
    description: "A estrutura que transforma o ativo físico em serviço e receita.",
  },
  {
    title: "Marca",
    description: "Padrão, distribuição e reconhecimento aplicados ao produto.",
  },
  {
    title: "Gestão",
    description: "Disciplina operacional e acompanhamento contínuo do desempenho.",
  },
];

export function TeseWhyHospitalitySection() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow tone="on-light">Por que hotelaria</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Um ativo imobiliário que também é um negócio operacional.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal/80">
            Em ativos residenciais ou comerciais locativos, a geração de receita está
            principalmente associada à ocupação do espaço. Um hotel é diferente: seu desempenho
            depende também da operação diária, do padrão de marca e da gestão do negócio. É essa
            integração — não o imóvel isoladamente — que a PPA estrutura desde a origem do
            projeto.
          </p>
        </div>

        <p className="mt-14 font-display text-xl font-bold uppercase leading-snug tracking-tight text-ink sm:text-2xl md:text-3xl">
          Ativo imobiliário <span className="text-accent">+</span> Operação{" "}
          <span className="text-accent">+</span> Marca <span className="text-accent">+</span>{" "}
          Gestão
        </p>

        <div className="mt-10 grid divide-y divide-ink/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {dimensions.map((item) => (
            <div
              key={item.title}
              className="py-6 first:pt-0 last:pb-0 lg:py-0 lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              <p className="font-display text-sm font-semibold text-ink">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
