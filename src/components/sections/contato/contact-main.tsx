import { email, instagram, linkedin, whatsapp } from "@/lib/contact";
import { Eyebrow } from "@/components/ui/eyebrow";

export function ContatoMainSection() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <Eyebrow tone="on-light">Contato</Eyebrow>
            <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Vamos conversar sobre a próxima oportunidade.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/80">
              Investimentos, terrenos, parcerias estratégicas ou assuntos institucionais. Fale
              diretamente com a PPA Real Estate.
            </p>
            <p className="mt-8 text-sm text-charcoal/50">
              Investimentos · Terrenos · Parcerias · Imprensa
            </p>
          </div>

          <div className="bg-ink px-6 py-10 text-white md:px-10 md:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
              Fale com a PPA
            </p>

            <div className="mt-6 divide-y divide-white/15">
              <a href={whatsapp.url} target="_blank" rel="noreferrer" className="block py-5 first:pt-0">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                  WhatsApp
                </p>
                <p className="mt-2 inline-flex items-center gap-1 font-display text-lg font-semibold sm:text-xl">
                  {whatsapp.display} <span aria-hidden="true">↗</span>
                </p>
              </a>

              <a href={`mailto:${email}`} className="block py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                  E-mail
                </p>
                <p className="mt-2 font-display text-lg font-semibold sm:text-xl">{email}</p>
              </a>

              <a href={linkedin} target="_blank" rel="noreferrer" className="block py-5 last:pb-0">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                  LinkedIn
                </p>
                <p className="mt-2 inline-flex items-center gap-1 font-display text-lg font-semibold sm:text-xl">
                  PPA Real Estate <span aria-hidden="true">↗</span>
                </p>
              </a>
            </div>

            <div className="mt-8 border-t border-white/15 pt-6">
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-col text-white/60 hover:text-white"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                  Instagram
                </span>
                <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-white/70">
                  @pparealestate <span aria-hidden="true">↗</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
