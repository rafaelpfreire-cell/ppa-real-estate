import { Eyebrow } from "@/components/ui/eyebrow";

export function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <svg
        aria-hidden="true"
        viewBox="0 0 360 360"
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[360px] w-[360px] -translate-y-1/2 lg:block"
      >
        <polygon
          points="180,40 300,110 300,250 180,320 60,250 60,110"
          fill="none"
          stroke="white"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
        <polygon
          points="180,40 300,110 180,180 60,110"
          fill="none"
          stroke="white"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
        <polygon
          points="180,180 300,110 300,250 180,320"
          fill="none"
          stroke="white"
          strokeOpacity="0.07"
          strokeWidth="1"
        />
        <line x1="180" y1="40" x2="180" y2="320" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
        <line x1="60" y1="110" x2="300" y2="250" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-accent/70" aria-hidden="true" />
          <Eyebrow tone="on-dark">A PPA</Eyebrow>
        </div>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          Desenvolvimento imobiliário com visão de investidor.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          Somos uma empresa de desenvolvimento e estruturação de empreendimentos imobiliários
          voltados ao investidor. Identificamos oportunidades, estruturamos projetos e conectamos
          capital a ativos imobiliários bem planejados — hoje, com foco principal em hotelaria.
        </p>
      </div>
    </section>
  );
}
