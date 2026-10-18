import { PageHero, Section } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curiosità",
  description: "Rubriche divulgative Track Academy: Miti da spogliatoio e Atletica spiegata bene.",
};

const rubrics = [
  {
    title: "Miti da spogliatoio",
    text: "Domande concrete, spiegazioni comprensibili e collegamento agli approfondimenti scientifici pertinenti.",
  },
  {
    title: "Atletica spiegata bene",
    text: "Letture accessibili di gesti, metodi e scelte di allenamento, senza titoli sensazionalistici.",
  },
];

const drafts = [
  "Stretching e dolori muscolari tardivi",
  "Stretching prima della prestazione",
  "Defaticamento e recupero",
  "Rincorsa e stacco nel salto in alto",
  "Forza per il runner",
  "Interpretazione dei test di valutazione",
];

export default function CuriositaPage() {
  return (
    <>
      <PageHero
        kicker="Curiosità"
        title="Capire l’allenamento, senza slogan"
        intro="Le rubriche partono da una domanda concreta. I testi vengono pubblicati dopo verifica: le bozze non sono articoli online."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {rubrics.map((item) => (
            <article key={item.title} className="rounded-3xl border border-line p-6">
              <h2 className="font-display text-2xl">{item.title}</h2>
              <p className="mt-3 text-sm text-ink-soft">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="font-display text-2xl">Bozze in verifica</h2>
          <p className="mt-3 max-w-2xl text-sm text-ink-soft">
            Elenco di lavoro interno, non ancora pubblicato come articoli. Evitiamo conclusioni
            assolute e semplificazioni che alterino il significato degli studi.
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-ink-soft">
            {drafts.map((item) => (
              <li key={item} className="rounded-2xl border border-dashed border-line px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
