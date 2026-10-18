import { PageHero, Section } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie",
  description: "Informativa cookie di Track Academy.",
};

export default function CookiePage() {
  return (
    <>
      <PageHero
        kicker="Cookie"
        title="Nessun banner decorativo"
        intro="In questa anteprima non utilizziamo strumenti di tracciamento o profilazione. Non mostriamo un banner cookie puramente estetico."
      />
      <Section className="max-w-3xl text-sm leading-relaxed text-ink-soft">
        <p>
          Il sito può usare cookie tecnici necessari al funzionamento, ad esempio per la sessione
          del server di hosting. Se in seguito verranno introdotti analytics o pixel, la presente
          pagina e il consenso verranno aggiornati prima dell’attivazione.
        </p>
      </Section>
    </>
  );
}
