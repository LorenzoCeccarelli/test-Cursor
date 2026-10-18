"use client";

import { Logo } from "@/components/Logo";
import { nav, site } from "@/content/site";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <Logo compact />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principale">
          {nav.primary.map((item) =>
            "children" in item && item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-sm ${
                    pathname.startsWith(item.href) ? "text-petrol" : "text-ink-soft hover:text-ink"
                  }`}
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                </Link>
                <AnimatePresence>
                  {openMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.16 }}
                      className="absolute left-0 top-full z-20 min-w-64 rounded-2xl border border-line bg-paper p-2 shadow-[0_16px_40px_rgba(26,28,27,0.08)]"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3 py-2 text-sm text-ink-soft hover:bg-paper-2 hover:text-ink"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm ${
                  pathname === item.href ? "text-petrol" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={nav.cta.href}
            className="inline-flex min-h-10 max-w-[9.5rem] items-center truncate rounded-full bg-petrol px-3 text-xs text-paper sm:max-w-none sm:px-4 sm:text-sm hover:bg-petrol-deep"
          >
            {nav.cta.label}
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 lg:hidden"
            aria-controls={menuId}
            aria-expanded={open}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1.5">
              <span className={`h-px bg-ink transition ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`h-px bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px bg-ink transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <nav className="mx-auto flex max-h-[calc(100vh-4.5rem)] max-w-6xl flex-col gap-1 overflow-y-auto px-5 py-4">
              {nav.primary.map((item) => (
                <div key={item.href} className="border-b border-line/70 py-2">
                  <Link href={item.href} className="block py-1 text-base text-ink">
                    {item.label}
                  </Link>
                  {"children" in item && item.children ? (
                    <div className="mt-1 flex flex-col">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-1.5 pl-3 text-sm text-ink-soft"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <Link
                href={nav.cta.href}
                className="mt-3 inline-flex min-h-12 items-center justify-center rounded-full bg-petrol text-paper"
              >
                {nav.cta.label}
              </Link>
              <a href={site.waFrancesco} className="py-3 text-sm text-petrol">
                WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
