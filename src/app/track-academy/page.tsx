import { ButtonLink } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import { methodSteps, values } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Academy e il metodo",
  description:
    "Identità, missione e metodo di lavoro di Track Academy: individualizzazione, continuità e rigore tecnico.",
};

export default function TrackAcademyPage() {
  return (
    <>
      <PageHero
        kicker="Track Academy"
        title="Identità, missione e metodo"
        intro="Track Academy è un’associazione sportiva dedicata all’atletica leggera, al running, al mezzofondo, al fondo, all’endurance e alla preparazione atletica, anche per concorsi militari."
      >
        <ButtonLink href="/inizia-il-tuo-percorso/">Inizia il tuo percorso</ButtonLink>
      </PageHero>
      <Section>
        <h2 className="font-display text-3xl tracking-tight">Valori</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-3xl border border-line p-6">
              <h3 className="font-display text-xl">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <section className="border-y border-line bg-paper-2/50">
        <Section>
          <h2 className="font-display text-3xl tracking-tight">Il percorso di lavoro</h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Il programma viene costruito tenendo conto dell’esperienza, delle caratteristiche
            individuali, degli impegni e degli obiettivi dell’atleta.
          </p>
          <ol className="mt-10 space-y-4">
            {methodSteps.map((step, index) => (
              <li key={step.title} className="grid gap-2 border-b border-line pb-4 md:grid-cols-[5rem_1fr]">
                <span className="text-sm text-petrol">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-xl">{step.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>
      </section>
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl tracking-tight">Gruppo e individualizzazione</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              L’allenamento di gruppo è compatibile con percorsi personalizzati: condividere un
              allenamento non significa utilizzare gli stessi ritmi, carichi e recuperi.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-tight">Preparazione atletica</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              La preparazione atletica è un’attività tecnica e sportiva. Non è una prestazione
              sanitaria. Non promettiamo zero infortuni, risultati assicurati o il superamento
              garantito di un concorso.
            </p>
          </div>
        </div>
        <div className="mt-12 rounded-3xl border border-line p-6">
          <h2 className="font-display text-2xl">Convenzioni, collaborazioni e tirocini</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
            Questo spazio è riservato ad accordi attivi e verificati, con loghi autorizzati.
            L’esperienza di un tecnico presso un ente non viene presentata automaticamente come
            partnership della società.
          </p>
        </div>
      </Section>
    </>
  );
}
