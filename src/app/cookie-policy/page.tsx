import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cookies } from "next/headers";
import { COMPANY_NAME, COMPANY_VAT, EMAIL_TO, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Informativa cookie del sito ${COMPANY_NAME}.`,
  alternates: {
    canonical: "/cookie-policy",
  },
};

const effectiveDate = "21 febbraio 2026";

export default async function CookiePolicyPage() {
  const cookieStore = await cookies();
  const locale =
    cookieStore.get("site_locale_v1")?.value === "en" ? "en" : "it";

  const cookieTable = [
    {
      name: "site_locale_v1",
      provider: COMPANY_NAME,
      purpose: locale === "it" ? "Memorizza la lingua scelta dall'utente" : "Stores the user's language preference",
      duration: locale === "it" ? "1 anno" : "1 year",
      type: locale === "it" ? "Tecnico" : "Technical",
    },
    {
      name: "cookie_consent_v1",
      provider: COMPANY_NAME,
      purpose: locale === "it" ? "Registra le preferenze cookie dell'utente" : "Records the user's cookie preferences",
      duration: locale === "it" ? "1 anno" : "1 year",
      type: locale === "it" ? "Tecnico" : "Technical",
    },
    {
      name: "_ga",
      provider: "Google Analytics",
      purpose: locale === "it" ? "Distingue gli utenti per analisi aggregate del traffico" : "Distinguishes users for aggregated traffic analysis",
      duration: locale === "it" ? "2 anni" : "2 years",
      type: locale === "it" ? "Analitico" : "Analytics",
    },
    {
      name: "_ga_*",
      provider: "Google Analytics",
      purpose: locale === "it" ? "Mantiene lo stato della sessione di analisi" : "Maintains analytics session state",
      duration: locale === "it" ? "2 anni" : "2 years",
      type: locale === "it" ? "Analitico" : "Analytics",
    },
  ];

  return (
    <main className="main-ambient min-h-screen overflow-hidden">
      <section className="section-pad">
        <div className="container-pad">
          <article className="glass-strong gradient-border panel-tech mx-auto max-w-4xl rounded-3xl p-6 sm:p-10">
            <h1 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Cookie Policy
            </h1>
            <p className="mt-3 text-sm text-(--muted)">
              {locale === "it" ? "Ultimo aggiornamento" : "Last updated"}:{" "}
              {effectiveDate}
            </p>

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-(--muted)">
              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "1. Cosa sono i cookie"
                    : "1. What Cookies Are"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "I cookie sono piccoli file di testo memorizzati sul dispositivo dell'utente durante la navigazione. Servono a garantire funzionalità tecniche essenziali, sicurezza e analisi aggregate dell'utilizzo del sito. Questa policy è conforme al Regolamento UE 2016/679 (GDPR) e alla Direttiva 2002/58/CE (ePrivacy), come recepita in Italia dal D.Lgs. 196/2003 e successive modifiche."
                    : "Cookies are small text files stored on the user's device while browsing. They support essential technical functionality, security, and aggregated website usage analysis. This policy complies with EU Regulation 2016/679 (GDPR) and Directive 2002/58/EC (ePrivacy), as implemented in Italy by Legislative Decree 196/2003 and subsequent amendments."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "2. Titolare del trattamento"
                    : "2. Data Controller"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? `Il titolare del trattamento è ${COMPANY_NAME}, P.IVA ${COMPANY_VAT}, operante in regime forfettario ai sensi dell'Art. 1, commi 54-89, L. 190/2014. Contatto:`
                    : `The data controller is ${COMPANY_NAME}, VAT ID ${COMPANY_VAT}, operating under the Italian flat-rate regime (Art. 1, paragraphs 54-89, Law 190/2014). Contact:`}{" "}
                  <a
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href={`mailto:${EMAIL_TO}`}
                  >
                    {EMAIL_TO}
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "3. Tipologie di cookie utilizzati"
                    : "3. Types of Cookies Used"}
                </h2>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-foreground">{locale === "it" ? "Cookie tecnici (necessari)" : "Technical cookies (necessary)"}</strong>
                    <br />
                    {locale === "it"
                      ? "Indispensabili per il funzionamento del sito. Non richiedono consenso. Includono la memorizzazione della lingua e delle preferenze cookie."
                      : "Essential for website operation. Do not require consent. Include language preference and cookie preference storage."}
                  </li>
                  <li>
                    <strong className="text-foreground">{locale === "it" ? "Cookie analitici" : "Analytics cookies"}</strong>
                    <br />
                    {locale === "it"
                      ? "Misurano traffico e interazioni in forma aggregata e anonimizzata tramite Google Analytics (con IP anonimizzato). Attivati solo previo consenso."
                      : "Measure traffic and interactions in aggregated and anonymized form via Google Analytics (with anonymized IP). Activated only with prior consent."}
                  </li>
                </ul>
                <p className="mt-2">
                  {locale === "it"
                    ? "Questo sito non utilizza cookie di profilazione o di marketing."
                    : "This website does not use profiling or marketing cookies."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "4. Elenco dettagliato dei cookie"
                    : "4. Detailed Cookie List"}
                </h2>
                <div className="mt-2 overflow-x-auto">
                  <table className="w-full border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-white/15">
                        <th className="py-2 pr-3 text-left font-semibold text-foreground">Cookie</th>
                        <th className="py-2 pr-3 text-left font-semibold text-foreground">{locale === "it" ? "Fornitore" : "Provider"}</th>
                        <th className="py-2 pr-3 text-left font-semibold text-foreground">{locale === "it" ? "Finalità" : "Purpose"}</th>
                        <th className="py-2 pr-3 text-left font-semibold text-foreground">{locale === "it" ? "Durata" : "Duration"}</th>
                        <th className="py-2 text-left font-semibold text-foreground">{locale === "it" ? "Tipo" : "Type"}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {cookieTable.map((cookie) => (
                        <tr key={cookie.name}>
                          <td className="py-2 pr-3 font-mono">{cookie.name}</td>
                          <td className="py-2 pr-3">{cookie.provider}</td>
                          <td className="py-2 pr-3">{cookie.purpose}</td>
                          <td className="py-2 pr-3">{cookie.duration}</td>
                          <td className="py-2">{cookie.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it" ? "5. Base giuridica" : "5. Legal Basis"}
                </h2>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    {locale === "it"
                      ? "Cookie tecnici: legittimo interesse all'erogazione del servizio (Art. 6.1.f GDPR), esenti da consenso ai sensi dell'Art. 122 D.Lgs. 196/2003."
                      : "Technical cookies: legitimate interest for service delivery (Art. 6.1.f GDPR), exempt from consent under Art. 122 of Italian Legislative Decree 196/2003."}
                  </li>
                  <li>
                    {locale === "it"
                      ? "Cookie analitici: consenso dell'utente (Art. 6.1.a GDPR), raccolto tramite il banner cookie al primo accesso."
                      : "Analytics cookies: user consent (Art. 6.1.a GDPR), collected via the cookie banner on first visit."}
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "6. Gestione delle preferenze"
                    : "6. Preference Management"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Al primo accesso al sito, un banner ti permette di accettare o rifiutare i cookie analitici. Puoi modificare le tue preferenze in qualsiasi momento tramite il pulsante \"Preferenze cookie\" nel footer del sito."
                    : "On your first visit, a banner allows you to accept or reject analytics cookies. You can change your preferences at any time via the \"Cookie preferences\" button in the website footer."}
                </p>
                <p className="mt-2">
                  {locale === "it"
                    ? "Puoi inoltre gestire i cookie direttamente tramite le impostazioni del browser. Tieni presente che la disattivazione dei cookie tecnici può compromettere il corretto funzionamento di alcune parti del sito."
                    : "You can also manage cookies directly through your browser settings. Note that disabling technical cookies may affect proper operation of some website areas."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "7. Servizi di terze parti"
                    : "7. Third-Party Services"}
                </h2>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-foreground">Google Analytics</strong>
                    <br />
                    {locale === "it"
                      ? "Servizio di analisi web fornito da Google LLC. IP anonimizzato. Informativa:"
                      : "Web analytics service provided by Google LLC. Anonymized IP. Policy:"}{" "}
                    <a className="underline decoration-cyan-300/60 underline-offset-4" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>
                  </li>
                  <li>
                    <strong className="text-foreground">Calendly</strong>
                    <br />
                    {locale === "it"
                      ? "Servizio di pianificazione appuntamenti fornito da Calendly LLC. Può impostare propri cookie secondo la propria informativa:"
                      : "Appointment scheduling service provided by Calendly LLC. May set its own cookies according to its policy:"}{" "}
                    <a className="underline decoration-cyan-300/60 underline-offset-4" href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">calendly.com/privacy</a>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "8. Trasferimenti extra UE"
                    : "8. Transfers Outside the EU"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Google e Calendly hanno sede negli Stati Uniti. I trasferimenti di dati avvengono sulla base dell'EU-US Data Privacy Framework e/o clausole contrattuali standard, ai sensi degli Artt. 45-46 GDPR."
                    : "Google and Calendly are based in the United States. Data transfers are carried out under the EU-US Data Privacy Framework and/or standard contractual clauses, pursuant to Arts. 45-46 GDPR."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it" ? "9. Contatti" : "9. Contacts"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Per informazioni su questa policy o per esercitare i tuoi diritti relativi ai cookie, scrivi a"
                    : "For information about this policy or to exercise your cookie-related rights, write to"}{" "}
                  <a
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href={`mailto:${EMAIL_TO}`}
                  >
                    {EMAIL_TO}
                  </a>
                  .
                </p>
                <p className="mt-2">
                  {locale === "it"
                    ? "La versione aggiornata di questa policy è sempre disponibile su"
                    : "The updated version of this policy is always available at"}{" "}
                  <a
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href={`${SITE_URL}/cookie-policy`}
                  >
                    {SITE_URL}/cookie-policy
                  </a>
                  .
                </p>
              </section>
            </div>

            <div className="mt-8">
              <Link href="/" className="btn-secondary focus-ring inline-flex">
                <ArrowLeft className="h-4 w-4" />
                {locale === "it" ? "Torna alla home" : "Back to home"}
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}