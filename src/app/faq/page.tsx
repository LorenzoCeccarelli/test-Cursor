import { PageHero, Section } from "@/components/PageHero";
import { faqs } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Risposte alle domande più frequenti su Track Academy.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero kicker="FAQ" title="Domande frequenti" intro="Risposte sulle condizioni effettive, senza prove gratuite, rimborsi o orari inventati." />
      <Section>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="rounded-3xl border border-line p-5">
              <summary className="cursor-pointer font-display text-xl">{item.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
