"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "In quanto tempo consegnate?",
    a: "In molti casi la consegna tipica è 14 giorni (in base alla complessità). Se servono più pagine, contenuti extra o integrazioni, definiamo tempi chiari prima di partire.",
  },
  {
    q: "Ci serve un sito “bello” o un sito che porta risultati?",
    a: "Noi progettiamo per l’azione: prenotazioni, chiamate, richieste. Il design è di alto livello, ma è al servizio della conversione: inviti all’azione visibili, percorso semplice, prima mobile, velocità reale.",
  },
  {
    q: "Gestite anche menu, foto e contenuti?",
    a: "Sì: impostiamo struttura e sezioni, ottimizziamo foto e rendiamo il menu immediato (PDF + pagina web indicizzabile). Se hai già contenuti li adattiamo; se mancano, ti guidiamo su cosa serve davvero.",
  },
  {
    q: "Il sito sarà adatto a Google?",
    a: "Sì. Mettiamo una base SEO locale pulita: struttura corretta, performance, heading e contenuti chiari. Non vendiamo “magie”, ma scelte tecniche che aiutano davvero a essere trovati.",
  },
  {
    q: "Come misurate se sta funzionando?",
    a: "Tracciamo i clic sulle azioni importanti (inviti all’azione, menu, contatti, mappa). Così capiamo cosa genera richieste e cosa va ottimizzato.",
  },
];

export function FAQ() {
  const reduce = useReducedMotion();
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad">
      <div className="container-pad">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Domande frequenti
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-(--muted)">
            Risposte dirette per chi deve decidere.
          </p>
        </motion.div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `${baseId}-faq-${idx}`;
            return (
              <div
                key={f.q}
                className={
                  "glass gradient-border card-tech rounded-3xl " +
                  (isOpen ? "panel-tech" : "")
                }
              >
                <button
                  type="button"
                  className="focus-ring flex w-full items-center justify-between gap-4 rounded-3xl px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="text-sm font-semibold tracking-tight sm:text-base">
                    {f.q}
                  </span>
                  <span className="icon-chip h-10 w-10">
                    <ChevronDown
                      className={
                        "h-5 w-5 transition-transform " +
                        (isOpen ? "rotate-180" : "rotate-0")
                      }
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={contentId}
                      initial={
                        reduce ? { opacity: 1 } : { height: 0, opacity: 0 }
                      }
                      animate={
                        reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }
                      }
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden px-6 pb-6"
                    >
                      <p className="text-sm leading-7 text-(--muted)">{f.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
