import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ClosingSection } from "@/components/sections/closing";
import { CredibilitySection } from "@/components/sections/credibility";
import { HeroSection } from "@/components/sections/hero";
import { PortfolioSection } from "@/components/sections/portfolio";
import { StatsSection } from "@/components/sections/stats";
import { ThesisSection } from "@/components/sections/thesis";
import { WhatWeDoSection } from "@/components/sections/what-we-do";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <WhatWeDoSection />
        <ThesisSection />
        <PortfolioSection />
        <CredibilitySection />
        <ClosingSection />
      </main>
      <Footer />
    </>
  );
}
