import { Eyebrow } from "@/components/ui/eyebrow";

export function TeseHeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <svg
        aria-hidden="true"
        viewBox="0 0 360 400"
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[400px] w-[360px] -translate-y-1/2 xl:block"
      >
        <polygon points="60,90 180,60 300,90 180,120" fill="none" stroke="white" strokeOpacity="0.07" strokeWidth="1" />
        <polygon points="60,210 180,180 300,210 180,240" fill="none" stroke="white" strokeOpacity="0.07" strokeWidth="1" />
        <polygon points="60,330 180,300 300,330 180,360" fill="none" stroke="white" strokeOpacity="0.07" strokeWidth="1" />

        <line x1="60" y1="90" x2="60" y2="210" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
        <line x1="60" y1="210" x2="60" y2="330" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
        <line x1="300" y1="90" x2="300" y2="210" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
        <line x1="300" y1="210" x2="300" y2="330" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
        <line x1="180" y1="120" x2="180" y2="240" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
        <line x1="180" y1="240" x2="180" y2="360" stroke="white" strokeOpacity="0.05" strokeWidth="1" />

        <line x1="180" y1="60" x2="180" y2="180" stroke="#4561b4" strokeOpacity="0.4" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
        <Eyebrow tone="on-dark">Nossa tese</Eyebrow>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          Hotelaria como classe de ativo imobiliário.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          Para a PPA, um hotel não é apenas um edifício. É um ativo imobiliário operacional, cujo
          desempenho depende da integração entre o imóvel, o produto, a marca, a operação e o
          capital.
        </p>
      </div>
    </section>
  );
}
