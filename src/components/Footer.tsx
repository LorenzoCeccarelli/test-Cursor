import { Logo } from "@/components/Logo";
import { nav, site } from "@/content/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="brightness-0 invert">
            <Logo />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/70">{site.slogan}</p>
          <p className="mt-4 text-sm text-paper/70">
            Atletica leggera, running, mezzofondo, fondo, endurance e preparazione atletica,
            anche per concorsi militari.
          </p>
        </div>
        <div className="lg:col-span-3">
          <p className="text-xs uppercase tracking-[0.18em] text-paper/50">Percorsi</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.primary.find((item) => item.href === "/allenati-con-noi/")?.children?.map((item) => (
              <li key={item.href}>
                <Link className="text-paper/80 hover:text-paper" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <p className="text-xs uppercase tracking-[0.18em] text-paper/50">Informazioni</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link className="text-paper/80 hover:text-paper" href="/faq/">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="text-paper/80 hover:text-paper" href="/documenti/">
                Documenti
              </Link>
            </li>
            <li>
              <Link className="text-paper/80 hover:text-paper" href="/safeguarding/">
                Safeguarding
              </Link>
            </li>
            <li>
              <Link className="text-paper/80 hover:text-paper" href="/privacy/">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="text-paper/80 hover:text-paper" href="/cookie/">
                Cookie
              </Link>
            </li>
            <li>
              <Link className="text-paper/80 hover:text-paper" href="/condizioni-di-adesione/">
                Condizioni di adesione
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="text-xs uppercase tracking-[0.18em] text-paper/50">Contatti</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.phoneFrancescoHref}>{site.phoneFrancesco}</a>
            </li>
            <li>
              <a href={site.phoneManolaHref}>Manola Ponzetta {site.phoneManola}</a>
            </li>
            <li>
              PEC: <a href={`mailto:${site.pec}`}>{site.pec}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-paper/50 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            {site.legalName
              ? site.legalName
              : "Denominazione legale e dati societari: da verificare sui documenti ufficiali prima della pubblicazione."}
          </p>
          <p>Anteprima non indicizzata. I social verranno collegati agli indirizzi ufficiali esatti.</p>
        </div>
      </div>
    </footer>
  );
}
