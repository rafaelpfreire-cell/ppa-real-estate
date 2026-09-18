import { Eyebrow } from "@/components/ui/eyebrow";

const steps = [
  {
    number: "01",
    title: "OPORTUNIDADE",
    description: "Leitura de mercado e identificação do ativo.",
  },
  {
    number: "02",
    title: "ESTRUTURAÇÃO",
    description: "Viabilidade, modelagem e planejamento.",
  },
  {
    number: "03",
    title: "PRODUTO",
    description: "Definição do conceito e do programa imobiliário.",
  },
  {
    number: "04",
    title: "BANDEIRA & OPERAÇÃO",
    description: "Integração com marca e operação especializadas.",
  },
  {
    number: "05",
    title: "CAPITAL",
    description: "Estruturação da oportunidade para o investidor.",
  },
  {
    number: "06",
    title: "DESENVOLVIMENTO",
    description: "Coordenação do projeto até sua implantação.",
  },
];

const firstRow = steps.slice(0, 3);
const secondRow = steps.slice(3, 6);

export function AboutOurRoleSection() {
  return (
    <section className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow tone="on-dark">Nosso papel</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            No centro da estruturação do empreendimento.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/75">
            A PPA articula as diferentes dimensões que transformam uma oportunidade imobiliária em
            um empreendimento estruturado sob a ótica do investidor.
          </p>
        </div>

        <div className="mt-16 border-t border-white/15">
          <div className="grid divide-y divide-white/15 border-b border-white/15 sm:py-10 sm:grid-cols-3 sm:gap-x-8 sm:divide-x sm:divide-y-0">
            {firstRow.map((step) => (
              <div key={step.number} className="py-5 sm:py-0 sm:px-8 sm:first:pl-0 sm:last:pr-0">
                <span className="font-display text-sm text-accent">{step.number}</span>
                <p className="mt-3 font-display text-lg font-semibold tracking-wide">
                  {step.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="grid divide-y divide-white/15 sm:py-10 sm:grid-cols-3 sm:gap-x-8 sm:divide-x sm:divide-y-0">
            {secondRow.map((step) => (
              <div key={step.number} className="py-5 sm:py-0 sm:px-8 sm:first:pl-0 sm:last:pr-0">
                <span className="font-display text-sm text-accent">{step.number}</span>
                <p className="mt-3 font-display text-lg font-semibold tracking-wide">
                  {step.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
