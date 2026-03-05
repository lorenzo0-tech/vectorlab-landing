"use client";

import { Check } from "lucide-react";
import { CountUp } from "./CountUp";

type CheckItem = string | { before: string; count: number; after: string };

export function TrustBar({ locale }: { locale: string }) {
  const checks: CheckItem[] =
    locale === "it"
      ? [
          "Inviti all'azione sempre visibili (Chiama / Prenota / Indicazioni)",
          "Menu immediato (PDF + pagina web indicizzabile)",
          "Prestazioni e struttura adatte a Google",
          "Struttura pensata per cellulare",
          {
            before: "Tempi chiari, consegna tipica ",
            count: 14,
            after: " giorni",
          },
          { before: "Pacchetti da \u20ac", count: 1290, after: "" },
        ]
      : [
          "Always-visible CTAs (Call / Book / Directions)",
          "Instant menu access (PDF + indexable web page)",
          "Performance and structure aligned with Google",
          "Smartphone-first structure",
          {
            before: "Clear timelines, typical delivery in ",
            count: 14,
            after: " days",
          },
          { before: "Packages from \u20ac", count: 1290, after: "" },
        ];

  return (
    <section className="container-pad reveal">
      <div className="glass-strong gradient-border panel-tech relative overflow-hidden rounded-3xl p-6 sm:p-8">
        <p className="text-base font-semibold tracking-tight sm:text-lg">
          {locale === "it" ? (
            <>
              Niente promesse vaghe. Solo scelte che aumentano le{" "}
              <span className="heading-accent">conversioni.</span>
            </>
          ) : (
            <>
              No vague promises. Only choices that increase{" "}
              <span className="heading-accent">conversion.</span>
            </>
          )}
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 reveal-stagger">
          {checks.map((c) => {
            const isCounter = typeof c !== "string";
            const key = isCounter ? `${c.before}${c.count}${c.after}` : c;
            return (
              <div
                key={key}
                className="glass trust-chip rounded-2xl px-3 py-3 reveal"
              >
                <div className="flex items-start gap-2">
                  <span className="icon-chip mt-0.5 h-6 w-6">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="text-sm text-(--muted)">
                    {isCounter ? (
                      <>
                        {c.before}
                        <CountUp
                          end={c.count}
                          className="font-semibold text-foreground"
                        />
                        {c.after}
                      </>
                    ) : (
                      c
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
