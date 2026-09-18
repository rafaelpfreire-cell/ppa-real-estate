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
