import { ButtonLink } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Running e atletica",
  description: "Percorsi per iniziare a correre, acquisire continuità o migliorare, anche senza agonismo.",
};

export default function RunningPage() {
  return (
    <>
      <PageHero
        kicker="Running e atletica"
        title="Iniziare, continuare, migliorare"
        intro="Percorsi per chi vuole iniziare a correre, acquisire continuità o migliorare il proprio livello, anche senza obiettivi agonistici."
      >
        <ButtonLink href="/inizia-il-tuo-percorso/">Trova il tuo percorso di running</ButtonLink>
      </PageHero>
      <Section>
        <p className="max-w-3xl leading-relaxed text-ink-soft">
          Il lavoro riguarda tecnica di corsa, capacità di endurance, forza e progressione
          dell’allenamento, con programmi adattati alla persona. Il gruppo permette di condividere
          il percorso con altri atleti, senza trasformare ogni seduta in una gara.
        </p>
        <p className="mt-6 max-w-3xl leading-relaxed text-ink-soft">
          Questa proposta è distinta dal settore agonistico. Il passaggio da un percorso all’altro
          è possibile, sulla base di motivazione, disponibilità e valutazione tecnica. Gruppi
          Master e altre attività vengono presentati soltanto nelle sedi in cui sono effettivamente
          disponibili.
        </p>
      </Section>
    </>
  );
}
