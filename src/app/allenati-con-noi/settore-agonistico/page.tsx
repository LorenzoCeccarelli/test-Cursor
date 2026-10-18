import { ButtonLink } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settore agonistico",
  description: "Preparazione alle competizioni con attenzione a mezzofondo, fondo ed endurance.",
};

export default function AgonisticoPage() {
  return (
    <>
      <PageHero
        kicker="Settore agonistico"
        title="Allenarsi con metodo. Prepararsi a competere."
        intro="Un percorso dedicato agli atleti che vogliono affrontare le competizioni e migliorare la propria prestazione, con particolare attenzione al mezzofondo, al fondo e alle discipline di endurance."
      >
        <ButtonLink href="/inizia-il-tuo-percorso/">Entra nel gruppo agonistico</ButtonLink>
        <ButtonLink href="/contatti/" variant="secondary">
          Parla con un tecnico
        </ButtonLink>
      </PageHero>
      <Section>
        <p className="max-w-3xl leading-relaxed text-ink-soft">
          La preparazione parte dalla valutazione dell’atleta e dalla definizione degli obiettivi
          stagionali. Integra programmazione individualizzata, sviluppo della tecnica, allenamento
          della forza e delle capacità specifiche, gestione dei carichi e monitoraggio dei
          progressi. Il calendario agonistico orienta il lavoro, alternando preparazione,
          competizioni e recupero.
        </p>
        <div className="mt-12 rounded-3xl border border-line p-8">
          <h2 className="font-display text-3xl">Il gruppo agonistico Track Academy</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Il gruppo è uno spazio di crescita sportiva e confronto. Gli atleti condividono
            allenamenti, impegno e appuntamenti agonistici, seguendo programmi adeguati al proprio
            livello, alle specialità praticate e agli obiettivi personali.
          </p>
          <p className="mt-4 font-medium text-ink">
            Allenarsi insieme non significa svolgere tutti lo stesso lavoro: distanze, ritmi,
            recuperi e carichi vengono individualizzati.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-line p-6">
            <h3 className="font-display text-xl">Calendario, atleti, risultati</h3>
            <p className="mt-3 text-sm text-ink-soft">
              Calendario delle competizioni, presentazioni degli atleti e risultati del gruppo
              vengono pubblicati esclusivamente se documentati e autorizzati.
            </p>
          </article>
          <article className="rounded-3xl border border-line p-6">
            <h3 className="font-display text-xl">Inserimento</h3>
            <p className="mt-3 text-sm text-ink-soft">
              Tecnici responsabili, sedi, orari, tesseramento e documentazione richiesta vengono
              indicati quando definiti. Non applichiamo soglie prestative di accesso non stabilite
              dalla società.
            </p>
          </article>
        </div>
        <p className="mt-10 text-sm text-ink-soft">
          Dalla Scuola di atletica è possibile un passaggio graduale all’agonismo, sulla base della
          crescita, della motivazione e della valutazione tecnica dell’allievo.
        </p>
      </Section>
    </>
  );
}
