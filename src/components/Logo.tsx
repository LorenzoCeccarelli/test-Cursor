import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Track Academy, home">
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-ink/15 bg-ink text-paper">
        <span className="absolute inset-x-2 top-[18px] h-px bg-paper/40" />
        <span className="absolute inset-x-3 top-[22px] h-px bg-paper/25" />
        <span className="font-display text-[15px] leading-none tracking-tight">TA</span>
      </span>
      <span className="flex flex-col">
        <span className="font-display text-[1.05rem] leading-none tracking-tight text-ink">
          Track Academy
        </span>
        {!compact && (
          <span className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted">
            Atletica e metodo
          </span>
        )}
      </span>
    </Link>
  );
}
