import Image from "next/image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ProjectGallery } from "@/components/sections/portfolio/project-gallery";

type Project = {
  number: string;
  name: string;
  location: string;
  units: string;
  vgv: string;
  forecast: string;
  images: string[];
  brand: "ibis" | "ibis-styles";
};

const brandLogos = {
  ibis: "/assets/web/brands/ibis.svg",
  "ibis-styles": "/assets/web/brands/ibis-styles.svg",
};

const projects: Project[] = [
  {
    number: "01",
    name: "Ibis Sobral",
    location: "Sobral, CE",
    units: "100 UHs",
    vgv: "R$ 35,5 mi em VGV",
    forecast: "Previsão 2º sem. 2027",
    images: [
      "/assets/web/portfolio-sobral-01.jpg",
      "/assets/web/portfolio-sobral-02.jpg",
      "/assets/web/portfolio-sobral-03.jpg",
    ],
    brand: "ibis",
  },
  {
    number: "02",
    name: "Ibis Camaçari",
    location: "Camaçari, BA",
    units: "100 UHs",
    vgv: "R$ 38,0 mi em VGV",
    forecast: "Previsão 1º sem. 2029",
    images: [
      "/assets/web/portfolio-camacari-01.jpg",
      "/assets/web/portfolio-camacari-02.jpg",
      "/assets/web/portfolio-camacari-03.jpg",
    ],
    brand: "ibis",
  },
  {
    number: "03",
    name: "Ibis Styles Ilha do Leite",
    location: "Recife, PE",
    units: "120 UHs",
    vgv: "R$ 49,2 mi em VGV",
    forecast: "Previsão 2º sem. 2029",
    images: [
      "/assets/web/portfolio-ilha-do-leite-01.jpg",
      "/assets/web/portfolio-ilha-do-leite-02.jpg",
      "/assets/web/portfolio-ilha-do-leite-03.jpg",
    ],
    brand: "ibis-styles",
  },
  {
    number: "04",
    name: "Ibis Indaiatuba",
    location: "Indaiatuba, SP",
    units: "140 UHs",
    vgv: "R$ 55,3 mi em VGV",
    forecast: "Previsão 1º sem. 2030",
    images: [
      "/assets/web/portfolio-indaiatuba-01.jpg",
      "/assets/web/portfolio-indaiatuba-02.jpg",
      "/assets/web/portfolio-indaiatuba-03.jpg",
    ],
    brand: "ibis",
  },
  {
    number: "05",
    name: "Ibis Suzano",
    location: "Suzano, SP",
    units: "144 UHs",
    vgv: "R$ 59,0 mi em VGV",
    forecast: "Previsão 1º sem. 2030",
    images: [
      "/assets/web/portfolio-suzano-01.jpg",
      "/assets/web/portfolio-suzano-02.jpg",
      "/assets/web/portfolio-suzano-03.jpg",
    ],
    brand: "ibis",
  },
  {
    number: "06",
    name: "Ibis Styles Fortaleza Praia do Futuro",
    location: "Fortaleza, CE",
    units: "120 UHs",
    vgv: "R$ 45,2 mi em VGV",
    forecast: "Previsão 1º sem. 2030",
    images: [
      "/assets/web/portfolio-praia-do-futuro-01.jpg",
      "/assets/web/portfolio-praia-do-futuro-02.jpg",
      "/assets/web/portfolio-praia-do-futuro-03.jpg",
    ],
    brand: "ibis-styles",
  },
];

export function PortfolioProjectsSection() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 pt-6 pb-14 md:px-10 md:pt-8 md:pb-16">
        <div className="max-w-2xl">
          <Eyebrow tone="on-light">Os empreendimentos</Eyebrow>
          <p className="mt-6 text-base leading-relaxed text-charcoal/80">
            Cada projeto reflete a leitura de uma oportunidade específica de mercado, produto e
            escala.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 md:gap-y-10 lg:grid-cols-2 lg:gap-y-12 xl:gap-x-10">
          {projects.map((project) => (
            <div key={project.number}>
              <span className="font-display text-sm font-semibold tracking-wide text-accent">
                {project.number}
              </span>
              <div className="mt-3">
                <ProjectGallery
                  images={project.images}
                  alt={`${project.name}, ${project.location}`}
                />
              </div>
              <div className="mt-4">
                <Image
                  src={brandLogos[project.brand]}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-auto"
                />
                <p className="mt-2 font-display text-lg font-semibold text-ink sm:text-xl">
                  {project.name}
                </p>
                <p className="mt-1 text-sm text-charcoal/70">{project.location}</p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {project.units} <span className="text-charcoal/40">·</span> {project.vgv}{" "}
                  <span className="text-charcoal/40">·</span> {project.forecast}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
