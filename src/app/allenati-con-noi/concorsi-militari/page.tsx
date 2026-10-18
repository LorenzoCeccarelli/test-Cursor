import { ButtonLink } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concorsi militari",
  description: "Preparazione alle prove di efficienza fisica dei concorsi militari e delle Forze dell’Ordine.",
};

export default function ConcorsiPage() {
  return (
    <>
      <PageHero
        kicker="Concorsi militari"
        title="Preparare le prove fisiche con metodo"
        intro="Percorso dedicato alle prove di efficienza fisica dei concorsi militari e delle Forze dell’Ordine."
      >
        <ButtonLink href="/inizia-il-tuo-percorso/">Prepara le tue prove fisiche</ButtonLink>
      </PageHero>
      <Section>
        <p className="max-w-3xl leading-relaxed text-ink-soft">
          Il lavoro comprende valutazione iniziale, programmazione personalizzata, allenamento
          delle capacità richieste, cura dell’esecuzione tecnica, simulazioni e monitoraggio dei
          risultati.
        </p>
        <p className="mt-6 max-w-3xl leading-relaxed text-ink-soft">
          Prove e parametri cambiano tra i bandi: non vengono presentati come universali. Ogni
          aggiornamento relativo a un concorso riporterà anno, fonte ufficiale e data di verifica.
          I bandi scaduti non restano in evidenza come opportunità aperte. Non garantiamo il
          superamento delle prove.
        </p>
      </Section>
    </>
  );
}
