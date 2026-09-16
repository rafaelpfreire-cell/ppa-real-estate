import { Eyebrow } from "@/components/ui/eyebrow";

const capabilities = [
  {
    number: "01",
    title: "Identifica oportunidades",
    description:
      "Leitura de mercado, cidades e ativos com potencial estratégico para o investidor.",
  },
  {
    number: "02",
    title: "Estrutura empreendimentos",
    description: "Modelagem, viabilidade e planejamento antes de qualquer decisão de capital.",
  },
  {
    number: "03",
    title: "Conecta os players certos",
    description: "Ativos, capital, marcas, operadores e investidores em uma mesma estrutura.",
  },
  {
    number: "04",
    title: "Foco atual em hotelaria",
    description:
      "Hoje, a hotelaria bandeirada concentra a principal tese de investimento da PPA.",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <Eyebrow tone="on-light">O que fazemos</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Inteligência imobiliária orientada ao investidor.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-charcoal/80">
              A PPA desenvolve e estrutura empreendimentos imobiliários pensando primeiro no
              investidor — do diagnóstico à governança do ativo.
            </p>
          </div>

          <div>
            {capabilities.map((item, index) => (
              <div
                key={item.number}
                className={`flex gap-6 border-t border-ink/10 py-8 first:border-t-0 first:pt-0 md:py-10 ${
                  index % 2 === 1 ? "md:pl-10" : ""
                }`}
              >
                <span className="font-display text-4xl font-bold leading-none text-ink/15 sm:text-5xl">
                  {item.number}
                </span>
                <div>
                  <p className="font-display text-xl font-semibold text-ink">{item.title}</p>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-charcoal/75">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
