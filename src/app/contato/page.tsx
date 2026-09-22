import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ContatoMainSection } from "@/components/sections/contato/contact-main";

export const metadata: Metadata = {
  title: "Contato | PPA Real Estate",
  description:
    "Fale com a PPA Real Estate sobre investimentos, oportunidades imobiliárias, parcerias estratégicas e assuntos institucionais.",
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
