import { PageHero, Section } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "View – Foto e video",
  description: "La vita di Track Academy in immagini e video autorizzati.",
};

const albums = [
  "Allenamenti",
  "Gare",
  "Eventi",
  "Scuola di atletica",
  "Gruppo agonistico",
  "University Running",
  "Vita del gruppo",
];

export default function ViewPage() {
  return (
    <>
      <PageHero
        kicker="View"
        title="La vita di Track Academy"
        intro="Spazio per immagini e video della società. Ogni contenuto può avere titolo, descrizione, data e luogo. I video non partono automaticamente con l’audio."
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {albums.map((album) => (
            <article key={album} className="rounded-3xl border border-line p-6">
              <div className="grid h-40 place-items-center rounded-2xl bg-paper-2 text-sm text-muted">
                Album vuoto
              </div>
              <h2 className="mt-4 font-display text-xl">{album}</h2>
              <p className="mt-2 text-sm text-ink-soft">
                Pubblichiamo solo materiali autorizzati, con attenzione particolare alle immagini
                dei minorenni.
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
