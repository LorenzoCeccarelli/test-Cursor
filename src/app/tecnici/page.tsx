import { PageHero, Section } from "@/components/PageHero";
import { coaches } from "@/content/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tecnici",
  description: "Francesco Lorenzo e Manola Ponzetta, tecnici di Track Academy.",
};

export default function CoachesPage() {
  return (
    <>
      <PageHero
        kicker="Tecnici"
        title="Le persone che costruiscono il metodo"
        intro="La sezione tecnici presenta esclusivamente Francesco Lorenzo e Manola Ponzetta, con fotografia autentica quando disponibile."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {coaches.map((coach) => (
            <article key={coach.slug} className="rounded-3xl border border-line p-6">
              <div className="grid h-48 place-items-center rounded-2xl bg-paper-2">
                <p className="px-6 text-center text-sm text-muted">
                  Fotografia autentica da inserire in public/tecnici/{coach.slug}.jpg
                </p>
              </div>
              <h2 className="mt-6 font-display text-3xl">{coach.name}</h2>
              <p className="mt-2 text-sm text-ink-soft">{coach.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{coach.bio}</p>
              <Link className="mt-5 inline-block text-sm text-petrol" href={`/tecnici/${coach.slug}/`}>
                Pagina personale
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
