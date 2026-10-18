import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/content/site";
import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: {
    default: "Track Academy | La performance nasce dal metodo",
    template: "%s | Track Academy",
  },
  description:
    "Atletica leggera, running e preparazione atletica. Percorsi individualizzati per chi inizia, per chi vuole migliorarsi e per chi si prepara a competere.",
  robots: site.previewNoIndex ? { index: false, follow: false } : { index: true, follow: true },
  openGraph: {
    title: "Track Academy",
    description: site.slogan,
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className={`${outfit.variable} ${fraunces.variable} antialiased`}>
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
