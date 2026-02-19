"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import { CALENDLY_URL, EMAIL_TO } from "@/lib/constants";
import {
  trackCtaClick,
  trackLeadSubmitAttempt,
  trackLeadSubmitError,
  trackLeadSubmitSuccess,
} from "@/lib/analytics-events";

type FormState = {
  nome: string;
  attivita: string;
  citta: string;
  sito: string;
  obiettivo: string;
  messaggio: string;
};

const initial: FormState = {
  nome: "",
  attivita: "",
  citta: "",
  sito: "",
  obiettivo: "",
  messaggio: "",
};

function buildMailto(values: FormState) {
  const subject = `Richiesta preventivo — ${values.attivita || "Attività"} (${values.citta || "Città"})`;
  const bodyLines = [
    `Nome: ${values.nome}`,
    `Attività: ${values.attivita}`,
    `Città: ${values.citta}`,
    `Sito attuale: ${values.sito}`,
    `Obiettivo: ${values.obiettivo}`,
    "",
    "Messaggio:",
    values.messaggio,
  ];

  const body = bodyLines.join("\n");
  return `mailto:${encodeURIComponent(EMAIL_TO)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function FinalCTA() {
  const reduce = useReducedMotion();
  const router = useRouter();
  const [values, setValues] = useState<FormState>(initial);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const mailto = useMemo(() => buildMailto(values), [values]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    trackLeadSubmitAttempt({
      source: "final_cta_form",
      city: values.citta,
    });

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          message?: string;
        } | null;
        throw new Error(body?.message ?? "Invio non riuscito.");
      }

      trackLeadSubmitSuccess({
        source: "final_cta_form",
        city: values.citta,
      });

      router.push("/grazie");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Errore durante l'invio. Riprova.";

      setErrorMessage(message);
      trackLeadSubmitError({
        source: "final_cta_form",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-pad">
      <div className="container-pad">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
          className="glass-strong gradient-border panel-tech card-tech rounded-3xl p-6 sm:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <h2 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Se il tuo sito non sta portando clienti, è un costo. Noi lo
                trasformiamo in un asset.
              </h2>
              <p className="mt-4 text-lg leading-8 text-(--muted)">
                Partiamo da una call di 15 minuti: obiettivo chiaro, azione
                principale, e la struttura giusta per far muovere le persone.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary focus-ring"
                  onClick={() =>
                    trackCtaClick({
                      location: "final_cta",
                      target: "calendly",
                    })
                  }
                >
                  Prenota una call (15 min)
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="#preventivo" className="btn-secondary focus-ring">
                  Richiedi un preventivo
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div id="preventivo" className="scroll-mt-28">
                <h3 className="text-base font-semibold tracking-tight">
                  Richiedi un preventivo
                </h3>
                <p className="mt-2 text-sm leading-7 text-(--muted)">
                  Compila i campi essenziali: prepariamo una prima proposta di
                  struttura e le azioni da spingere.
                </p>

                <form onSubmit={onSubmit} className="mt-6 space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="space-y-1">
                      <span className="text-xs font-semibold text-(--muted)">
                        Nome
                      </span>
                      <input
                        className="focus-ring w-full rounded-2xl border border-black/10 bg-white/95 px-4 py-3 text-sm"
                        value={values.nome}
                        onChange={(e) =>
                          setValues((v) => ({ ...v, nome: e.target.value }))
                        }
                        required
                      />
                    </label>
                    <label className="space-y-1">
                      <span className="text-xs font-semibold text-(--muted)">
                        Attività
                      </span>
                      <input
                        className="focus-ring w-full rounded-2xl border border-black/10 bg-white/95 px-4 py-3 text-sm"
                        value={values.attivita}
                        onChange={(e) =>
                          setValues((v) => ({ ...v, attivita: e.target.value }))
                        }
                        required
                      />
                    </label>
                    <label className="space-y-1">
                      <span className="text-xs font-semibold text-(--muted)">
                        Città
                      </span>
                      <input
                        className="focus-ring w-full rounded-2xl border border-black/10 bg-white/95 px-4 py-3 text-sm"
                        value={values.citta}
                        onChange={(e) =>
                          setValues((v) => ({ ...v, citta: e.target.value }))
                        }
                        required
                      />
                    </label>
                    <label className="space-y-1">
                      <span className="text-xs font-semibold text-(--muted)">
                        Sito attuale
                      </span>
                      <input
                        className="focus-ring w-full rounded-2xl border border-black/10 bg-white/95 px-4 py-3 text-sm"
                        value={values.sito}
                        onChange={(e) =>
                          setValues((v) => ({ ...v, sito: e.target.value }))
                        }
                        placeholder="https://"
                      />
                    </label>
                  </div>

                  <label className="space-y-1">
                    <span className="text-xs font-semibold text-(--muted)">
                      Obiettivo
                    </span>
                    <input
                      className="focus-ring w-full rounded-2xl border border-black/10 bg-white/95 px-4 py-3 text-sm"
                      value={values.obiettivo}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, obiettivo: e.target.value }))
                      }
                      required
                      placeholder="Prenotazioni, chiamate, richieste…"
                    />
                  </label>

                  <label className="space-y-1">
                    <span className="text-xs font-semibold text-(--muted)">
                      Messaggio
                    </span>
                    <textarea
                      className="focus-ring min-h-28 w-full resize-none rounded-2xl border border-black/10 bg-white/95 px-4 py-3 text-sm"
                      value={values.messaggio}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, messaggio: e.target.value }))
                      }
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="btn-primary focus-ring w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Invio in corso..." : "Invia richiesta"}
                    <Send className="h-4 w-4" />
                  </button>

                  <p className="text-xs text-(--muted)">
                    Invio diretto dal sito. Se il server non è configurato puoi
                    usare il fallback email qui sotto.
                  </p>
                  <a
                    href={mailto}
                    className="text-xs font-semibold text-cyan-800 underline-offset-2 hover:underline"
                  >
                    Fallback: apri email precompilata
                  </a>

                  {errorMessage ? (
                    <p className="mt-2 text-sm font-semibold text-rose-700">
                      {errorMessage}
                    </p>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
