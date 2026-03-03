"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { COMPANY_NAME, COMPANY_CITY } from "@/lib/constants";

export function AboutFounder() {
  const { locale } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section id="chi-siamo" className="section-pad">
      <div className="container-pad">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold tracking-widest text-(--muted) uppercase">
            {locale === "it"
              ? `Chi c'è dietro ${COMPANY_NAME}`
              : `Who's behind ${COMPANY_NAME}`}
          </p>
          <h2 className="heading-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {locale === "it"
              ? "Progetto siti che portano clienti reali"
              : "I build websites that bring real customers"}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-(--muted)">
            <p>
              {locale === "it"
                ? `Sono Lorenzo, fondatore di ${COMPANY_NAME}. Lavoro da ${COMPANY_CITY} con un'unica specializzazione: creare siti web per ristoranti e hotel che trasformano visitatori in prenotazioni.`
                : `I'm Lorenzo, founder of ${COMPANY_NAME}. I work from ${COMPANY_CITY} with a single focus: building websites for restaurants and hotels that turn visitors into bookings.`}
            </p>
            <p>
              {locale === "it"
                ? "Non faccio siti per tutti. Ogni progetto nasce dall'analisi del locale, del suo posizionamento e dei suoi obiettivi concreti. Design di alto livello, struttura orientata alla conversione, performance reali."
                : "I don't build sites for everyone. Every project starts from analyzing the venue, its positioning, and its concrete goals. Premium design, conversion-oriented structure, real performance."}
            </p>
            <p>
              {locale === "it"
                ? 'Se hai un ristorante, un hotel o un B&B e vuoi un sito che lavori per te — non solo che "faccia bella figura" — parliamone.'
                : 'If you have a restaurant, hotel, or B&B and want a site that works for you — not just one that "looks nice" — let\'s talk.'}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {(locale === "it"
              ? [
                  { value: "100%", label: "Verticale ospitalità" },
                  { value: "14 gg", label: "Consegna tipica" },
                  { value: COMPANY_CITY, label: "Base operativa" },
                ]
              : [
                  { value: "100%", label: "Hospitality-focused" },
                  { value: "14 days", label: "Typical delivery" },
                  { value: COMPANY_CITY, label: "Based in" },
                ]
            ).map((stat) => (
              <div
                key={stat.label}
                className="glass gradient-border rounded-2xl px-5 py-3"
              >
                <p className="text-lg font-semibold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs text-(--muted)">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
