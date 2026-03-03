"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { trackFaqToggle } from "@/lib/analytics-events";

export function FAQ() {
  const { locale } = useLanguage();
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs =
    locale === "it"
      ? [
          {
            q: "In quanto tempo consegnate?",
            a: "In molti casi la consegna tipica è 14 giorni (in base alla complessità). Se servono più pagine, contenuti extra o integrazioni, definiamo tempi chiari prima di partire.",
          },
          {
            q: "Quanto costa un sito web per il mio ristorante o hotel?",
            a: "I pacchetti partono da \u20ac1.290 per ristoranti e \u20ac1.490 per hotel. Il prezzo finale dipende da pagine, integrazioni e personalizzazione. Prenota un\u2019analisi gratuita per un preventivo su misura.",
          },
          {
            q: "Ci serve un sito “bello” o un sito che porta risultati?",
            a: "Noi progettiamo per l’azione: prenotazioni, chiamate, richieste. La progettazione è di alto livello, ma è al servizio della conversione: inviti all’azione visibili, percorso semplice, prima su smartphone, velocità reale.",
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
            q: "Posso aggiornare il menu o i contenuti da solo?",
            a: "S\u00ec. Consegniamo il sito con una struttura facilmente aggiornabile. Per chi preferisce non pensarci, offriamo piani di manutenzione mensile che includono aggiornamenti contenuti, menu e foto.",
          },
          {
            q: "Il sito \u00e8 di mia propriet\u00e0?",
            a: "Assolutamente s\u00ec. Il dominio, i contenuti e le immagini restano tuoi. Il sito viene consegnato completo e funzionante, senza vincoli di lock-in.",
          },
          {
            q: "Cosa succede dopo la consegna?",
            a: "Dopo il lancio puoi gestire il sito in autonomia oppure attivare un piano di manutenzione. Offriamo tre livelli: Essential (aggiornamenti tecnici e sicurezza), Business (contenuti e SEO light), Performance (ottimizzazione conversioni e report mensili).",
          },
          {
            q: "Come misurate se sta funzionando?",
            a: "Tracciamo i clic sulle azioni importanti (inviti all\u2019azione, menu, contatti, mappa). Cos\u00ec capiamo cosa genera richieste e cosa va ottimizzato.",
          },
          {
            q: "Lavorate solo a Milano?",
            a: "Siamo basati a Milano, ma lavoriamo in tutta Italia e con strutture internazionali. La maggior parte del processo \u00e8 da remoto, con call di allineamento e condivisione in tempo reale.",
          },
        ]
      : [
          {
            q: "How long does delivery take?",
            a: "In many cases, typical delivery is 14 days (depending on complexity). If extra pages, content, or integrations are needed, we define clear timelines before starting.",
          },
          {
            q: "How much does a website cost for my restaurant or hotel?",
            a: "Packages start from \u20ac1,290 for restaurants and \u20ac1,490 for hotels. The final price depends on pages, integrations, and customization level. Book a free audit to get a tailored quote.",
          },
          {
            q: "Do we need a beautiful site or a site that gets results?",
            a: "We design for action: bookings, calls, and leads. The design is premium, but conversion-focused: visible CTAs, simple journey, smartphone-first, real speed.",
          },
          {
            q: "Do you also handle menus, photos, and content?",
            a: "Yes. We set up structure and sections, optimize photos, and make the menu immediate (PDF + indexable web page). If you already have content we adapt it; if not, we guide you on what really matters.",
          },
          {
            q: "Will the site be Google-friendly?",
            a: "Yes. We set a clean local SEO foundation: proper structure, performance, headings, and clear content. No magic promises, just technical choices that truly help discoverability.",
          },
          {
            q: "Can I update the menu or content myself?",
            a: "Yes. We deliver the site with an easily updatable structure. For those who prefer not to worry about it, we offer monthly maintenance plans that include content, menu, and photo updates.",
          },
          {
            q: "Do I own the website?",
            a: "Absolutely. The domain, content, and images are yours. The site is delivered complete and functional, with no lock-in.",
          },
          {
            q: "What happens after delivery?",
            a: "After launch you can manage the site yourself or activate a maintenance plan. We offer three levels: Essential (technical updates and security), Business (content and light SEO), Performance (conversion optimization and monthly reports).",
          },
          {
            q: "How do you measure if it works?",
            a: "We track clicks on key actions (CTAs, menu, contacts, map). This helps us understand what generates leads and what to optimize.",
          },
          {
            q: "Do you only work in Milan?",
            a: "We're based in Milan, but we work across Italy and with international properties. Most of the process is remote, with alignment calls and real-time sharing.",
          },
        ];

  const proveRapide =
    locale === "it"
      ? [
          { valore: "14 gg", etichetta: "Consegna tipica" },
          { valore: "< 24h", etichetta: "Primo riscontro" },
          { valore: "100%", etichetta: "Focalizzati su conversione" },
        ]
      : [
          { valore: "14 days", etichetta: "Typical delivery" },
          { valore: "< 24h", etichetta: "First response" },
          { valore: "100%", etichetta: "Conversion-focused" },
        ];

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
            {locale === "it"
              ? "Domande frequenti"
              : "Frequently asked questions"}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-(--muted)">
            {locale === "it"
              ? "Risposte dirette per chi deve decidere."
              : "Straight answers for decision makers."}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {proveRapide.map((prova) => (
              <div
                key={prova.etichetta}
                className="glass gradient-border rounded-2xl px-4 py-3"
              >
                <p className="text-lg font-semibold tracking-tight text-foreground">
                  {prova.valore}
                </p>
                <p className="text-xs text-(--muted)">{prova.etichetta}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-item-${idx}`;
            return (
              <div
                key={`faq-${idx}`}
                className={
                  "glass gradient-border card-tech rounded-3xl " +
                  (isOpen ? "panel-tech" : "")
                }
              >
                <button
                  type="button"
                  className="focus-ring flex w-full items-center justify-between gap-4 rounded-3xl px-6 py-5 text-left"
                  onClick={() => {
                    const nextOpen = isOpen ? null : idx;
                    setOpenIndex(nextOpen);
                    trackFaqToggle({
                      indice: idx,
                      azione: nextOpen === idx ? "aperta" : "chiusa",
                    });
                  }}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="text-sm font-semibold tracking-tight sm:text-base">
                    {f.q}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-200/20 bg-slate-900/75 text-cyan-100">
                    <ChevronDown
                      className={
                        "h-5 w-5 transition-transform duration-200 " +
                        (isOpen ? "rotate-180" : "rotate-0")
                      }
                    />
                  </span>
                </button>
                <div
                  id={contentId}
                  className={
                    "faq-item-content grid overflow-hidden transition-[grid-template-rows,opacity] ease-out " +
                    (reduce ? "duration-0 " : "duration-150 ") +
                    (isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0")
                  }
                >
                  <div className="min-h-0">
                    <p className="px-6 pb-6 text-sm leading-7 text-(--muted)">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
