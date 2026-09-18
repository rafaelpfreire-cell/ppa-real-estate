import { Eyebrow } from "@/components/ui/eyebrow";

const pillars = [
  {
    title: "Curadoria",
    description:
      "Seleção de cidades, localizações e terrenos capazes de sustentar a lógica do projeto.",
  },
  {
    title: "Modelagem",
    description:
      "Viabilidade imobiliária, produto, custos, estrutura de capital e premissas operacionais antes do desenvolvimento.",
  },
  {
    title: "Bandeira e Operação",
    description: "Integração com marcas e operadores especializados desde a concepção do projeto.",
  },
  {
    title: "Governança",
    description:
      "Estrutura dedicada por empreendimento, acompanhamento e disciplina de gestão ao longo do desenvolvimento e do ciclo do ativo.",
  },
];

export function TesePillarsSection() {
  return (
    <section className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow tone="on-dark">Os pilares</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Quatro pilares sustentam a tese.
          </h2>
        </div>

        <div className="mt-14 grid divide-y divide-white/15 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="py-6 first:pt-0 last:pb-0 lg:py-0 lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="font-display text-sm text-accent">0{index + 1}</span>
              <p className="mt-3 font-display text-lg font-semibold">{pillar.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
