import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

// "outline" pressupõe fundo escuro (usa texto e borda brancos).
const variantClasses: Record<Variant, string> = {
  solid: "bg-accent text-white hover:bg-accent/90",
  outline: "border border-white/40 text-white hover:border-white hover:bg-white/5",
};

export function CtaLink({ href, children, variant = "solid", className = "" }: CtaLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${
        variantClasses[variant]
      }${className ? ` ${className}` : ""}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
