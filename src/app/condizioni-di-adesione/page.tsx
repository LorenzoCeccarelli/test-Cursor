import { PageHero, Section } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Condizioni di adesione",
  description: "Condizioni economiche e di adesione a Track Academy.",
};

export default function CondizioniPage() {
  return (
    <>
      <PageHero
        kicker="Adesione"
        title="Condizioni di adesione"
        intro="Richiesta di informazioni, domanda di adesione alla società, iscrizione a un’attività e tesseramento federale sono passaggi distinti."
      />
      <Section className="max-w-3xl space-y-6 text-sm leading-relaxed text-ink-soft">
        <p>
          Il tesseramento non risulta completato automaticamente dopo un pagamento. Quote, durata e
          documenti richiesti vengono comunicati quando definiti e verificati.
        </p>
        <p>
          I pagamenti online verranno attivati solo dopo aver configurato il gestore, definito
          prezzi e condizioni e verificato il funzionamento.
        </p>
      </Section>
    </>
  );
}
