import { Eyebrow } from "@/components/ui/eyebrow";

const contrasts = [
  {
    number: "01",
    category: "Construção",
    statement: "Não atuamos como uma construtora tradicional.",
    explanation:
      "Coordenamos o desenvolvimento e estruturamos o empreendimento como um todo.",
  },
  {
    number: "02",
    category: "Comercialização",
    statement: "Não nos limitamos à intermediação ou venda de unidades.",
    explanation: "O trabalho começa muito antes, na concepção e viabilidade do projeto.",
  },
  {
    number: "03",
    category: "Capital",
    statement: "Não somos um fundo de investimento.",
    explanation:
      "Estruturamos oportunidades imobiliárias que podem receber capital de diferentes perfis de investidores.",
  },
];

export function AboutOperatingModelSection() {
  return (
    <section className="bg-sand text-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-10 md:py-24">
        <div className="max-w-md">
          <Eyebrow tone="on-light">Modelo de atuação</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Nosso papel começa antes da obra e vai além da venda.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal/80">
            A PPA atua na origem e na estruturação do empreendimento. Nosso trabalho conecta
            estratégia imobiliária, produto, parceiros, operação e capital em torno de uma
            oportunidade comum.
          </p>
        </div>

        <div className="divide-y divide-ink/15">
          {contrasts.map((item) => (
            <div key={item.number} className="py-6 first:pt-0 last:pb-0 md:py-8">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-sm font-semibold text-accent">
                  {item.number}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
                  {item.category}
                </span>
              </div>
              <p className="mt-3 font-display text-lg font-semibold text-ink sm:text-xl">
                {item.statement}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{item.explanation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
