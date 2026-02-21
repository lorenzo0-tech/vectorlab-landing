"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CALENDLY_URL, COMPANY_NAME } from "@/lib/constants";
import { trackCtaClick } from "@/lib/analytics-events";

const navItems = [
  { label: "Soluzione", href: "#soluzione" },
  { label: "Pacchetti", href: "#pacchetti" },
  { label: "Metodo", href: "#metodo" },
  { label: "FAQ", href: "#faq" },
];

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

export function Navbar() {
  const scrolled = useScrolled(10);
  const year = useMemo(() => new Date().getFullYear(), []);
  const [active, setActive] = useState<string>("#soluzione");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height <= 0) {
        setProgress(0);
        return;
      }
      setProgress(Math.min(1, Math.max(0, window.scrollY / height)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((node): node is Element => Boolean(node));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible?.target?.id) return;
        setActive(`#${visible.target.id}`);
      },
      {
        root: null,
        rootMargin: "-28% 0px -52% 0px",
        threshold: [0.1, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <header className="sticky top-0 z-50">
        <div className="container-pad">
          <div
            className={
              "mt-4 flex items-center justify-between rounded-2xl px-4 py-3 transition-all sm:px-6 " +
              (scrolled
                ? "glass-strong gradient-border panel-tech shadow-[0_14px_40px_rgba(2,6,23,0.08)]"
                : "bg-transparent")
            }
          >
            <a
              href="#top"
              className="group heading-display inline-flex items-center gap-2.5 text-base font-semibold leading-none tracking-tight text-foreground sm:text-lg"
            >
              <span className="logo-tech-shell">
                <Image
                  src="/images/logo_vettolab.png"
                  alt={`${COMPANY_NAME} logo`}
                  width={64}
                  height={64}
                  className="logo-tech-image"
                  priority
                />
              </span>
              <span className="relative max-w-[54vw] truncate sm:max-w-none">
                <span
                  data-text={COMPANY_NAME}
                  className="brand-tech-wordmark bg-[linear-gradient(108deg,rgba(240,249,255,0.98)_0%,rgba(103,232,249,0.94)_34%,rgba(165,180,252,0.93)_66%,rgba(232,121,249,0.9)_100%)] bg-clip-text text-transparent drop-shadow-[0_0_16px_rgba(34,211,238,0.36)]"
                >
                  {COMPANY_NAME}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-0.5 left-0 h-px w-full bg-linear-to-r from-cyan-300/0 via-cyan-200/70 to-fuchsia-300/0 opacity-55 transition-opacity group-hover:opacity-95"
                />
                <span aria-hidden="true" className="brand-tech-scanline" />
              </span>
            </a>

            <nav className="hidden items-center gap-5 text-sm font-medium text-(--muted) lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={
                    "nav-link-tech transition-colors focus-ring rounded-full px-2 py-1 " +
                    (active === item.href
                      ? "text-foreground"
                      : "text-(--muted) hover:text-foreground")
                  }
                  aria-current={active === item.href ? "page" : undefined}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary focus-ring px-4 py-2.5 text-xs sm:px-5 sm:py-3 sm:text-sm"
                aria-label="Prenota una chiamata di 15 minuti su Calendly"
                onClick={() =>
                  trackCtaClick({
                    posizione: "barra_nav",
                    destinazione: "calendly",
                  })
                }
              >
                <span className="sm:hidden">Prenota</span>
                <span className="hidden sm:inline">Prenota una chiamata</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 pb-[max(env(safe-area-inset-bottom),12px)] sm:hidden">
        <div className="container-pad pointer-events-auto">
          <div className="glass-strong gradient-border flex items-center justify-between gap-2 rounded-2xl p-2">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary focus-ring w-full"
              onClick={() =>
                trackCtaClick({
                  posizione: "barra_fissa_smartphone",
                  destinazione: "calendly",
                })
              }
            >
              Prenota una chiamata
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#preventivo"
              className="btn-secondary focus-ring w-full"
              onClick={() =>
                trackCtaClick({
                  posizione: "barra_fissa_smartphone",
                  destinazione: "preventivo",
                })
              }
            >
              Preventivo
            </a>
          </div>
          <p className="mt-2 text-center text-xs text-(--muted)">
            © {year} {COMPANY_NAME}
          </p>
        </div>
      </div>
    </>
  );
}
