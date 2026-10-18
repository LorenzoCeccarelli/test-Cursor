import { ButtonLink } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valutazione e preparazione atletica",
  description: "Valutazione delle capacità motorie e programmazione della forza in funzione degli obiettivi.",
};

export default function ValutazionePage() {
  return (
    <>
      <PageHero
        kicker="Valutazione e preparazione atletica"
        title="Capire il punto di partenza, orientare il lavoro"
        intro="Valutazione delle capacità motorie e della prestazione, lavoro sulla forza e programmazione in funzione degli obiettivi individuali o della disciplina praticata."
      >
        <ButtonLink href="/inizia-il-tuo-percorso/">Richiedi una valutazione iniziale</ButtonLink>
      </PageHero>
      <Section>
        <p className="max-w-3xl leading-relaxed text-ink-soft">
          I dati raccolti aiutano a definire il punto di partenza, orientare il lavoro e
          monitorare i progressi. Descriviamo esclusivamente test, strumenti e servizi realmente
          disponibili: non presentiamo laboratori, apparecchiature o prestazioni diagnostiche che
          non offriamo.
        </p>
        <p className="mt-6 max-w-3xl text-sm text-ink-soft">
          La preparazione atletica resta un’attività tecnica e sportiva, distinta da prestazioni
          sanitarie.
        </p>
      </Section>
    </>
  );
}
