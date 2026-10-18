import { ButtonLink } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { PageHero, Section } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scuola di atletica",
  description: "Percorso di avviamento all’atletica leggera per bambini e ragazzi.",
};

export default function ScuolaPage() {
  return (
    <>
      <PageHero
        kicker="Scuola di atletica"
        title="Scoprire il movimento. Crescere attraverso lo sport."
        intro="Un percorso di avviamento all’atletica leggera rivolto a bambini e ragazzi, per imparare a correre, saltare e lanciare attraverso attività coinvolgenti e progressive, adeguate all’età e al livello di ciascuno."
      >
        <ButtonLink href="#informazioni">Richiedi informazioni sulla scuola di atletica</ButtonLink>
      </PageHero>
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl tracking-tight">Gioco, basi motorie, tecnica</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Gli allenamenti integrano gioco, sviluppo delle capacità motorie e apprendimento dei
              gesti tecnici. Si costruiscono basi motorie solide, fiducia nelle proprie capacità,
              collaborazione, rispetto delle regole e piacere di praticare sport.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-tight">Dalla scoperta alle discipline</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Il percorso va dalla scoperta delle discipline al loro progressivo approfondimento,
              con eventuale avvicinamento alle competizioni nel rispetto della crescita e delle
              motivazioni individuali.
            </p>
            <p className="mt-4 text-sm text-ink-soft">
              Fasce d’età, gruppi, sedi, giorni, orari, tecnici responsabili, quote e modalità di
              iscrizione vengono pubblicati quando confermati.
            </p>
          </div>
        </div>
        <p className="mt-10">
          <ButtonLink href="/allenati-con-noi/settore-agonistico/" variant="ghost">
            Passaggio verso il settore agonistico
          </ButtonLink>
        </p>
      </Section>
      <section id="informazioni" className="border-t border-line bg-paper-2/50">
        <Section>
          <h2 className="font-display text-3xl">Richiedi informazioni</h2>
          <div className="mt-8 max-w-2xl">
            <ContactForm activity="Scuola di atletica" />
          </div>
        </Section>
      </section>
    </>
  );
}
