import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  primary:
    "bg-petrol text-paper hover:bg-petrol-deep focus-visible:outline-petrol",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/50 hover:bg-ink/[0.03] focus-visible:outline-ink",
  ghost:
    "bg-paper text-ink border border-line hover:border-petrol/40 focus-visible:outline-petrol",
  onDark:
    "bg-transparent text-paper border border-paper/30 hover:border-paper/70 focus-visible:outline-paper",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  external?: boolean;
}) {
  const className = `inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]}`;

  if (external) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
