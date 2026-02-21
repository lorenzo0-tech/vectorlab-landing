"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import { Locale, useLanguage } from "@/components/LanguageProvider";
import { CALENDLY_URL, EMAIL_TO } from "@/lib/constants";
import {
  trackAllertaConversione,
  trackCtaClick,
  trackLeadSubmitAttempt,
  trackLeadSubmitError,
  trackLeadSubmitSuccess,
  trackValidazioneModulo,
} from "@/lib/analytics-events";

type FormState = {
  nome: string;
  email: string;
  telefono: string;
  attivita: string;
  citta: string;
  sito: string;
  obiettivo: string;
  messaggio: string;
  websiteTrap: string;
};

const initial: FormState = {
  nome: "",
  email: "",
  telefono: "",
  attivita: "",
  citta: "",
  sito: "",
  obiettivo: "",
  messaggio: "",
  websiteTrap: "",
};

type CampoForm = Exclude<keyof FormState, "websiteTrap">;

const CAMPI_OBBLIGATORI: CampoForm[] = [
  "nome",
  "email",
  "attivita",
  "citta",
  "obiettivo",
  "messaggio",
];

function validaCampo(campo: CampoForm, valore: string, locale: Locale) {
  const pulito = valore.trim();

  if (CAMPI_OBBLIGATORI.includes(campo) && pulito.length < 2) {
    return locale === "it" ? "Campo obbligatorio" : "Required field";
  }

  if (campo === "email") {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(pulito);
    if (!ok) return locale === "it" ? "Email non valida" : "Invalid email";
  }

  if (campo === "telefono" && pulito.length > 0) {
    const ok = /^[+()\d\s-]{6,24}$/.test(pulito);
    if (!ok) return locale === "it" ? "Telefono non valido" : "Invalid phone";
  }

  if (campo === "sito" && pulito.length > 0) {
    const ok = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}/i.test(pulito);
    if (!ok) return locale === "it" ? "Sito non valido" : "Invalid website";
  }

  if (campo === "obiettivo" && pulito.length > 0 && pulito.length < 4) {
    return locale === "it"
      ? "Inserisci almeno 4 caratteri"
      : "Enter at least 4 characters";
  }

  if (campo === "messaggio" && pulito.length > 0 && pulito.length < 10) {
    return locale === "it"
      ? "Inserisci almeno 10 caratteri"
      : "Enter at least 10 characters";
  }

  return "";
}

function validaTutto(values: FormState, locale: Locale) {
  const errori: Partial<Record<CampoForm, string>> = {};
  const campi: CampoForm[] = [
    "nome",
    "email",
    "telefono",
    "attivita",
    "citta",
    "sito",
    "obiettivo",
    "messaggio",
  ];

  for (const campo of campi) {
    const errore = validaCampo(campo, values[campo], locale);
    if (errore) errori[campo] = errore;
  }

  return errori;
}

