"use client";

import { useMemo } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";
import { openCookiePreferences } from "@/lib/cookie-consent";
import {
  CALENDLY_URL,
  COMPANY_CITY,
  COMPANY_NAME,
  COMPANY_VAT,
  EMAIL_TO,
} from "@/lib/constants";

export function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  const legalLinks = [
    { href: "/privacy-policy", label: "Informativa privacy" },
    { href: "/cookie-policy", label: "Informativa cookie" },
    { href: "/termini-condizioni", label: "Termini e condizioni" },
  ];

  const seoLinks = [
    {
      href: "/siti-web-ristoranti-milano",
      label: "Siti web per ristoranti a Milano",
    },
    {
      href: "/siti-web-hotel-milano",
      label: "Siti web per hotel a Milano",
    },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <footer className="ft pb-28 sm:pb-10">
      <div className="container-pad">
        {/* ── Top CTA band ── */}
        <div className="ft-cta-band reveal">
          <div className="ft-cta-band-glow" aria-hidden="true" />
          <div className="ft-cta-band-grid" aria-hidden="true" />
          <div className="relative z-[1] flex flex-col items-center gap-5 px-4 py-10 text-center sm:gap-6 sm:px-6 sm:py-16">
            <p className="ft-cta-eyebrow">Pronto a partire?</p>
            <h3 className="heading-display text-xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Trasformiamo la tua visione <br className="hidden sm:block" />
              in un{" "}
              <span className="ft-cta-highlight">sito che porta contatti</span>
            </h3>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                className="nav-cta inline-flex focus-ring"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Prenota analisi gratuita
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                className="btn-secondary focus-ring"
                href={`mailto:${EMAIL_TO}`}
              >
                <Mail className="h-4 w-4" />
                {EMAIL_TO}
              </a>
            </div>
          </div>
        </div>

        {/* ── Main footer grid ── */}
        <div className="ft-main mt-10">
          {/* Decorative elements */}
          <span className="ft-main-line ft-main-line--top" aria-hidden="true" />
          <span className="ft-main-line ft-main-line--mid" aria-hidden="true" />

          <div className="grid gap-8 py-10 sm:grid-cols-12 sm:gap-6">
            {/* Col 1 — Brand */}
            <div className="sm:col-span-5 lg:col-span-4">
              <div className="flex items-center gap-3">
                <div
                  className="ft-logo"
                  role="button"
                  tabIndex={0}
                  aria-label="Apri preferenze cookie"
                  onClick={openCookiePreferences}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openCookiePreferences();
                    }
                  }}
                >
                  <Image
                    src="/icon.png"
                    alt="Logo VettoLab"
                    width={40}
                    height={40}
                    sizes="40px"
                    className="h-full w-full object-cover"
                  />
                  <span className="ft-logo-ring" aria-hidden="true" />
                </div>
                <div>
                  <p className="heading-display text-base font-semibold tracking-tight">
                    {COMPANY_NAME}
                  </p>
                  <p className="text-[11px] text-(--muted) tracking-wide uppercase">
                    Studio digitale
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-xs text-sm leading-relaxed text-(--muted)">
                Siti web su misura che trasformano visitatori in clienti.
                Progettazione curata e prestazioni concrete.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="ft-status" aria-hidden="true" />
                <p className="text-[11px] font-medium text-emerald-400 uppercase tracking-wider">
                  Disponibili per nuovi progetti
                </p>
              </div>

              <div className="ft-contact-stack mt-6">
                <a href={`mailto:${EMAIL_TO}`} className="ft-contact-item">
                  <Mail className="h-3.5 w-3.5" />
                  <span>{EMAIL_TO}</span>
                </a>
                <div className="ft-contact-item">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{COMPANY_CITY}</span>
                </div>
                <div className="ft-contact-item">
                  <Phone className="h-3.5 w-3.5" />
                  <span>Chiamata gratuita di 15 minuti</span>
                </div>
              </div>
            </div>

            {/* Col 2 — Navigation + Services + Legal (mobile: compact grid) */}
            <div className="sm:col-span-3 lg:col-span-4">
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <p className="ft-col-title">Navigazione</p>
                  <ul className="mt-3 space-y-2.5">
                    {[
                      { label: "Soluzione", href: "#soluzione" },
                      { label: "Pacchetti", href: "#pacchetti" },
                      { label: "Metodo", href: "#metodo" },
                      { label: "FAQ", href: "#faq" },
                      { label: "Blog", href: "/blog" },
                    ].map((link) => (
                      <li key={link.href}>
                        {link.href.startsWith("/") ? (
                          <Link href={link.href} className="ft-link">
                            {link.label}
                          </Link>
                        ) : (
                          <a href={link.href} className="ft-link">
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="ft-col-title">Approfondimenti</p>
                  <ul className="mt-3 space-y-2.5">
                    {seoLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="ft-link">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Legal links — only visible on mobile inside this grid */}
                <div className="col-span-2 sm:hidden">
                  <p className="ft-col-title">Legale</p>
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                    {legalLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="ft-link">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <CookiePreferencesButton />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Col 3 — Legal (hidden on mobile, shown in col 2 grid) */}
            <div className="hidden sm:block sm:col-span-4 lg:col-span-4">
              <p className="ft-col-title">Legale</p>
              <ul className="mt-3 space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="ft-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <CookiePreferencesButton />
                </li>
              </ul>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="ft-bottom">
            <p className="text-[11px] text-(--muted)">
              © {year} {COMPANY_NAME} · P.IVA {COMPANY_VAT}
            </p>
            <p className="text-[11px] text-(--muted)">
              Le informazioni non costituiscono offerta vincolante.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
