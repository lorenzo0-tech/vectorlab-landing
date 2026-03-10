"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { CALENDLY_URL, COMPANY_NAME } from "@/lib/constants";
import { trackCtaClick } from "@/lib/analytics-events";

const NAV_HEIGHT = 80; // offset to clear sticky header

const navItemsByLocale = {
  it: [
    { label: "Soluzione", href: "#soluzione", num: "01" },
    { label: "Pacchetti", href: "#pacchetti", num: "02" },
    { label: "Metodo", href: "#metodo", num: "03" },
    { label: "FAQ", href: "#faq", num: "04" },
  ],
  en: [
    { label: "Solution", href: "#soluzione", num: "01" },
    { label: "Packages", href: "#pacchetti", num: "02" },
    { label: "Method", href: "#metodo", num: "03" },
    { label: "FAQ", href: "#faq", num: "04" },
  ],
} as const;

/** Scroll to an anchor with offset, works even when body overflow is locked */
function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  // Unlock body first so scroll can happen
  document.body.style.overflow = "";
  requestAnimationFrame(() => {
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });
  });
}

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

/** Returns true when navbar should be visible (top of page OR scrolling up) */
function useNavVisible() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        // Always show if near the top
        if (y < 60) {
          setVisible(true);
        } else {
          setVisible(y < lastY.current); // scrolling up → show
        }
        lastY.current = y;
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return visible;
}

export function Navbar() {
  const { locale } = useLanguage();
  const navItems = navItemsByLocale[locale];
  const scrolled = useScrolled(10);
  const navVisible = useNavVisible();
  const year = useMemo(() => new Date().getFullYear(), []);
  const [active, setActive] = useState<string>("#soluzione");
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const updateIndicator = useCallback(() => {
    if (!navRef.current) return;
    const activeEl = navRef.current.querySelector<HTMLAnchorElement>(
      `a[href="${active}"]`,
    );
    if (!activeEl) return;
    const navRect = navRef.current.getBoundingClientRect();
    const elRect = activeEl.getBoundingClientRect();
    setIndicatorStyle({
      left: elRect.left - navRect.left,
      width: elRect.width,
    });
  }, [active]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

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

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Scroll progress ── */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <header
        className={
          "fixed top-0 inset-x-0 z-50 transition-transform duration-300 " +
          (navVisible || mobileOpen ? "translate-y-0" : "-translate-y-full")
        }
      >
        <div className="container-pad">
          <div
            className={
              "nav-shell mt-2 flex items-center justify-between rounded-2xl px-4 py-2 transition-all duration-500 sm:mt-3 sm:px-5 sm:py-2.5 " +
              (scrolled ? "nav-shell--active" : "bg-transparent")
            }
          >
            {/* Animated border beam (visible on scroll) */}
            {scrolled && <span className="nav-beam" aria-hidden="true" />}

            {/* ── Logo ── */}
            <a
              href="#top"
              className="nav-logo-link group relative z-[2] inline-flex items-center gap-3"
              aria-label={COMPANY_NAME}
            >
              <span className="nav-logo-icon">
                <Image
                  src="/icon.png"
                  alt=""
                  width={36}
                  height={36}
                  priority
                  sizes="36px"
                  className="h-full w-full object-cover"
                />
                <span className="nav-logo-pulse" aria-hidden="true" />
              </span>
              <span className="nav-logo-text">
                <span className="nav-logo-primary">Vetto</span>
                <span className="nav-logo-accent">Lab</span>
              </span>
            </a>

            {/* ── Desktop nav ── */}
            <nav
              ref={navRef}
              className="nav-desktop hidden items-center rounded-full lg:flex"
            >
              <span
                className="nav-slide"
                aria-hidden="true"
                style={{
                  transform: `translateX(${indicatorStyle.left}px)`,
                  width: `${indicatorStyle.width}px`,
                  opacity: indicatorStyle.width > 0 ? 1 : 0,
                }}
              />
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={
                    "nav-item focus-ring relative z-[1] " +
                    (active === item.href ? "nav-item--active" : "")
                  }
                  aria-current={active === item.href ? "page" : undefined}
                >
                  <span className="nav-item-num">{item.num}</span>
                  {item.label}
                </a>
              ))}
            </nav>

            {/* ── Right side ── */}
            <div className="relative z-[2] flex items-center gap-2">
              <LanguageToggle />

              {/* Desktop CTA */}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta hidden focus-ring lg:inline-flex"
                aria-label={
                  locale === "it"
                    ? "Prenota un'analisi gratuita di 15 minuti su Calendly"
                    : "Book a 15-minute call on Calendly"
                }
                onClick={() =>
                  trackCtaClick({
                    posizione: "barra_nav",
                    destinazione: "calendly",
                  })
                }
              >
                {locale === "it" ? "Prenota analisi" : "Book audit"}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              {/* Mobile hamburger */}
              <button
                type="button"
                className="nav-hamburger focus-ring lg:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile fullscreen overlay ── */}
      <div
        className={
          "nav-mobile-overlay " + (mobileOpen ? "nav-mobile-overlay--open" : "")
        }
      >
        <div className="nav-mobile-bg" aria-hidden="true" />
        <nav className="nav-mobile-inner">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-mobile-link"
              style={{
                transitionDelay: mobileOpen ? `${80 + i * 50}ms` : "0ms",
              }}
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                scrollToSection(item.href);
              }}
            >
              <span className="nav-mobile-num">{item.num}</span>
              <span className="nav-mobile-label">{item.label}</span>
              <span className="nav-mobile-line" aria-hidden="true" />
            </a>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta inline-flex w-full justify-center focus-ring min-h-[52px]"
              onClick={() => {
                setMobileOpen(false);
                trackCtaClick({
                  posizione: "menu_mobile",
                  destinazione: "calendly",
                });
              }}
            >
              {locale === "it" ? "Prenota analisi gratis" : "Book free audit"}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </nav>
      </div>

      {/* ── Mobile bottom bar ── */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 pb-[max(env(safe-area-inset-bottom),16px)] sm:hidden">
        <div className="container-pad pointer-events-auto">
          <div className="nav-mobile-bar glass-strong gradient-border grid grid-cols-2 gap-2 rounded-2xl p-2">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary focus-ring w-full min-h-[48px] px-3 py-2.5 text-xs"
              aria-label={
                locale === "it"
                  ? "Prenota analisi gratuita di 15 minuti"
                  : "Book a free 15-minute audit"
              }
              onClick={() =>
                trackCtaClick({
                  posizione: "barra_fissa_smartphone",
                  destinazione: "calendly",
                })
              }
            >
              {locale === "it" ? "Analisi 15 min" : "Free audit"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#preventivo"
              className="btn-secondary focus-ring w-full min-h-[48px] px-3 py-2.5 text-xs"
              aria-label={
                locale === "it"
                  ? "Vai alla sezione proposta"
                  : "Go to proposal section"
              }
              onClick={() =>
                trackCtaClick({
                  posizione: "barra_fissa_smartphone",
                  destinazione: "preventivo",
                })
              }
            >
              {locale === "it" ? "Proposta" : "Proposal"}
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
