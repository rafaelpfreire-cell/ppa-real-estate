import { Eyebrow } from "@/components/ui/eyebrow";

const milestones = [
  {
    year: "2018",
    text: "A PPA nasce como um hub de soluções imobiliárias, conectando demandas, ativos e oportunidades de mercado.",
  },
  {
    year: "2023",
    text: "A empresa concentra sua atuação no desenvolvimento e estruturação de empreendimentos imobiliários voltados ao investidor.",
  },
  {
    year: "Hoje",
    text: "Uma plataforma de desenvolvimento com foco principal em hotelaria, estruturando projetos desde a identificação da oportunidade até sua implantação.",
  },
];

export function AboutWhoWeAreSection() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow tone="on-light">Quem somos</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Uma evolução com direção clara.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal/80">
            A PPA nasceu em 2018 e evoluiu junto com a forma como enxergamos o mercado
            imobiliário: menos como uma sequência de transações e mais como um processo de
            criação e estruturação de oportunidades.
          </p>
        </div>

        <div className="mt-14 grid gap-10 border-t border-ink/10 pt-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-ink/10">
          {milestones.map((milestone) => (
            <div key={milestone.year} className="sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <p className="font-display text-3xl font-bold text-ink/25 sm:text-4xl">
                {milestone.year}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/80">{milestone.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
