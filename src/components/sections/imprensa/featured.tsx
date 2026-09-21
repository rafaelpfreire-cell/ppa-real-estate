import Image from "next/image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { formatPressDate, pressItems } from "@/lib/press";

export function ImprensaFeaturedSection() {
  const featured = pressItems.find((item) => item.featured === true);

  if (!featured) {
    return null;
  }

  const images = featured.images ?? [];

  return (
    <section className="bg-sand text-ink">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
        <Eyebrow tone="on-light">Matéria em destaque</Eyebrow>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {images.length > 0 ? (
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={images[0]}
                alt="Evento institucional da PPA Real Estate com parceiros da hotelaria"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}

          <div>
            <p className="font-display text-sm font-semibold text-ink">{featured.outlet}</p>
            <p className="mt-1 text-sm text-charcoal/60">{formatPressDate(featured.date)}</p>

            <h2 className="mt-4 font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
              {featured.title}
            </h2>
            {featured.summary ? (
              <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/80">
                {featured.summary}
              </p>
            ) : null}
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ink hover:text-accent"
            >
              Ler matéria <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
