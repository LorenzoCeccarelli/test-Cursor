import { Reveal } from "@/components/Reveal";
import { TrackMark } from "@/components/TrackMark";
import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  intro,
  children,
}: {
  kicker?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="lanes wing relative overflow-hidden border-b border-line">
      <TrackMark className="pointer-events-none absolute right-8 top-8 hidden w-72 text-petrol/35 lg:block" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        {kicker ? (
          <p className="text-xs uppercase tracking-[0.2em] text-petrol">{kicker}</p>
        ) : null}
        <Reveal>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {intro ? (
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>
          </Reveal>
        ) : null}
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20 ${className}`}>
      {children}
    </section>
  );
}
