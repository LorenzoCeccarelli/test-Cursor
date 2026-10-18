import { PageHero, Section } from "@/components/PageHero";
import { site } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Informativa sul trattamento dei dati personali di Track Academy.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Privacy"
        title="Informativa sul trattamento dei dati"
        intro="Versione di anteprima, da allineare al titolare del trattamento e ai documenti ufficiali prima del lancio."
      />
      <Section className="max-w-3xl space-y-6 text-sm leading-relaxed text-ink-soft">
        <p>
          Il modulo di contatto raccoglie nome, email o telefono, attività di interesse, sede
          preferita e messaggio, per rispondere alle richieste di informazioni. Non chiediamo
          certificati medici o dati sanitari in questo modulo.
        </p>
        <p>
          Titolare e base giuridica verranno indicati con la denominazione legale esatta. Recapito:
          {` ${site.email}`}. Per comunicazioni formali: {site.pec}.
        </p>
        <p>
          I dati non vengono usati per profilazione. Non è attiva un’area atleta. I pagamenti online
          non sono attivi.
        </p>
      </Section>
    </>
  );
}