function buildMailto(values: FormState, locale: Locale) {
  const subject =
    locale === "it"
      ? `Richiesta preventivo — ${values.attivita || "Attività"} (${values.citta || "Città"})`
      : `Quote request — ${values.attivita || "Business"} (${values.citta || "City"})`;
  const bodyLines = [
    `${locale === "it" ? "Nome" : "Name"}: ${values.nome}`,
    `Email: ${values.email}`,
    `${locale === "it" ? "Telefono" : "Phone"}: ${values.telefono || "-"}`,
    `${locale === "it" ? "Attività" : "Business"}: ${values.attivita}`,
    `${locale === "it" ? "Città" : "City"}: ${values.citta}`,
    `${locale === "it" ? "Sito attuale" : "Current website"}: ${values.sito}`,
    `${locale === "it" ? "Obiettivo" : "Goal"}: ${values.obiettivo}`,
    "",
    `${locale === "it" ? "Messaggio" : "Message"}:`,
    values.messaggio,
  ];

  const body = bodyLines.join("\n");
  return `mailto:${encodeURIComponent(EMAIL_TO)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function FinalCTA() {
  const { locale } = useLanguage();
  const reduce = useReducedMotion();
  const router = useRouter();
  const [values, setValues] = useState<FormState>(initial);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<CampoForm, string>>
  >({});
  const [touched, setTouched] = useState<Partial<Record<CampoForm, boolean>>>(
    {},
  );
  const [startedAt] = useState(() => Date.now());
  const mailto = useMemo(() => buildMailto(values, locale), [locale, values]);

  const setCampo = (campo: CampoForm, valore: string) => {
    setValues((v) => ({ ...v, [campo]: valore }));

    if (touched[campo]) {
      const errore = validaCampo(campo, valore, locale);
      setFieldErrors((prev) => ({ ...prev, [campo]: errore }));
      trackValidazioneModulo({
        campo,
        esito: errore ? "errore" : "ok",
      });
    }
  };

  const onBlurCampo = (campo: CampoForm) => {
    setTouched((prev) => ({ ...prev, [campo]: true }));
    const errore = validaCampo(campo, values[campo], locale);
    setFieldErrors((prev) => ({ ...prev, [campo]: errore }));
    trackValidazioneModulo({
      campo,
      esito: errore ? "errore" : "ok",
    });
  };

  const calendlyEmbedUrl = useMemo(() => {
    if (!CALENDLY_URL || CALENDLY_URL.includes("tuo-link")) return null;

    try {
      const url = new URL(CALENDLY_URL);
      if (!url.hostname.includes("calendly.com")) return null;

      url.searchParams.set("hide_event_type_details", "1");
      url.searchParams.set("hide_gdpr_banner", "1");
      url.searchParams.set("primary_color", "06b6d4");
      return url.toString();
    } catch {
      return null;
    }
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const errori = validaTutto(values, locale);
    setFieldErrors(errori);
    setTouched({
      nome: true,
      email: true,
      telefono: true,
      attivita: true,
      citta: true,
      sito: true,
      obiettivo: true,
      messaggio: true,
    });

    if (Object.values(errori).some(Boolean)) {
      setErrorMessage(
        locale === "it"
          ? "Controlla i campi evidenziati e riprova."
          : "Check the highlighted fields and try again.",
      );
      return;
    }

    setIsSubmitting(true);

    trackLeadSubmitAttempt({
      sorgente: "modulo_cta_finale",
      citta: values.citta,
    });

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          _startedAt: startedAt,
          _trap: values.websiteTrap,
        }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          message?: string;
        } | null;
        throw new Error(
          body?.message ??
            (locale === "it" ? "Invio non riuscito." : "Submission failed."),
        );
      }

      trackLeadSubmitSuccess({
        sorgente: "modulo_cta_finale",
        citta: values.citta,
      });

      if (typeof window !== "undefined") {
        window.sessionStorage.removeItem("contatti_errori_consecutivi");
      }

      router.push("/grazie");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : locale === "it"
            ? "Errore durante l'invio. Riprova."
            : "Error while sending. Please try again.";

      setErrorMessage(message);
      trackLeadSubmitError({
        sorgente: "modulo_cta_finale",
      });

      if (typeof window !== "undefined") {
        const current = Number(
          window.sessionStorage.getItem("contatti_errori_consecutivi") ?? "0",
        );
        const prossimo = current + 1;
        window.sessionStorage.setItem(
          "contatti_errori_consecutivi",
          String(prossimo),
        );
        if (prossimo >= 3) {
          trackAllertaConversione({ erroriConsecutivi: prossimo });
        }
      }
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
                {locale === "it"
                  ? "Se il tuo sito non sta portando clienti, è un costo. Noi lo trasformiamo in uno strumento che produce risultati."
                  : "If your website is not bringing customers, it is a cost. We turn it into a tool that generates results."}
              </h2>
              <p className="mt-4 text-lg leading-8 text-(--muted)">
                {locale === "it"
                  ? "Partiamo da una chiamata di 15 minuti: obiettivo chiaro, azione principale, e la struttura giusta per far muovere le persone."
                  : "We start with a 15-minute call: clear goal, primary action, and the right structure to drive action."}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary focus-ring"
                  onClick={() =>
                    trackCtaClick({
                      posizione: "cta_finale",
                      destinazione: "calendly",
                    })
                  }
                >
                  {locale === "it"
                    ? "Prenota una chiamata (15 min)"
                    : "Book a call (15 min)"}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="#preventivo" className="btn-secondary focus-ring">
                  {locale === "it"
                    ? "Richiedi un preventivo"
                    : "Request a quote"}
                </a>
              </div>

              {calendlyEmbedUrl ? (
                <div className="mt-6 overflow-hidden rounded-2xl border border-white/15 bg-slate-950/70">
                  <p className="px-4 pt-4 text-xs font-semibold tracking-widest text-(--muted)">
                    {locale === "it" ? "CALENDARIO RAPIDO" : "QUICK CALENDAR"}
                  </p>
                  <iframe
                    title={
                      locale === "it"
                        ? "Calendario prenotazione chiamata"
                        : "Call booking calendar"
                    }
                    src={calendlyEmbedUrl}
                    className="h-155 w-full"
                    loading="lazy"
                  />
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-6">
              <div id="preventivo" className="scroll-mt-28">
                <h3 className="text-base font-semibold tracking-tight">
                  {locale === "it"
                    ? "Richiedi un preventivo"
                    : "Request a quote"}
                </h3>
                <p className="mt-2 text-sm leading-7 text-(--muted)">
                  {locale === "it"
                    ? "Compila i campi essenziali: prepariamo una prima proposta di struttura e le azioni da spingere."
                    : "Fill in the essential fields: we prepare an initial structure proposal and the key actions to prioritize."}
                </p>

                <form onSubmit={onSubmit} className="lead-form mt-6 space-y-3">
                  <label className="hidden" aria-hidden="true">
                    <span>Sito esca</span>
                    <input
                      tabIndex={-1}
                      autoComplete="off"
                      value={values.websiteTrap}
                      onChange={(e) =>
                        setValues((v) => ({
                          ...v,
                          websiteTrap: e.target.value,
                        }))
                      }
                    />
                  </label>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="space-y-1">
                      <span className="text-xs font-semibold text-(--muted)">
                        {locale === "it" ? "Nome" : "Name"}
                      </span>
                      <input
                        className="focus-ring w-full rounded-2xl border border-cyan-200/20 bg-slate-950/72 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400"
                        value={values.nome}
                        onChange={(e) => setCampo("nome", e.target.value)}
                        onBlur={() => onBlurCampo("nome")}
                        aria-invalid={Boolean(fieldErrors.nome)}
                        required
                      />
                      {touched.nome && fieldErrors.nome ? (
                        <p className="mt-1 text-xs text-rose-300">
                          {fieldErrors.nome}
                        </p>
                      ) : null}
                    </label>
                    <label className="space-y-1">
                      <span className="text-xs font-semibold text-(--muted)">
                        Email
                      </span>
                      <input
                        type="email"
                        className="focus-ring w-full rounded-2xl border border-cyan-200/20 bg-slate-950/72 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400"
                        value={values.email}
                        onChange={(e) => setCampo("email", e.target.value)}
                        onBlur={() => onBlurCampo("email")}
                        aria-invalid={Boolean(fieldErrors.email)}
                        required
                      />
                      {touched.email && fieldErrors.email ? (
                        <p className="mt-1 text-xs text-rose-300">
                          {fieldErrors.email}
                        </p>
                      ) : null}
                    </label>
                    <label className="space-y-1">
                      <span className="text-xs font-semibold text-(--muted)">
                        {locale === "it"
                          ? "Telefono (opzionale)"
                          : "Phone (optional)"}
                      </span>
                      <input
                        className="focus-ring w-full rounded-2xl border border-cyan-200/20 bg-slate-950/72 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400"
                        value={values.telefono}
                        onChange={(e) => setCampo("telefono", e.target.value)}
                        onBlur={() => onBlurCampo("telefono")}
                        aria-invalid={Boolean(fieldErrors.telefono)}
                        placeholder="+39 ..."
                      />
                      {touched.telefono && fieldErrors.telefono ? (
                        <p className="mt-1 text-xs text-rose-300">
                          {fieldErrors.telefono}
                        </p>
                      ) : null}
                    </label>
                    <label className="space-y-1">
                      <span className="text-xs font-semibold text-(--muted)">
                        {locale === "it" ? "Attività" : "Business"}
                      </span>
                      <input
                        className="focus-ring w-full rounded-2xl border border-cyan-200/20 bg-slate-950/72 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400"
                        value={values.attivita}
                        onChange={(e) => setCampo("attivita", e.target.value)}
                        onBlur={() => onBlurCampo("attivita")}
                        aria-invalid={Boolean(fieldErrors.attivita)}
                        required
                      />
                      {touched.attivita && fieldErrors.attivita ? (
                        <p className="mt-1 text-xs text-rose-300">
                          {fieldErrors.attivita}
                        </p>
                      ) : null}
                    </label>
                    <label className="space-y-1">
                      <span className="text-xs font-semibold text-(--muted)">
                        {locale === "it" ? "Città" : "City"}
                      </span>
                      <input
                        className="focus-ring w-full rounded-2xl border border-cyan-200/20 bg-slate-950/72 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400"
                        value={values.citta}
                        onChange={(e) => setCampo("citta", e.target.value)}
                        onBlur={() => onBlurCampo("citta")}
                        aria-invalid={Boolean(fieldErrors.citta)}
                        required
                      />
                      {touched.citta && fieldErrors.citta ? (
                        <p className="mt-1 text-xs text-rose-300">
                          {fieldErrors.citta}
                        </p>
                      ) : null}
                    </label>
                    <label className="space-y-1">
                      <span className="text-xs font-semibold text-(--muted)">
                        {locale === "it" ? "Sito attuale" : "Current website"}
                      </span>
                      <input
                        className="focus-ring w-full rounded-2xl border border-cyan-200/20 bg-slate-950/72 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400"
                        value={values.sito}
                        onChange={(e) => setCampo("sito", e.target.value)}
                        onBlur={() => onBlurCampo("sito")}
                        aria-invalid={Boolean(fieldErrors.sito)}
                        placeholder="https://"
                      />
                      {touched.sito && fieldErrors.sito ? (
                        <p className="mt-1 text-xs text-rose-300">
                          {fieldErrors.sito}
                        </p>
                      ) : null}
                    </label>
                  </div>

                  <label className="space-y-1">
                    <span className="text-xs font-semibold text-(--muted)">
                      {locale === "it" ? "Obiettivo" : "Goal"}
                    </span>
                    <input
                      className="focus-ring w-full rounded-2xl border border-cyan-200/20 bg-slate-950/72 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400"
                      value={values.obiettivo}
                      onChange={(e) => setCampo("obiettivo", e.target.value)}
                      onBlur={() => onBlurCampo("obiettivo")}
                      aria-invalid={Boolean(fieldErrors.obiettivo)}
                      required
                      placeholder={
                        locale === "it"
                          ? "Prenotazioni, chiamate, richieste…"
                          : "Bookings, calls, leads…"
                      }
                    />
                    {touched.obiettivo && fieldErrors.obiettivo ? (
                      <p className="mt-1 text-xs text-rose-300">
                        {fieldErrors.obiettivo}
                      </p>
                    ) : null}
                  </label>

                  <label className="space-y-1">
                    <span className="text-xs font-semibold text-(--muted)">
                      {locale === "it" ? "Messaggio" : "Message"}
                    </span>
                    <textarea
                      className="focus-ring min-h-28 w-full resize-none rounded-2xl border border-cyan-200/20 bg-slate-950/72 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400"
                      value={values.messaggio}
                      onChange={(e) => setCampo("messaggio", e.target.value)}
                      onBlur={() => onBlurCampo("messaggio")}
                      aria-invalid={Boolean(fieldErrors.messaggio)}
                      required
                    />
                    {touched.messaggio && fieldErrors.messaggio ? (
                      <p className="mt-1 text-xs text-rose-300">
                        {fieldErrors.messaggio}
                      </p>
                    ) : null}
                  </label>

                  <button
                    type="submit"
                    className="btn-primary focus-ring w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? locale === "it"
                        ? "Invio in corso..."
                        : "Sending..."
                      : locale === "it"
                        ? "Invia richiesta"
                        : "Send request"}
                    <Send className="h-4 w-4" />
                  </button>

                  <p className="text-xs text-(--muted)">
                    {locale === "it"
                      ? "Invio diretto dal sito. Se il server non è configurato puoi usare l'alternativa via email qui sotto."
                      : "Direct website submission. If the server is not configured, you can use the email alternative below."}
                  </p>
                  <a
                    href={mailto}
                    className="text-xs font-semibold text-cyan-200 underline-offset-2 hover:text-cyan-100 hover:underline"
                  >
                    {locale === "it"
                      ? "Alternativa: apri email precompilata"
                      : "Alternative: open pre-filled email"}
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
