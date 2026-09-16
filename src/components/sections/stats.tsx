import { AnimatedNumber } from "@/components/ui/animated-number";

const stats = [
  { value: 6, prefix: "", suffix: "", label: "Empreendimentos hoteleiros" },
  { value: 724, prefix: "", suffix: "+", label: "Unidades habitacionais" },
  { value: 282, prefix: "R$ ", suffix: " mi", label: "Em VGV" },
  { value: 4, prefix: "", suffix: "", label: "Estados" },
];

export function StatsSection() {
  return (
    <section className="bg-sand text-ink">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-ink/15">
          {stats.map((stat, index) => (
            <li key={stat.label} className={index > 0 ? "sm:pl-8" : ""}>
              <p className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-charcoal/70 sm:text-sm">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
