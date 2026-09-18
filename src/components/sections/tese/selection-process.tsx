import { Eyebrow } from "@/components/ui/eyebrow";

const steps = [
  {
    number: "01",
    title: "Mercado",
    description: "Cidades e regiões com dinâmica econômica capaz de sustentar a operação.",
  },
  {
    number: "02",
    title: "Localização",
    description: "Inserção urbana e acesso coerentes com o produto proposto.",
  },
  {
    number: "03",
    title: "Produto",
    description: "Categoria, porte e posicionamento adequados à demanda identificada.",
  },
  {
    number: "04",
    title: "Viabilidade",
    description: "Premissas de custo, operação e capital testadas antes do avanço do projeto.",
  },
  {
    number: "05",
    title: "Estrutura",
    description:
      "Compatibilidade entre bandeira, operação, capital e modelo de desenvolvimento do empreendimento.",
  },
];

export function TeseSelectionProcessSection() {
  return (
    <section className="bg-sand text-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow tone="on-light">Como selecionamos</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            A oportunidade vem antes do hotel.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal/80">
            A PPA não parte do produto hoteleiro. Parte da leitura de uma oportunidade e só avança
            quando mercado, localização, produto, viabilidade e estrutura fazem sentido juntos.
          </p>
        </div>

        <div className="divide-y divide-ink/15">
          {steps.map((step) => (
            <div key={step.number} className="py-6 first:pt-0 last:pb-0">
              <span className="font-display text-sm font-semibold text-accent">
                {step.number}
              </span>
              <p className="mt-3 font-display text-lg font-semibold text-ink">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
