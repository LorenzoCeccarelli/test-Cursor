"use client";

import { PageHero, Section } from "@/components/PageHero";
import { useMemo, useState } from "react";

const types = ["Allenamento", "Gara", "Incontro", "Evento universitario", "Iniziativa societaria"] as const;
const venues = ["Lecce", "Melissano", "Torino"] as const;

type EventItem = {
  title: string;
  date: string;
  place: string;
  audience: string;
  referrer: string;
  how: string;
  type: (typeof types)[number];
  venue: (typeof venues)[number];
  status: "confermato" | "modificato" | "annullato";
};

const events: EventItem[] = [];
const news: { title: string; date: string }[] = [];
const results: { title: string; date: string }[] = [];

export default function NewsPage() {
  const [type, setType] = useState<string>("Tutti");
  const [venue, setVenue] = useState<string>("Tutte");

  const filtered = useMemo(
    () =>
      events.filter((event) => {
        const typeOk = type === "Tutti" || event.type === type;
        const venueOk = venue === "Tutte" || event.venue === venue;
        return typeOk && venueOk;
      }),
    [type, venue],
  );

  return (
    <>
      <PageHero
        kicker="News e calendario"
        title="Appuntamenti, comunicazioni, risultati"
        intro="Calendario filtrabile per sede e tipo di attività. Pubblichiamo soltanto eventi reali e risultati documentati."
      />
      <Section>
        <div className="flex flex-wrap gap-3">
          <label className="grid gap-1 text-sm">
            Tipo
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
              className="min-h-11 rounded-xl border border-line bg-paper px-3"
            >
              <option>Tutti</option>
              {types.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-sm">
            Sede
            <select
              value={venue}
              onChange={(event) => setVenue(event.target.value)}
              className="min-h-11 rounded-xl border border-line bg-paper px-3"
            >
              <option>Tutte</option>
              {venues.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
        {filtered.length === 0 ? (
          <p className="mt-8 text-sm text-ink-soft">
            Nessun evento in calendario. Ogni voce riporterà data, luogo, destinatari, referente,
            modalità di partecipazione e stato (confermato, modificato o annullato).
          </p>
        ) : null}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <section>
            <h2 className="font-display text-2xl">News societarie</h2>
            {news.length === 0 ? (
              <p className="mt-3 text-sm text-ink-soft">Nessuna news pubblicata.</p>
            ) : null}
          </section>
          <section>
            <h2 className="font-display text-2xl">Risultati del gruppo agonistico</h2>
            {results.length === 0 ? (
              <p className="mt-3 text-sm text-ink-soft">Nessun risultato documentato in elenco.</p>
            ) : null}
          </section>
        </div>
      </Section>
    </>
  );
}
