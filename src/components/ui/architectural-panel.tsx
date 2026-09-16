type Tone = "ink" | "charcoal";

type ArchitecturalPanelProps = {
  label?: string;
  note?: string;
  tone?: Tone;
  className?: string;
};

/*
 * Placeholder editorial para fotografia/render arquitetônico.
 * Substituir por asset final (foto ou render) quando disponível — usa
 * apenas geometria e paleta da marca via CSS/SVG, sem imagens externas,
 * stock photos ou extrações de baixa qualidade do PDF.
 */
const toneGradients: Record<Tone, string> = {
  ink: "linear-gradient(135deg, var(--charcoal), var(--ink))",
  charcoal: "linear-gradient(135deg, var(--ink), var(--charcoal))",
};

const verticalLines = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalLines = [1, 2, 3, 4, 5, 6];

export function ArchitecturalPanel({
  label,
  note = "Imagem final do projeto pendente de envio",
  tone = "charcoal",
  className = "",
}: ArchitecturalPanelProps) {
  return (
    <div
      className={`relative overflow-hidden${className ? ` ${className}` : ""}`}
      style={{
        backgroundImage: toneGradients[tone],
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
      }}
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-20"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        {verticalLines.map((position) => (
          <line
            key={`v-${position}`}
            x1={position * 11}
            y1={0}
            x2={position * 11}
            y2={100}
            stroke="white"
            strokeWidth={0.3}
          />
        ))}
        {horizontalLines.map((position) => (
          <line
            key={`h-${position}`}
            x1={0}
            y1={position * 14}
            x2={100}
            y2={position * 14}
            stroke="white"
            strokeWidth={0.3}
          />
        ))}
      </svg>

      <span className="absolute left-6 top-6 h-8 w-px bg-accent/70" aria-hidden="true" />

      {label ? (
        <p className="absolute bottom-5 left-5 right-5 font-display text-sm font-semibold uppercase tracking-wide text-white/90">
          {label}
        </p>
      ) : null}

      <p className="absolute right-5 top-5 hidden max-w-[9rem] text-right text-[0.6rem] uppercase leading-snug tracking-wide text-white/40 sm:block">
        {note}
      </p>
    </div>
  );
}
