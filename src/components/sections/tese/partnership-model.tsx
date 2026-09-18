import { Eyebrow } from "@/components/ui/eyebrow";

export function TesePartnershipModelSection() {
  return (
    <section className="bg-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16 md:px-10 md:py-28">
        <div>
          <Eyebrow tone="on-dark">Como a tese se organiza</Eyebrow>
          <h2 className="mt-6 font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl md:text-4xl">
            Produto, marca, operação e estrutura precisam funcionar juntos.
          </h2>
        </div>

        <div className="max-w-xl">
          <p className="text-base leading-relaxed text-white/85">
            Em cada empreendimento, a PPA estrutura a tese a partir da integração entre produto
            imobiliário, bandeira hoteleira, operação especializada, capital e modelo de
            desenvolvimento. Essas dimensões precisam ser definidas de forma coordenada desde a
            origem, para que mercado, produto e operação façam sentido dentro de uma mesma
            estrutura.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-white/60">
            A configuração pode variar de projeto para projeto. O princípio permanece: construir
            uma estrutura coerente com a oportunidade identificada e com a lógica econômica do
            ativo.
          </p>
        </div>
      </div>
    </section>
  );
}
