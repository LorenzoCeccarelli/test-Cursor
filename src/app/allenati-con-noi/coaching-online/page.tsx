import { ButtonLink } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coaching online",
  description: "Allenamento a distanza per la corsa, mezzofondo, fondo ed endurance.",
};

const steps = [
  "Raccolta delle informazioni iniziali",
  "Definizione degli obiettivi",
  "Programma individualizzato",
  "Raccolta dei feedback",
  "Monitoraggio",
  "Aggiornamento della preparazione",
];

export default function CoachingPage() {
  return (
    <>
      <PageHero
        kicker="Coaching online"
        title="Un programma a distanza, costruito sulla persona"
        intro="Servizio di allenamento a distanza per la corsa, con particolare attenzione a mezzofondo, fondo ed endurance."
      >
        <ButtonLink href="/inizia-il-tuo-percorso/">Scopri il coaching online</ButtonLink>
      </PageHero>
      <Section>
        <ol className="grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step} className="rounded-3xl border border-line p-6">
              <span className="text-xs text-petrol">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-2 font-display text-xl">{step}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-soft">
          Frequenza degli aggiornamenti, strumenti, modalità di comunicazione e tempi di risposta
          vengono indicati sulla base del servizio effettivamente offerto. Non promettiamo
          assistenza continua o aggiornamenti illimitati se non previsti.
        </p>
      </Section>
    </>
  );
}
