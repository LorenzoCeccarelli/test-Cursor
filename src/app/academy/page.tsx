import { PageHero, Section } from "@/components/PageHero";
import { nav } from "@/content/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academy",
  description: "Curiosità, letteratura scientifica, View e news di Track Academy.",
};

export default function AcademyPage() {
  const items = nav.primary.find((item) => item.href === "/academy/")?.children ?? [];

  return (
    <>
      <PageHero
        kicker="Academy"
        title="Studio, divulgazione e vita del gruppo"
        intro="Uno spazio per capire l’allenamento, leggere gli studi con cautela e vedere la vita di Track Academy, quando i contenuti sono verificati e autorizzati."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-3xl border border-line p-6 hover:border-petrol/40">
              <h2 className="font-display text-2xl">{item.label}</h2>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
