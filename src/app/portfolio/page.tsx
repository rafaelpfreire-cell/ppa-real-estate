import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PortfolioClosingSection } from "@/components/sections/portfolio/closing";
import { PortfolioOverviewSection } from "@/components/sections/portfolio/overview";
import { PortfolioProjectsSection } from "@/components/sections/portfolio/projects";

export const metadata: Metadata = {
  title: "Portfólio | PPA Real Estate",
  description:
    "Conheça o portfólio de empreendimentos hoteleiros desenvolvidos pela PPA Real Estate em diferentes mercados brasileiros.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PortfolioOverviewSection />
        <PortfolioProjectsSection />
        <PortfolioClosingSection />
      </main>
      <Footer />
    </>
  );
}
