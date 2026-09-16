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

export const metadata: Metadata = {
  title: "PPA Real Estate | Investimentos Imobiliários Estratégicos",
  description:
    "A PPA Real Estate desenvolve e estrutura empreendimentos imobiliários voltados ao investidor, com foco atual em hotelaria.",
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
