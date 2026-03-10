"use client";

import { useMemo } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";
import { useLanguage } from "@/components/LanguageProvider";
import { openCookiePreferences } from "@/lib/cookie-consent";
import {
  CALENDLY_URL,
  COMPANY_CITY,
  COMPANY_NAME,
  COMPANY_VAT,
  EMAIL_TO,
} from "@/lib/constants";

export function Footer() {
  const { locale } = useLanguage();
  const year = useMemo(() => new Date().getFullYear(), []);

  const legalLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/cookie-policy", label: "Cookie Policy" },
    {
      href: "/termini-condizioni",
      label: locale === "it" ? "Termini e Condizioni" : "Terms & Conditions",
    },
  ];

  const seoLinks = [
    {
      href: "/siti-web-ristoranti-milano",
      label: locale === "it" ? "Siti web Milano" : "Websites Milan",
    },
    {
      href: "/siti-web-hotel-milano",
      label:
        locale === "it" ? "Siti web aziende Milano" : "Business websites Milan",
    },
  ];

  return (
    <footer className="ft pb-28 sm:pb-10">
      <div className="container-pad">
        {/* ── Top CTA band ── */}
        <div className="ft-cta-band reveal">
          <div className="ft-cta-band-glow" aria-hidden="true" />
          <div className="ft-cta-band-grid" aria-hidden="true" />
          <div className="relative z-[1] flex flex-col items-center gap-5 px-4 py-10 text-center sm:gap-6 sm:px-6 sm:py-16">
            <p className="ft-cta-eyebrow">
              {locale === "it" ? "Pronto a partire?" : "Ready to start?"}
            </p>
            <h3 className="heading-display text-xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              {locale === "it" ? (
                <>
                  Trasformiamo la tua visione <br className="hidden sm:block" />
                  in un{" "}
                  <span className="ft-cta-highlight">sito che converte</span>
                </>
              ) : (
                <>
                  Let&apos;s turn your vision <br className="hidden sm:block" />
                  into a{" "}
                  <span className="ft-cta-highlight">site that converts</span>
                </>
              )}
            </h3>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                className="nav-cta inline-flex focus-ring"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === "it"
                  ? "Prenota analisi gratuita"
                  : "Book free audit"}
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

          <div className="grid gap-10 py-10 sm:grid-cols-12 sm:gap-6">
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
                    Web Studio
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-xs text-sm leading-relaxed text-(--muted)">
                {locale === "it"
                  ? "Siti web su misura che trasformano visitatori in clienti. Design premium, performance reale."
                  : "Bespoke websites that turn visitors into customers. Premium design, real performance."}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="ft-status" aria-hidden="true" />
                <p className="text-[11px] font-medium text-emerald-400 uppercase tracking-wider">
                  {locale === "it"
                    ? "Disponibili per nuovi progetti"
                    : "Available for new projects"}
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
                  <span>
                    {locale === "it"
                      ? "Chiamata gratuita 15 min"
                      : "Free 15 min call"}
                  </span>
                </div>
              </div>
            </div>

            {/* Col 2 — Navigation links */}
            <div className="sm:col-span-3 lg:col-span-4">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="ft-col-title">
                    {locale === "it" ? "Navigazione" : "Navigate"}
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {[
                      {
                        label: locale === "it" ? "Soluzione" : "Solution",
                        href: "#soluzione",
                      },
                      {
                        label: locale === "it" ? "Pacchetti" : "Packages",
                        href: "#pacchetti",
                      },
                      {
                        label: locale === "it" ? "Metodo" : "Method",
                        href: "#metodo",
                      },
                      { label: "FAQ", href: "#faq" },
                    ].map((link) => (
                      <li key={link.href}>
                        <a href={link.href} className="ft-link">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="ft-col-title">
                    {locale === "it" ? "Servizi" : "Services"}
                  </p>
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
              </div>
            </div>

            {/* Col 3 — Legal */}
            <div className="sm:col-span-4 lg:col-span-4">
              <p className="ft-col-title">
                {locale === "it" ? "Legale" : "Legal"}
              </p>
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
              {locale === "it"
                ? "Le informazioni non costituiscono offerta vincolante."
                : "Information does not constitute a binding offer."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
