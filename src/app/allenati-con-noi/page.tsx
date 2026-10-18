import { PageHero, Section } from "@/components/PageHero";
import { services } from "@/content/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Allenati con noi",
  description: "Percorsi Track Academy: scuola di atletica, agonismo, running, coaching, concorsi e University Running.",
};

export default function TrainingIndexPage() {
  return (
    <>
      <PageHero
        kicker="Allenati con noi"
        title="Un percorso per ogni obiettivo"
        intro="Dalla scuola di atletica alla preparazione agonistica, dal running amatoriale ai concorsi militari. Scegli la pagina del servizio e chiedi informazioni."
      />
      <Section>
        <div className="grid gap-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="rounded-3xl border border-line p-6 hover:border-petrol/40"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-petrol">{service.kicker}</p>
              <h2 className="mt-2 font-display text-2xl">{service.title}</h2>
              <p className="mt-2 max-w-3xl text-sm text-ink-soft">{service.text}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
