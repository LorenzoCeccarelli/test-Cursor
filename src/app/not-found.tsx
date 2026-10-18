import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <PageHero kicker="404" title="Pagina non trovata" intro="Torna alla home o scrivi a un tecnico.">
      <ButtonLink href="/">Home</ButtonLink>
      <ButtonLink href="/contatti/" variant="secondary">
        Contatti
      </ButtonLink>
    </PageHero>
  );
}
