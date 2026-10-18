import { ButtonLink } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import { site } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "University Running",
  description: "Progetto running per studenti universitari, con programma individualizzato e tesseramento FIDAL.",
};

const points = [
  "Programmi individualizzati",
  "Disponibilità sette giorni su sette per organizzare il percorso",
  "Possibilità di allenarsi insieme",
  "Tesseramento FIDAL incluso nell’offerta",
  "Maglia tecnica inclusa",
];

export default function UniversityPage() {
  return (
    <>
      <PageHero
        kicker="University Running"
        title="Il tuo obiettivo. La forza del gruppo."
        intro="Progetto dedicato agli studenti universitari che si avvicinano al running o già praticano corsa, mezzofondo ed endurance, con o senza obiettivi agonistici."
      >
        <ButtonLink href="/inizia-il-tuo-percorso/">Entra nel gruppo University Running</ButtonLink>
      </PageHero>
      <Section>
        <ul className="grid gap-3 md:grid-cols-2">
          {points.map((point) => (
            <li key={point} className="rounded-3xl border border-line p-5 text-ink-soft">
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl leading-relaxed text-ink-soft">
          La disponibilità sette giorni su sette serve a organizzare il percorso e non implica
          allenamento quotidiano obbligatorio o assistenza 24 ore su 24. Durata: {site.universityRunning.durationMonths} mesi.
        </p>
        <div className="mt-8 rounded-3xl border border-line p-6">
          <h2 className="font-display text-2xl">Quota</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            {site.universityRunning.priceNote}
          </p>
        </div>
      </Section>
    </>
  );
}
