import { ButtonLink } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { PageHero, Section } from "@/components/PageHero";
import { site } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Scrivi a Track Academy, chiama o usa WhatsApp. Sedi a Lecce, Melissano e Torino.",
};

const venues = [
  {
    city: "Lecce",
    note: "Referente attività: Manola Ponzetta. Impianto, indirizzo, accesso, orari e attività: da pubblicare quando confermati.",
  },
  {
    city: "Melissano",
    note: "Scheda operativa da completare con dati confermati. Non è un progetto di espansione presentato come struttura già attiva.",
  },
  {
    city: "Torino",
    note: "Scheda operativa da completare con dati confermati. L’esperienza di un tecnico presso un ente non equivale a una partnership della società.",
  },
];

export default function ContattiPage() {
  return (
    <>
      <PageHero
        kicker="Contatti"
        title="Parla con un tecnico"
        intro="Distinguiamo sede legale e luoghi di allenamento. Pubblichiamo soltanto sedi e attività confermate."
      >
        <ButtonLink href={`mailto:${site.email}`} external>
          Email
        </ButtonLink>
        <ButtonLink href={site.phoneFrancescoHref} variant="secondary" external>
          {site.phoneFrancesco}
        </ButtonLink>
        <ButtonLink href={site.waFrancesco} variant="ghost" external>
          WhatsApp
        </ButtonLink>
      </PageHero>
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">Modulo informazioni</h2>
            <p className="mt-3 text-sm text-ink-soft">
              Nome, email o telefono, attività, sede preferita e messaggio. Nessun dato sanitario.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-line p-6">
              <h2 className="font-display text-2xl">Recapiti</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                <li>
                  Email: <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  Francesco Lorenzo: <a href={site.phoneFrancescoHref}>{site.phoneFrancesco}</a>
                </li>
                <li>
                  Manola Ponzetta: <a href={site.phoneManolaHref}>{site.phoneManola}</a>
                </li>
                <li>
                  PEC: <a href={`mailto:${site.pec}`}>{site.pec}</a>
                </li>
              </ul>
            </div>
            {venues.map((venue) => (
              <article key={venue.city} className="rounded-3xl border border-line p-6">
                <h3 className="font-display text-2xl">{venue.city}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{venue.note}</p>
              </article>
            ))}
            <p className="text-sm text-muted">
              I social vengono collegati soltanto quando sono disponibili gli indirizzi ufficiali
              esatti.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
