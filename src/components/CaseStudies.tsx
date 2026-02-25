"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export function CaseStudies() {
  const { locale } = useLanguage();
  const reduce = useReducedMotion();
  const cases =
    locale === "it"
      ? [
          {
            name: "Ristorante centro città · Milano",
            metric: "Più richieste tavolo qualificate",
            detail: "KPI monitorato dopo ottimizzazione del percorso prenotazione",
            before:
              "Invito all’azione poco visibile e percorso prenotazione dispersivo",
            action:
              "Testata semplificata, invito all’azione fisso e percorso smartphone lineare",
          },
          {
            name: "Pizzeria da asporto · Bergamo",
            metric: "Più clic su menu e ordini",
            detail: "KPI monitorato dopo ottimizzazione testata e invito all’azione",
            before: "Menu difficile da trovare da smartphone",
            action: "Menu in un tocco + gerarchia visiva orientata all’azione",
          },
          {
            name: "Bar di miscelazione eventi · Torino",
            metric: "Più clic su prenota",
            detail: "KPI monitorato con tracciamento eventi attivo",
            before: "Traffico buono ma conversione bassa su smartphone",
            action:
              "Riduzione frizione sui tocchi e blocchi fiducia sopra la piega",
          },
        ]
      : [
          {
            name: "City-center restaurant · Milan",
            metric: "More qualified table requests",
            detail: "KPI monitored after booking-flow optimization",
            before: "Low-visibility CTA and scattered booking flow",
            action:
              "Simplified hero, sticky CTA, and linear smartphone journey",
          },
          {
            name: "Takeaway pizzeria · Bergamo",
            metric: "More menu clicks and orders",
            detail: "KPI monitored after hero and CTA optimization",
            before: "Menu hard to find on smartphone",
            action: "One-tap menu + action-oriented visual hierarchy",
          },
          {
            name: "Event cocktail bar · Turin",
            metric: "More book-now clicks",
            detail: "KPI monitored with event tracking enabled",
            before: "Good traffic but low smartphone conversion",
            action:
              "Reduced tap friction and added above-the-fold trust blocks",
          },
        ];

  return (
    <section className="section-pad" id="casi-reali">
      <div className="container-pad">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {locale === "it"
              ? "Più richieste, meno frizione nel percorso cliente."
              : "More inquiries, less friction in the customer journey."}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-(--muted)">
            {locale === "it"
              ? "Esempi operativi con problema, intervento e KPI monitorato: un approccio concreto per trasformare più visite in contatti."
              : "Operational examples with problem, intervention, and monitored KPI: a practical approach to turn more visits into leads."}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, index) => (
            <motion.article
              key={`case-${index}`}
              className="glass gradient-border card-tech rounded-3xl p-6"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <p className="text-xs font-semibold tracking-widest text-(--muted)">
                {item.name}
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-tight">
                {item.metric}
              </p>
              <p className="mt-2 text-sm text-(--muted)">{item.detail}</p>
              <p className="mt-4 text-xs leading-6 text-(--muted)">
                <span className="font-semibold text-foreground/90">
                  {locale === "it" ? "Prima:" : "Before:"}
                </span>{" "}
                {item.before}
              </p>
              <p className="mt-1 text-xs leading-6 text-(--muted)">
                <span className="font-semibold text-foreground/90">
                  {locale === "it" ? "Intervento:" : "Intervention:"}
                </span>{" "}
                {item.action}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
