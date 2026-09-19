import { AnimatedNumber } from "@/components/ui/animated-number";
import { Eyebrow } from "@/components/ui/eyebrow";

const stats = [
  { value: 6, prefix: "", suffix: "", label: "Empreendimentos" },
  { value: 724, prefix: "", suffix: "+", label: "UHs" },
  { value: 282, prefix: "R$ ", suffix: " mi", label: "Em VGV" },
  { value: 4, prefix: "", suffix: "", label: "Estados" },
];

export function PortfolioOverviewSection() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-6 md:px-10 md:pt-20 md:pb-8">
        <div className="max-w-4xl">
          <Eyebrow tone="on-light">Portfólio</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Uma tese construída projeto a projeto.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/80">
            O portfólio da PPA reúne empreendimentos hoteleiros em diferentes mercados brasileiros
            — cada um estruturado a partir da integração entre mercado, produto, bandeira,
            operação e capital.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink/15 pt-8 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-ink/15">
          {stats.map((stat, index) => (
            <div key={stat.label} className={index > 0 ? "lg:pl-8" : ""}>
              <p className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-charcoal/70 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
