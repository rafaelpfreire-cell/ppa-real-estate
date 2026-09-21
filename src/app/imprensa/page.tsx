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
