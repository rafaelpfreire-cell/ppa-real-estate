import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ContatoMainSection } from "@/components/sections/contato/contact-main";

export const metadata: Metadata = {
  title: "Contato | PPA Real Estate",
  description:
    "Fale com a PPA Real Estate sobre investimentos, oportunidades imobiliárias, parcerias estratégicas e assuntos institucionais.",
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: "Contato | PPA Real Estate",
    description:
      "Fale com a PPA Real Estate sobre investimentos, oportunidades imobiliárias, parcerias estratégicas e assuntos institucionais.",
    url: "/contato",
    siteName: "PPA Real Estate",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/web/institucional-parceria-accor-ibis-ppa.jpg",
        width: 2400,
        height: 1600,
        alt: "PPA Real Estate",
      },
    ],
  },
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ContatoMainSection />
      </main>
      <Footer hideContact />
    </>
  );
}
