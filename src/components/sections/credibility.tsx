import Image from "next/image";
import { CtaLink } from "@/components/ui/cta-link";
import { Eyebrow } from "@/components/ui/eyebrow";

type Brand = {
  key: string;
  src: string;
  alt: string;
  imgClassName: string;
  role: string;
};

const brands: Brand[] = [
  {
    key: "ppa",
    src: "/assets/brand/PPA-Marca.svg",
    alt: "PPA Real Estate",
    imgClassName: "max-h-8 sm:max-h-9",
    role: "Desenvolvimento e estruturação imobiliária.",
  },
  {
    key: "accor",
    src: "/assets/partners/accor/accor-seeklogo.svg",
    alt: "Accor",
    imgClassName: "max-h-14 sm:max-h-16",
    role: "Bandeiras hoteleiras globais.",
  },
  {
    key: "atrio",
    src: "/assets/partners/atrio/atrio-transparent.svg",
    alt: "Atrio",
    imgClassName: "max-h-6 sm:max-h-7",
    role: "Operação hoteleira parceira.",
  },
];

export function CredibilitySection() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-10 md:py-28">
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src="/assets/web/institucional-parceria-accor-ibis-ppa.jpg"
            alt="Evento de anúncio dos projetos com PPA Real Estate, Accor e Atrio"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <Eyebrow tone="on-light">Credibilidade institucional</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Cada projeto reúne papéis distintos e complementares.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
            A união entre PPA Real Estate, Accor e Atrio combina desenvolvimento imobiliário,
            bandeiras hoteleiras globais e operação especializada em uma mesma estrutura.
          </p>

          <div className="mt-8 flex flex-col divide-y divide-ink/10 sm:mt-10 sm:flex-row sm:divide-x sm:divide-y-0">
            {brands.map((brand) => (
              <div
                key={brand.key}
                className="flex flex-1 flex-col items-center gap-3 py-6 text-center first:pt-0 last:pb-0 sm:px-6 sm:py-0 sm:first:pl-0 sm:last:pr-0"
              >
                <div className="flex h-16 w-full items-center justify-center sm:h-20">
                  {/* eslint-disable-next-line @next/next/no-img-element -- logos vetoriais institucionais, sem necessidade de otimização raster */}
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className={`w-auto object-contain ${brand.imgClassName}`}
                  />
                </div>
                <p className="text-xs leading-snug text-charcoal/70 sm:text-sm">{brand.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-ink/10 pt-8">
            <p className="max-w-xl text-sm leading-relaxed text-charcoal/70">
              A atuação conjunta de PPA Real Estate, Accor e Atrio nos projetos anunciados já teve
              repercussão na imprensa especializada do setor imobiliário e hoteleiro.
            </p>

            <div className="mt-6">
              <CtaLink href="/imprensa" variant="solid">
                Ver imprensa
              </CtaLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
