import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News e calendario",
  description: "Calendario, news societarie e risultati del gruppo agonistico Track Academy.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
