import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ImprensaCoverageSection } from "@/components/sections/imprensa/coverage";
import { ImprensaFeaturedSection } from "@/components/sections/imprensa/featured";
import { ImprensaOpeningSection } from "@/components/sections/imprensa/opening";
import { ImprensaPressContactSection } from "@/components/sections/imprensa/press-contact";

export const metadata: Metadata = {
  title: "Imprensa | PPA Real Estate",
  description:
    "Projetos, movimentos e parcerias da PPA Real Estate acompanhados pela imprensa e pelo mercado.",
  alternates: {
    canonical: "/imprensa",
  },
  openGraph: {
    title: "Imprensa | PPA Real Estate",
    description:
      "Projetos, movimentos e parcerias da PPA Real Estate acompanhados pela imprensa e pelo mercado.",
    url: "/imprensa",
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

export default function ImprensaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ImprensaOpeningSection />
        <ImprensaFeaturedSection />
        <ImprensaCoverageSection />
        <ImprensaPressContactSection />
      </main>
      <Footer />
    </>
  );
}
