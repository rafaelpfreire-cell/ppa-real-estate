import Image from "next/image";
import { BrazilMap } from "@/components/ui/brazil-map";
import { CtaLink } from "@/components/ui/cta-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { highlightedStates } from "@/lib/geography";

const featuredProjects = [
  {
    name: "Ibis Indaiatuba",
    location: "Indaiatuba, SP",
    image: "/assets/web/ibis-indaiatuba-02.jpg",
  },
  {
    name: "Ibis Suzano",
    location: "Suzano, SP",
    image: "/assets/web/ibis-suzano-04.jpg",
  },
  {
    name: "Ibis Styles Fortaleza Praia do Futuro",
    location: "Fortaleza, CE",
    image: "/assets/web/ibis-praia-do-futuro-02.jpg",
  },
];

export function PortfolioSection() {
  return (
    <section className="bg-sand text-ink">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow tone="on-light">Portfólio</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Uma tese em execução em diferentes mercados.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal/80">
            Projetos estruturados em mercados selecionados, conectando desenvolvimento
            imobiliário, bandeiras, operação e capital.
          </p>
        </div>

        <Eyebrow tone="on-light" className="mt-14">
          Presença geográfica
        </Eyebrow>

        <div className="mt-6 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16">
          <BrazilMap />

          <ul className="space-y-5 border-t border-ink/15 pt-6">
            {highlightedStates.map((state) => (
              <li key={state.code} className="border-b border-ink/15 pb-5">
                <p className="font-display text-lg font-semibold text-ink">
                  {state.name} <span className="text-sm font-normal text-charcoal/50">({state.code})</span>
                </p>
                <p className="mt-1 text-sm text-charcoal/70">
                  {state.cities.map((city, index) => (
                    <span key={city}>
                      {index > 0 ? <span className="text-charcoal/90"> · </span> : null}
                      {city}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div key={project.name} className="group flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.name}, ${project.location}`}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-ink/15 pt-4">
                <div>
                  <p className="font-display text-lg font-semibold text-ink">{project.name}</p>
                  <p className="text-sm text-charcoal/70">{project.location}</p>
                </div>
                <span className="font-display text-xs text-charcoal/40">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <CtaLink href="/portfolio" variant="solid">
            Conheça nosso portfólio
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
