import Link from "next/link";
import { email, instagram, linkedin, offices, whatsapp } from "@/lib/contact";
import { primaryNavItems } from "@/lib/navigation";

type FooterProps = {
  hideContact?: boolean;
};

export function Footer({ hideContact = false }: FooterProps) {
  const year = new Date().getFullYear();

  const gridClassName = hideContact
    ? "mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 md:gap-10 md:py-16 md:px-10 lg:gap-8"
    : "mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 md:gap-10 md:py-16 md:px-10 lg:grid-cols-4 lg:gap-8";

  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className={gridClassName}>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element -- logo vetorial oficial, sem necessidade de otimização raster */}
          <img
            src="/assets/brand/PPA-Marca.svg"
            alt="PPA Real Estate"
            width={176}
            height={110}
            className="h-9 w-auto md:h-10"
          />
          <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
            Arquitetamos oportunidades imobiliárias estratégicas.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/60">
            Escritórios
          </p>
          <div className="mt-4 space-y-6">
            {offices.map((office) => (
              <address key={office.city} className="text-sm not-italic leading-relaxed text-charcoal/80">
                <p className="font-medium text-ink">{office.city}</p>
                {office.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            ))}
          </div>
        </div>

        {hideContact ? null : (
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/60">
              Contato
            </p>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <a
                  href={whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chamar a PPA Real Estate no WhatsApp (abre em nova guia)"
                  className="inline-block text-charcoal/80 transition-colors duration-200 hover:text-ink"
                >
                  <span className="block">{whatsapp.display}</span>
                  <span className="block text-xs text-charcoal/50">WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="text-charcoal/80 transition-colors duration-200 hover:text-ink"
                >
                  {email}
                </a>
              </li>
            </ul>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da PPA Real Estate (abre em nova guia)"
                  className="text-charcoal/80 transition-colors duration-200 hover:text-ink"
                >
                  Instagram <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn da PPA Real Estate (abre em nova guia)"
                  className="text-charcoal/80 transition-colors duration-200 hover:text-ink"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </div>
        )}

        <nav aria-label="Navegação institucional">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/60">
            Navegação
          </p>
          <ul className="mt-4 space-y-3 text-sm text-charcoal">
            {primaryNavItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors duration-200 hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
          <p className="text-xs text-charcoal/60">
            © {year} PPA Real Estate. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
