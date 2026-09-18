import { Eyebrow } from "@/components/ui/eyebrow";

const vectors = [
  {
    number: "01",
    title: "Renda",
    description:
      "A operação do empreendimento pode gerar distribuições recorrentes ao longo do tempo, vinculadas ao desempenho do ativo.",
  },
  {
    number: "02",
    title: "Valorização",
    description:
      "O amadurecimento do projeto e da operação pode se refletir na valorização do ativo imobiliário.",
  },
  {
    number: "03",
    title: "Ativo real",
    description:
      "Exposição a um bem físico, com dinâmica distinta da de ativos puramente financeiros — uma característica do investimento em imóveis, não uma garantia de resultado.",
  },
];

export function TeseValueVectorsSection() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow tone="on-light">Vetores do ativo</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Vetores de valor de um ativo real.
          </h2>
        </div>

        <div className="mt-14 grid divide-y divide-ink/15 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {vectors.map((vector) => (
            <div
              key={vector.title}
              className="py-6 first:pt-0 last:pb-0 lg:py-0 lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="font-display text-sm font-semibold text-accent">
                {vector.number}
              </span>
              <p className="mt-3 font-display text-xl font-bold text-ink sm:text-2xl">
                {vector.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{vector.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl border-t border-ink/15 pt-6 text-sm leading-relaxed text-charcoal/60">
          Renda, valorização e exposição a ativo real são características potenciais do
          investimento imobiliário — não promessas de resultado.
        </p>
      </div>
    </section>
  );
}
