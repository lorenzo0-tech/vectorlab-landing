"use client";

import { Check, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { CALENDLY_URL } from "@/lib/constants";
import { trackCtaClick } from "@/lib/analytics-events";

type MaintenancePlan = {
  name: string;
  price: string;
  period: string;
  tagline: string;
  points: string[];
  highlight?: boolean;
};

export function Maintenance() {
  const { locale } = useLanguage();

  const plans: MaintenancePlan[] =
    locale === "it"
      ? [
          {
            name: "CARE ESSENTIAL",
            price: "€79",
            period: "/mese",
            tagline: "Mantieni il sito sicuro, aggiornato e sempre online.",
            points: [
              "Aggiornamenti tecnici e di sicurezza",
              "Backup settimanale automatico",
              "Monitoraggio uptime e performance",
              "30 minuti di micro-interventi al mese",
              "Report trimestrale sullo stato del sito",
            ],
          },
          {
            name: "CARE BUSINESS",
            price: "€149",
            period: "/mese",
            tagline: "Per chi aggiorna spesso menu, foto e promozioni.",
            highlight: true,
            points: [
              "Tutto di Care Essential",
              "2 ore di lavoro al mese (contenuti, foto, testi)",
              "Aggiornamento menu e sezioni stagionali",
              "SEO on-page light e ottimizzazione continua",
              "SLA risposta entro 48 ore",
            ],
          },
          {
            name: "CARE PERFORMANCE",
            price: "€299",
            period: "/mese",
            tagline: "Crescita continua: conversioni, SEO e report mensili.",
            points: [
              "Tutto di Care Business",
              "5 ore di lavoro al mese",
              "Ottimizzazione conversione (CRO) continuativa",
              "SEO locale avanzata con monitoraggio posizionamento",
              "Report mensile dettagliato con metriche chiave",
              "SLA risposta entro 24 ore",
            ],
          },
        ]
      : [
          {
            name: "CARE ESSENTIAL",
            price: "€79",
            period: "/mo",
            tagline: "Keep your site secure, updated, and always online.",
            points: [
              "Technical and security updates",
              "Weekly automated backup",
              "Uptime and performance monitoring",
              "30 minutes of micro-fixes per month",
              "Quarterly site health report",
            ],
          },
          {
            name: "CARE BUSINESS",
            price: "€149",
            period: "/mo",
            tagline: "For those who update menus, photos, and promos often.",
            highlight: true,
            points: [
              "Everything in Care Essential",
              "2 hours of work per month (content, photos, copy)",
              "Menu and seasonal section updates",
              "Light on-page SEO and continuous optimization",
              "48-hour response SLA",
            ],
          },
          {
            name: "CARE PERFORMANCE",
            price: "€299",
            period: "/mo",
            tagline:
              "Continuous growth: conversions, SEO, and monthly reports.",
            points: [
              "Everything in Care Business",
              "5 hours of work per month",
              "Ongoing conversion rate optimization (CRO)",
              "Advanced local SEO with ranking monitoring",
              "Detailed monthly report with key metrics",
              "24-hour response SLA",
            ],
          },
        ];

  return (
    <section id="manutenzione" className="section-pad">
      <div className="container-pad">
        <div className="reveal">
          <h2 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {locale === "it" ? "Piani di manutenzione" : "Maintenance plans"}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-(--muted)">
            {locale === "it"
              ? "Il sito non finisce alla consegna. Tienilo veloce, sicuro e sempre aggiornato."
              : "Your site doesn\u2019t end at launch. Keep it fast, secure, and always up to date."}
          </p>
          <p className="mt-2 text-xs text-(--muted)">
            {locale === "it"
              ? "Prezzi IVA non applicata ai sensi dell'Art. 1, commi 54-89, L. 190/2014 (regime forfettario)."
              : "Prices: VAT not applicable pursuant to Art. 1, paragraphs 54-89, Law 190/2014 (flat-rate regime)."}
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3 reveal-stagger">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                "group card-tech relative overflow-hidden rounded-3xl p-6 reveal " +
                (plan.highlight
                  ? "glass-strong gradient-border"
                  : "glass gradient-border")
              }
            >
              <span aria-hidden="true" className="sweep-strip" />

              <p className="text-xs font-semibold tracking-widest text-(--muted)">
                {plan.name}
              </p>
              <p className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-bold tracking-tight text-cyan-200">
                  {plan.price}
                </span>
                <span className="text-sm text-(--muted)">{plan.period}</span>
              </p>
              <p className="mt-3 text-lg font-semibold tracking-tight">
                {plan.tagline}
              </p>

              <ul className="mt-5 space-y-3">
                {plan.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2 text-sm leading-7"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/5">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-(--muted)">{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary focus-ring w-full"
                  onClick={() =>
                    trackCtaClick({
                      posizione: "pacchetti",
                      destinazione: "calendly",
                    })
                  }
                >
                  {locale === "it"
                    ? "Attiva manutenzione"
                    : "Activate maintenance"}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
