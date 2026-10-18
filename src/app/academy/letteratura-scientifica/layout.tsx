import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Letteratura scientifica",
  description:
    "Sintesi di studi su corsa, forza, biomeccanica, recupero, valutazione e allenamento giovanile.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
