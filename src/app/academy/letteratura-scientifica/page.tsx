"use client";

import { PageHero, Section } from "@/components/PageHero";
import { literatureFilters } from "@/content/site";
import { useState } from "react";

const syntheses: {
  title: string;
  category: (typeof literatureFilters)[number];
}[] = [];

export default function LetteraturaPage() {
  const [filter, setFilter] = useState<(typeof literatureFilters)[number] | "Tutti">("Tutti");
  const visible =
    filter === "Tutti" ? syntheses : syntheses.filter((item) => item.category === filter);

  return (
    <>
      <PageHero
        kicker="Letteratura scientifica"
        title="Leggere gli studi, distinguere i risultati"
        intro="Schede con riferimento bibliografico, tipo di studio, popolazione, quesito, risultati, limiti e implicazioni pratiche. I risultati dello studio restano distinti dall’interpretazione del tecnico."
      />
      <Section>
        <div className="flex flex-wrap gap-2">
          {(["Tutti", ...literatureFilters] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full border px-4 py-2 text-sm ${
                filter === item ? "border-petrol bg-petrol text-paper" : "border-line text-ink-soft"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        {visible.length === 0 ? (
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Nessuna sintesi pubblicata. Ogni scheda includerà titolo divulgativo, riferimento
            completo, anno, collegamento a DOI/PubMed/editore, autore della sintesi e date di
            pubblicazione e aggiornamento. Non inventiamo citazioni o DOI e non distribuiamo PDF
            senza diritto di utilizzo.
          </p>
        ) : (
          <ul className="mt-10 grid gap-4">
            {visible.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
