import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Epilogue, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const siteTitle = "PPA Real Estate | Investimentos Imobiliários Estratégicos";
const siteDescription =
  "A PPA Real Estate desenvolve e estrutura empreendimentos imobiliários voltados ao investidor, com foco atual em hotelaria.";

export const metadata: Metadata = {
  metadataBase: new URL("https://pparealestate.com.br"),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://pparealestate.com.br",
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
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/web/institucional-parceria-accor-ibis-ppa.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${epilogue.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
