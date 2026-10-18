import { ContactForm } from "@/components/ContactForm";
import { PageHero, Section } from "@/components/PageHero";
import { services } from "@/content/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inizia il tuo percorso",
  description: "Raccontaci obiettivo e disponibilità. Un tecnico ti indica il percorso Track Academy più adatto.",
};

export default function StartPage() {
  return (
    <>
      <PageHero
        kicker="Inizia il tuo percorso"
        title="Dal colloquio al programma"
        intro="La performance nasce dal metodo: niente risultati garantiti, un lavoro strutturato e individualizzato."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-2xl">Scegli un’attività oppure scrivici</h2>
            <ul className="mt-6 space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.href}>
                  <Link className="text-petrol" href={service.href}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
