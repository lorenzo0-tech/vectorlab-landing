"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
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
  const reduce = useReducedMotion();

  return (
    <footer className="pb-28 sm:pb-10">
      <div className="container-pad">
        <div className="glass gradient-border panel-tech rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-4">
                <motion.div
                  className="relative h-16 w-16 overflow-hidden rounded-2xl border border-cyan-200/35 bg-[#060b16] shadow-[0_20px_50px_rgba(2,6,23,0.35)]"
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
                  animate={
                    reduce ? undefined : { y: [0, -3, 0], rotate: [0, 1.2, 0] }
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-35"
                    style={{
                      background:
                        "repeating-linear-gradient(180deg, rgba(165,243,252,0.18) 0px, rgba(165,243,252,0.18) 1px, transparent 1px, transparent 4px)",
                    }}
                    animate={reduce ? undefined : { opacity: [0.2, 0.38, 0.2] }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    aria-hidden="true"
                    className="absolute -left-6 -top-6 h-14 w-14 rounded-full bg-cyan-400/30 blur-2xl"
                    animate={
                      reduce ? undefined : { x: [0, 8, 0], y: [0, 6, 0] }
                    }
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    aria-hidden="true"
                    className="absolute -bottom-6 -right-6 h-14 w-14 rounded-full bg-fuchsia-400/30 blur-2xl"
                    animate={
                      reduce ? undefined : { x: [0, -8, 0], y: [0, -6, 0] }
                    }
                    transition={{
                      duration: 6.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    aria-hidden="true"
                    className="absolute top-[-120%] h-[240%] w-[34%] rotate-[18deg] bg-linear-to-r from-white/0 via-cyan-100/70 to-white/0 blur-[1px]"
                    animate={reduce ? undefined : { x: ["-180%", "230%"] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      repeatDelay: 1.8,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/40"
                    animate={reduce ? undefined : { rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="absolute inset-2 overflow-hidden rounded-xl border border-white/25 bg-white/8 p-1.5 backdrop-blur-sm">
                    <Image
                      src="/icon.png"
                      alt="Logo VettoLab"
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </motion.div>

                <p className="heading-display inline-flex items-center text-lg font-semibold tracking-tight">
                  {COMPANY_NAME}
                </p>
              </div>
              <p className="mt-2 text-sm text-(--muted)">
                {COMPANY_CITY} · P.IVA: {COMPANY_VAT}
              </p>
              <p className="mt-3 text-xs text-(--muted)">
                {locale === "it"
                  ? "Nota legale: le informazioni non costituiscono offerta vincolante."
                  : "Legal note: information does not constitute a binding offer."}
              </p>
              <p className="mt-4 inline-flex items-center rounded-full border border-cyan-200/60 bg-cyan-50/80 px-3 py-1 text-xs font-semibold text-cyan-900">
                {locale === "it"
                  ? "Disponibilità chiamata: 15 min"
                  : "Call availability: 15 min"}
              </p>
            </div>

            <div className="flex w-full flex-col gap-2 sm:w-auto">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-(--muted)">
                <Link
                  className="focus-ring rounded px-1 py-0.5 hover:text-foreground"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="focus-ring rounded px-1 py-0.5 hover:text-foreground"
                  href="/cookie-policy"
                >
                  Cookie Policy
                </Link>
                <Link
                  className="focus-ring rounded px-1 py-0.5 hover:text-foreground"
                  href="/termini-condizioni"
                >
                  {locale === "it"
                    ? "Termini e Condizioni"
                    : "Terms and Conditions"}
                </Link>
                <Link
                  className="focus-ring rounded px-1 py-0.5 hover:text-foreground"
                  href="/siti-web-ristoranti-milano"
                >
                  {locale === "it"
                    ? "Siti web ristoranti Milano"
                    : "Restaurant websites Milan"}
                </Link>
                <Link
                  className="focus-ring rounded px-1 py-0.5 hover:text-foreground"
                  href="/siti-web-hotel-milano"
                >
                  {locale === "it"
                    ? "Siti web hotel Milano"
                    : "Hotel websites Milan"}
                </Link>
                <CookiePreferencesButton />
              </div>
              <a
                className="btn-secondary focus-ring w-full break-all text-xs sm:w-auto sm:text-sm"
                href={`mailto:${EMAIL_TO}`}
              >
                {EMAIL_TO}
                <Mail className="h-4 w-4" />
              </a>
              <a
                className="btn-primary focus-ring w-full sm:w-auto"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === "it" ? "Prenota una chiamata" : "Book a call"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
