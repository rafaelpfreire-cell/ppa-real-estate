import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TeseClosingSection } from "@/components/sections/tese/closing";
import { TeseHeroSection } from "@/components/sections/tese/hero";
import { TesePartnershipModelSection } from "@/components/sections/tese/partnership-model";
import { TesePillarsSection } from "@/components/sections/tese/pillars";
import { TeseSelectionProcessSection } from "@/components/sections/tese/selection-process";
import { TeseValueVectorsSection } from "@/components/sections/tese/value-vectors";
import { TeseWhyHospitalitySection } from "@/components/sections/tese/why-hospitality";

export const metadata: Metadata = {
  title: "Nossa Tese | PPA Real Estate",
  description:
    "Hotelaria como classe de ativo imobiliário: por que a PPA concentra sua tese em hotéis, como seleciona oportunidades e como estrutura seus empreendimentos.",
  alternates: {
    canonical: "/tese",
  },
  openGraph: {
    title: "Nossa Tese | PPA Real Estate",
    description:
      "Hotelaria como classe de ativo imobiliário: por que a PPA concentra sua tese em hotéis, como seleciona oportunidades e como estrutura seus empreendimentos.",
    url: "/tese",
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

export default function TesePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <TeseHeroSection />
        <TeseWhyHospitalitySection />
        <TesePillarsSection />
        <TeseSelectionProcessSection />
        <TeseValueVectorsSection />
        <TesePartnershipModelSection />
        <TeseClosingSection />
      </main>
      <Footer />
    </>
  );
}
