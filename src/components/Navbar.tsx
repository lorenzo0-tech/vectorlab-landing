"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { CALENDLY_URL, COMPANY_NAME } from "@/lib/constants";
import { trackCtaClick } from "@/lib/analytics-events";

const navItemsByLocale = {
  it: [
    { label: "Soluzione", href: "#soluzione" },
    { label: "Pacchetti", href: "#pacchetti" },
    { label: "Metodo", href: "#metodo" },
    { label: "FAQ", href: "#faq" },
  ],
  en: [
    { label: "Solution", href: "#soluzione" },
    { label: "Packages", href: "#pacchetti" },
    { label: "Method", href: "#metodo" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;

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
  const { locale } = useLanguage();
  const navItems = navItemsByLocale[locale];
  const companyLower = COMPANY_NAME.toLowerCase();
  const labIndex = companyLower.lastIndexOf("lab");
  const brandPrimary =
    labIndex > 0 ? COMPANY_NAME.slice(0, labIndex) : COMPANY_NAME;
  const brandAccent = labIndex > 0 ? COMPANY_NAME.slice(labIndex) : "";
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
  }, [navItems]);

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
  }, [navItems]);

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
              "mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all sm:px-5 " +
              (scrolled
                ? "glass-strong gradient-border panel-tech shadow-[0_14px_40px_rgba(2,6,23,0.08)]"
                : "bg-transparent")
            }
          >
            <a
              href="#top"
              className="group inline-flex items-center"
              aria-label={COMPANY_NAME}
            >
              <span
                className="nav-brand-cycle nav-brand-cycle--hyper"
                aria-hidden="true"
              >
                <span className="nav-brand-logo">
                  <span className="nav-brand-logo-shell">
                    <Image
                      src="/icon.png"
                      alt=""
                      fill
                      priority
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                </span>
                <span className="nav-brand-wordmark">
                  <span className="nav-brand-wordmark-core">
                    <span className="nav-brand-wordmark-main">
                      {brandPrimary}
                    </span>
                    {brandAccent ? (
                      <span className="nav-brand-wordmark-accent">
                        {brandAccent}
                      </span>
                    ) : null}
                  </span>
                </span>
                <span className="nav-brand-flare" />
                <span className="nav-brand-grid" />
              </span>
              <span className="sr-only">{COMPANY_NAME}</span>
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
              <LanguageToggle />
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary focus-ring px-3.5 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm"
                aria-label={
                  locale === "it"
                    ? "Prenota una chiamata di 15 minuti su Calendly"
                    : "Book a 15-minute call on Calendly"
                }
                onClick={() =>
                  trackCtaClick({
                    posizione: "barra_nav",
                    destinazione: "calendly",
                  })
                }
              >
                <span className="sm:hidden">
                  {locale === "it" ? "Prenota" : "Book"}
                </span>
                <span className="hidden sm:inline">
                  {locale === "it" ? "Prenota una chiamata" : "Book a call"}
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 pb-[max(env(safe-area-inset-bottom),12px)] sm:hidden">
        <div className="container-pad pointer-events-auto">
          <div className="glass-strong gradient-border grid grid-cols-2 gap-2 rounded-2xl p-2">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary focus-ring w-full px-3 py-2 text-xs"
              onClick={() =>
                trackCtaClick({
                  posizione: "barra_fissa_smartphone",
                  destinazione: "calendly",
                })
              }
            >
              {locale === "it" ? "Chiamata 15 min" : "Book call"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#preventivo"
              className="btn-secondary focus-ring w-full px-3 py-2 text-xs"
              onClick={() =>
                trackCtaClick({
                  posizione: "barra_fissa_smartphone",
                  destinazione: "preventivo",
                })
              }
            >
              {locale === "it" ? "Preventivo" : "Quote"}
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
