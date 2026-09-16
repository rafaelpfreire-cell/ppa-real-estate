import type { ReactNode } from "react";

type Tone = "accent" | "on-dark" | "on-light";

type EyebrowProps = {
  children: ReactNode;
  tone?: Tone;
  className?: string;
};

const toneClasses: Record<Tone, string> = {
  accent: "text-accent",
  "on-dark": "text-white/60",
  "on-light": "text-charcoal/60",
};

export function Eyebrow({ children, tone = "accent", className = "" }: EyebrowProps) {
  return (
    <p
      className={`font-sans text-xs font-semibold uppercase tracking-[0.3em] ${toneClasses[tone]}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </p>
  );
}
