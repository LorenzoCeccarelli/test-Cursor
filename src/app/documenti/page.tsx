import { PageHero, Section } from "@/components/PageHero";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documenti",
  description: "Documenti associativi pubblicabili, regolamenti e condizioni Track Academy.",
};

export default function DocumentiPage() {
  return (
    <>
      <PageHero
        kicker="Documenti"
        title="Trasparenza associativa"
        intro="Qui verranno pubblicati soltanto documenti associativi autorizzati. Non pubblichiamo firme, documenti d’identità, elenchi tesserati o certificati personali."
      />
      <Section>
        <ul className="space-y-3 text-sm">
          <li>
            <Link className="text-petrol" href="/condizioni-di-adesione/">
              Condizioni di adesione
            </Link>
          </li>
          <li>
            <Link className="text-petrol" href="/privacy/">
              Privacy
            </Link>
          </li>
          <li>
            <Link className="text-petrol" href="/cookie/">
              Cookie
            </Link>
          </li>
          <li>
            <Link className="text-petrol" href="/safeguarding/">
              Safeguarding
            </Link>
          </li>
        </ul>
        <p className="mt-8 max-w-2xl text-sm text-ink-soft">
          Statuto, regolamenti e condizioni economiche: da caricare in public/documenti quando i
          file sono verificati.
        </p>
      </Section>
    </>
  );
}
