import { Eyebrow } from "@/components/ui/eyebrow";
import { formatPressDate, pressItems } from "@/lib/press";

export function ImprensaCoverageSection() {
  const coverageItems = pressItems.filter((item) => !item.featured);

  if (coverageItems.length === 0) {
    return null;
  }

  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 pt-6 pb-14 md:px-10 md:pt-8 md:pb-16">
        <Eyebrow tone="on-light">Cobertura na mídia</Eyebrow>

        <div className="mt-8 divide-y divide-ink/10">
          {coverageItems.map((item, index) => {
            const number = String(index + 1).padStart(2, "0");
            return (
              <div
                key={item.url}
                className="py-6 first:pt-0 last:pb-0 md:py-7 lg:grid lg:grid-cols-[auto_2fr_6fr_auto] lg:items-baseline lg:gap-6"
              >
                <span className="block font-display text-sm font-semibold tracking-wide text-accent">
                  {number}
                </span>
                <div className="mt-3 lg:mt-0">
                  <p className="font-display text-sm font-semibold text-ink">{item.outlet}</p>
                  <p className="text-sm text-charcoal/60">{formatPressDate(item.date)}</p>
                </div>
                <p className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl lg:mt-0">
                  {item.title}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ink hover:text-accent lg:mt-0 lg:justify-self-end"
                >
                  Ler matéria <span aria-hidden="true">↗</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
