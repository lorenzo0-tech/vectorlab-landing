"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TriangleAlert } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export function Problem() {
  const { locale } = useLanguage();
  const reduce = useReducedMotion();
  const bullets =
    locale === "it"
      ? [
          "Menu nascosto o scomodo: il 53% degli utenti abbandona se non lo trova subito.",
          "Invito all'azione assente o debole: le persone non sanno cosa fare e se ne vanno.",
          "Versione smartphone disastrosa: tocchi difficili, testi piccoli, pagina pesante.",
          "Sito lento (>3 secondi): perdi fino al 40% del traffico prima ancora di parlare del locale.",
        ]
      : [
          "Hidden or awkward menu: 53% of users leave if they can't find it immediately.",
          "Weak or missing call to action: visitors don't know what to do and leave.",
          "Poor smartphone experience: hard taps, tiny text, heavy page.",
          "Slow website (>3s): you lose up to 40% of traffic before showcasing your venue.",
        ];

  return (
    <motion.section
      className="section-pad"
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="container-pad">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {locale === "it"
                ? "Se il tuo sito è lento o confuso, stai regalando clienti agli altri."
                : "If your website is slow or confusing, you are handing customers to competitors."}
            </h2>
            <p className="mt-4 text-lg leading-8 text-(--muted)">
              {locale === "it"
                ? "Le persone decidono in pochi secondi: se non capiscono subito cosa fare, escono."
                : "People decide in seconds: if they do not immediately understand what to do, they leave."}
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="glass gradient-border rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <TriangleAlert className="h-5 w-5" />
                <p className="text-sm font-semibold">
                  {locale === "it"
                    ? "Problemi reali, ogni giorno"
                    : "Real problems, every day"}
                </p>
              </div>
              <ul className="mt-5 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="text-sm leading-7 text-(--muted)">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
