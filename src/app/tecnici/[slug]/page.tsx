import { ButtonLink } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import { coaches } from "@/content/site";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return coaches.map((coach) => ({ slug: coach.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const coach = coaches.find((item) => item.slug === slug);
  if (!coach) return {};
  return {
    title: coach.name,
    description: coach.title,
  };
}

export default async function CoachPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const coach = coaches.find((item) => item.slug === slug);
  if (!coach) notFound();

  return (
    <>
      <PageHero kicker="Tecnici" title={coach.name} intro={coach.title}>
        <ButtonLink href={coach.phoneHref} external>
          Chiama
        </ButtonLink>
        <ButtonLink href={coach.wa} variant="secondary" external>
          WhatsApp
        </ButtonLink>
        <ButtonLink href={`mailto:${coach.email}`} variant="ghost" external>
          Email
        </ButtonLink>
      </PageHero>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="leading-relaxed text-ink-soft">{coach.bio}</p>
            <ul className="mt-8 space-y-2 text-sm text-ink-soft">
              {coach.highlights.map((item) => (
                <li key={item} className="border-b border-line py-2">
                  {item}
                </li>
              ))}
            </ul>
            {coach.slug === "francesco-lorenzo" ? (
              <p className="mt-6 text-sm text-muted">
                Tutorato e docenza restano incarichi distinti. Curriculum scaricabile: da caricare
                in public/documenti quando aggiornato e privo di dati personali non necessari.
              </p>
            ) : (
              <p className="mt-6 text-sm text-muted">
                La denominazione precisa del titolo ISEF va riportata dal documento originale prima
                della pubblicazione definitiva.
              </p>
            )}
          </div>
          <aside className="h-fit rounded-3xl border border-line p-6">
            <h2 className="font-display text-2xl">Contatto</h2>
            <p className="mt-3 text-sm">{coach.phone}</p>
            <p className="mt-1 text-sm">{coach.email}</p>
            <div className="mt-6 grid h-56 place-items-center rounded-2xl bg-paper-2 text-center text-sm text-muted">
              Spazio per la fotografia originale. Niente immagini generate o di repertorio.
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
