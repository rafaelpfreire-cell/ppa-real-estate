import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AboutClosingSection } from "@/components/sections/a-ppa/closing";
import { AboutHeroSection } from "@/components/sections/a-ppa/hero";
import { AboutHospitalityThesisSection } from "@/components/sections/a-ppa/hospitality-thesis";
import { AboutOperatingModelSection } from "@/components/sections/a-ppa/operating-model";
import { AboutOurRoleSection } from "@/components/sections/a-ppa/our-role";
import { AboutWhoWeAreSection } from "@/components/sections/a-ppa/who-we-are";

export const metadata: Metadata = {
  title: "A PPA | PPA Real Estate",
  description:
    "Conheça a PPA Real Estate: como nascemos, nosso papel na estruturação de empreendimentos imobiliários e por que a hotelaria é hoje nossa principal tese.",
  alternates: {
    canonical: "/a-ppa",
  },
  openGraph: {
    title: "A PPA | PPA Real Estate",
    description:
      "Conheça a PPA Real Estate: como nascemos, nosso papel na estruturação de empreendimentos imobiliários e por que a hotelaria é hoje nossa principal tese.",
    url: "/a-ppa",
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

export default function APpaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AboutHeroSection />
        <AboutWhoWeAreSection />
        <AboutOurRoleSection />
        <AboutOperatingModelSection />
        <AboutHospitalityThesisSection />
        <AboutClosingSection />
      </main>
      <Footer />
    </>
  );
}
