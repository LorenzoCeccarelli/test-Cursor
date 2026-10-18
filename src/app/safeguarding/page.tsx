import { PageHero, Section } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safeguarding",
  description: "Tutela dei minori e prevenzione degli abusi in Track Academy.",
};

export default function SafeguardingPage() {
  return (
    <>
      <PageHero
        kicker="Safeguarding"
        title="Tutela e prevenzione"
        intro="Pubblichiamo documenti adottati, responsabile formalmente nominato e canale effettivo di segnalazione. Non inventiamo procedure o contatti."
      />
      <Section className="max-w-3xl text-sm leading-relaxed text-ink-soft">
        <p>
          Questa pagina è predisposta per i documenti di safeguarding della società. Fino alla
          nomina formale del responsabile e all’indicazione del canale di segnalazione, le
          richieste possono essere indirizzate ai recapiti generali o, per comunicazioni formali,
          alla PEC.
        </p>
      </Section>
    </>
  );
}
