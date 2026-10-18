import { ButtonLink } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { coaches, methodSteps, services, site } from "@/content/site";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <PageHero
        kicker="Track Academy"
        title={site.slogan}
        intro="Atletica leggera, running e preparazione atletica. Percorsi individualizzati per chi inizia, per chi vuole migliorarsi e per chi si prepara a competere."
      >
        <ButtonLink href="/inizia-il-tuo-percorso/">Scopri il tuo percorso</ButtonLink>
        <ButtonLink href="/contatti/" variant="secondary">
          Parla con un tecnico
        </ButtonLink>
      </PageHero>

      <Section>
        <Reveal>
          <p className="max-w-3xl text-xl leading-relaxed text-ink-soft">
            Track Academy unisce competenza sul campo, programmazione dell’allenamento e attenzione
            alle evidenze scientifiche. Ogni percorso parte dalla persona: esperienza,
            caratteristiche, disponibilità e obiettivi.
          </p>
        </Reveal>
      </Section>

      <section className="border-y border-line bg-paper-2/60">
        <Section>
          <p className="text-xs uppercase tracking-[0.2em] text-petrol">Percorsi</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
            Trova l’attività adatta a te
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.href} delay={index * 0.04}>
                <Link
                  href={service.href}
                  className="group block h-full rounded-3xl border border-line bg-paper p-6 transition hover:border-petrol/40"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-petrol">{service.kicker}</p>
                  <h3 className="mt-3 font-display text-2xl tracking-tight">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{service.text}</p>
                  <span className="mt-5 inline-block text-sm text-petrol">Apri la pagina</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      </section>

      <Section>
        <p className="text-xs uppercase tracking-[0.2em] text-petrol">Il metodo</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight sm:text-4xl">
          Un lavoro strutturato, individualizzato, orientato agli obiettivi
        </h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {methodSteps.map((step, index) => (
            <li key={step.title} className="rounded-3xl border border-line p-6">
              <span className="text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-display text-xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <ButtonLink href="/track-academy/" variant="ghost">
            Leggi identità e metodo
          </ButtonLink>
        </div>
      </Section>

      <section className="border-y border-line">
        <Section>
          <p className="text-xs uppercase tracking-[0.2em] text-petrol">Tecnici</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">Chi ti segue</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {coaches.map((coach) => (
              <Link
                key={coach.slug}
                href={`/tecnici/${coach.slug}/`}
                className="rounded-3xl border border-line p-6 hover:border-petrol/40"
              >
                <div className="grid h-40 place-items-center rounded-2xl bg-paper-2">
                  <span className="font-display text-4xl text-petrol">
                    {coach.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl">{coach.name}</h3>
                <p className="mt-2 text-sm text-ink-soft">{coach.title}</p>
              </Link>
            ))}
          </div>
        </Section>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-petrol">Sedi</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight">Lecce, Melissano, Torino</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Le schede con impianto, indirizzo, accesso, attività e orari vengono pubblicate
              soltanto per le sedi e le attività confermate. La sede legale non è un punto di
              ritrovo per gli allenamenti.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-petrol">Academy</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight">Contenuti divulgativi</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Curiosità, letteratura scientifica, View e news verranno aggiornati dopo verifica
              dei testi e autorizzazione di fotografie e video.
            </p>
            <div className="mt-6">
              <ButtonLink href="/academy/curiosita/" variant="ghost">
                Vai ad Academy
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Inizia il tuo percorso</h2>
          <p className="mt-4 max-w-2xl text-paper/75">
            Raccontaci esperienza, disponibilità e obiettivo. Un tecnico ti indica il percorso più
            adatto, senza promesse di risultati garantiti.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contatti/">Parla con un tecnico</ButtonLink>
            <ButtonLink href={site.waFrancesco} variant="onDark" external>
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
