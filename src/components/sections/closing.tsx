import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";

const paths = [
  {
    title: "Quero conhecer oportunidades de investimento",
    href: "/contato",
  },
  {
    title: "Tenho um terreno, ativo ou oportunidade",
    href: "/contato",
  },
];

export function ClosingSection() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Eyebrow tone="on-dark">Vamos conversar</Eyebrow>
        <p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
          O mercado imobiliário não se move sozinho. Grandes negócios não acontecem por acaso —
          são desenhados, estruturados e planejados.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-white/15 sm:grid-cols-2">
          {paths.map((path) => (
            <Link
              key={path.title}
              href={path.href}
              className="group flex items-center justify-between gap-4 bg-ink px-8 py-10 transition-colors duration-200 hover:bg-charcoal"
            >
              <span className="font-display text-lg font-semibold leading-snug sm:text-xl">
                {path.title}
              </span>
              <span
                aria-hidden="true"
                className="text-2xl text-accent transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
