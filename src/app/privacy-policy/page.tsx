import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cookies } from "next/headers";
import {
  COMPANY_CITY,
  COMPANY_NAME,
  COMPANY_VAT,
  EMAIL_TO,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Informativa privacy di ${COMPANY_NAME} ai sensi del GDPR.`,
  alternates: {
    canonical: "/privacy-policy",
  },
};

const effectiveDate = "21 febbraio 2026";

export default async function PrivacyPolicyPage() {
  const cookieStore = await cookies();
  const locale =
    cookieStore.get("site_locale_v1")?.value === "en" ? "en" : "it";

  return (
    <main className="main-ambient min-h-screen overflow-hidden">
      <section className="section-pad">
        <div className="container-pad">
          <article className="glass-strong gradient-border panel-tech mx-auto max-w-4xl rounded-3xl p-6 sm:p-10">
            <h1 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-(--muted)">
              {locale === "it" ? "Ultimo aggiornamento" : "Last updated"}:{" "}
              {effectiveDate}
            </p>

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-(--muted)">
              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "1. Titolare del trattamento"
                    : "1. Data Controller"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? `Il titolare del trattamento dei dati personali è ${COMPANY_NAME}, ditta individuale con sede operativa in ${COMPANY_CITY}, P.IVA ${COMPANY_VAT}, operante in regime forfettario ai sensi dell'Art. 1, commi 54-89, Legge 23 dicembre 2014, n. 190.`
                    : `The data controller is ${COMPANY_NAME}, sole proprietorship based in ${COMPANY_CITY}, VAT ID ${COMPANY_VAT}, operating under the Italian flat-rate regime (Art. 1, paragraphs 54-89, Law no. 190 of 23 December 2014).`}
                </p>
                <p className="mt-2">
                  {locale === "it" ? "Contatto privacy:" : "Privacy contact:"}{" "}
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
                    ? "2. Responsabile della protezione dei dati (DPO)"
                    : "2. Data Protection Officer (DPO)"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? `${COMPANY_NAME} non è tenuta alla nomina di un Responsabile della Protezione dei Dati (DPO) ai sensi dell'Art. 37 del Regolamento UE 2016/679. Per qualsiasi richiesta relativa alla protezione dei dati, è possibile contattare direttamente il titolare all'indirizzo indicato sopra.`
                    : `${COMPANY_NAME} is not required to appoint a Data Protection Officer (DPO) pursuant to Art. 37 of EU Regulation 2016/679. For any data protection inquiry, you may contact the controller directly at the address above.`}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it" ? "3. Dati raccolti" : "3. Data Collected"}
                </h2>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    {locale === "it"
                      ? "Dati identificativi e di contatto (es. nome, cognome, email, telefono) forniti volontariamente tramite moduli di contatto o richieste precontrattuali."
                      : "Identification and contact data (e.g. name, surname, email, phone) provided voluntarily through contact forms or pre-contractual requests."}
                  </li>
                  <li>
                    {locale === "it"
                      ? "Dati tecnici di navigazione (es. indirizzo IP, tipo di browser, sistema operativo, pagine visitate, durata della visita) raccolti automaticamente tramite cookie e strumenti di analisi."
                      : "Technical navigation data (e.g. IP address, browser type, operating system, pages visited, visit duration) collected automatically through cookies and analytics tools."}
                  </li>
                  <li>
                    {locale === "it"
                      ? "Dati relativi alla prenotazione di appuntamenti tramite servizi terzi integrati (es. Calendly)."
                      : "Data related to appointment scheduling through integrated third-party services (e.g. Calendly)."}
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "4. Finalità e base giuridica"
                    : "4. Purposes and Legal Basis"}
                </h2>
                <div className="mt-2 overflow-x-auto">
                  <table className="w-full border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-white/15">
                        <th className="py-2 pr-4 text-left font-semibold text-foreground">
                          {locale === "it" ? "Finalità" : "Purpose"}
                        </th>
                        <th className="py-2 text-left font-semibold text-foreground">
                          {locale === "it" ? "Base giuridica" : "Legal Basis"}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr>
                        <td className="py-2 pr-4">
                          {locale === "it"
                            ? "Rispondere a richieste di contatto e fornire preventivi"
                            : "Respond to contact requests and provide quotes"}
                        </td>
                        <td className="py-2">
                          {locale === "it"
                            ? "Misure precontrattuali (Art. 6.1.b GDPR)"
                            : "Pre-contractual measures (Art. 6.1.b GDPR)"}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">
                          {locale === "it"
                            ? "Garantire sicurezza e funzionamento del sito"
                            : "Ensure website security and operation"}
                        </td>
                        <td className="py-2">
                          {locale === "it"
                            ? "Legittimo interesse (Art. 6.1.f GDPR)"
                            : "Legitimate interest (Art. 6.1.f GDPR)"}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">
                          {locale === "it"
                            ? "Analisi aggregata dell'utilizzo del sito"
                            : "Aggregated website usage analysis"}
                        </td>
                        <td className="py-2">
                          {locale === "it"
                            ? "Consenso (Art. 6.1.a GDPR)"
                            : "Consent (Art. 6.1.a GDPR)"}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">
                          {locale === "it"
                            ? "Adempimento di obblighi fiscali e contabili"
                            : "Compliance with tax and accounting obligations"}
                        </td>
                        <td className="py-2">
                          {locale === "it"
                            ? "Obbligo legale (Art. 6.1.c GDPR)"
                            : "Legal obligation (Art. 6.1.c GDPR)"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "5. Cookie e tecnologie di tracciamento"
                    : "5. Cookies and Tracking Technologies"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Il sito utilizza cookie tecnici necessari al funzionamento e, previo consenso, cookie analitici per misurare il traffico in forma aggregata. Per informazioni dettagliate su ciascun cookie (nome, finalità, durata), consulta la nostra"
                    : "The website uses technical cookies required for operation and, with consent, analytics cookies to measure traffic in aggregated form. For detailed information about each cookie (name, purpose, duration), see our"}{" "}
                  <Link
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href="/cookie-policy"
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "6. Conservazione dei dati"
                    : "6. Data Retention"}
                </h2>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    {locale === "it"
                      ? "Dati di contatto/precontrattuali: conservati per 24 mesi dall'ultima interazione, salvo diversi obblighi di legge."
                      : "Contact/pre-contractual data: retained for 24 months from the last interaction, unless different legal obligations apply."}
                  </li>
                  <li>
                    {locale === "it"
                      ? "Dati fiscali e contabili: conservati per 10 anni ai sensi della normativa italiana."
                      : "Tax and accounting data: retained for 10 years under Italian law."}
                  </li>
                  <li>
                    {locale === "it"
                      ? "Dati di navigazione e analytics: conservati per il periodo indicato nella Cookie Policy."
                      : "Navigation and analytics data: retained for the period stated in the Cookie Policy."}
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "7. Destinatari e responsabili esterni"
                    : "7. Recipients and External Processors"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "I dati possono essere comunicati a fornitori tecnici strettamente necessari all'erogazione del servizio, nominati responsabili del trattamento ai sensi dell'Art. 28 GDPR ove applicabile:"
                    : "Data may be shared with technical suppliers strictly necessary for service delivery, appointed as data processors under Art. 28 GDPR where applicable:"}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Vercel Inc. ({locale === "it" ? "hosting e CDN" : "hosting and CDN"})</li>
                  <li>Google LLC (Google Analytics{locale === "it" ? ", con IP anonimizzato" : ", with anonymized IP"})</li>
                  <li>Calendly LLC ({locale === "it" ? "pianificazione appuntamenti" : "appointment scheduling"})</li>
                </ul>
                <p className="mt-2">
                  {locale === "it"
                    ? "I dati non vengono venduti, ceduti o diffusi a terzi per finalità proprie."
                    : "Data is not sold, transferred, or disclosed to third parties for their own purposes."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "8. Trasferimenti extra UE"
                    : "8. Transfers Outside the EU"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Alcuni fornitori (Vercel, Google, Calendly) hanno sede negli Stati Uniti. I trasferimenti avvengono sulla base dell'EU-US Data Privacy Framework e/o di clausole contrattuali standard approvate dalla Commissione Europea, ai sensi degli Artt. 45-46 GDPR."
                    : "Some suppliers (Vercel, Google, Calendly) are based in the United States. Transfers are carried out on the basis of the EU-US Data Privacy Framework and/or standard contractual clauses approved by the European Commission, pursuant to Arts. 45-46 GDPR."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "9. Processi decisionali automatizzati"
                    : "9. Automated Decision-Making"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Non utilizziamo processi decisionali automatizzati o profilazione che producano effetti giuridici o incidano significativamente sull'interessato ai sensi dell'Art. 22 GDPR."
                    : "We do not use automated decision-making or profiling that produces legal effects or significantly affects the data subject pursuant to Art. 22 GDPR."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "10. Diritti dell'interessato"
                    : "10. Data Subject Rights"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Ai sensi degli Artt. 15-22 del GDPR, hai diritto di:"
                    : "Under Arts. 15-22 of the GDPR, you have the right to:"}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>{locale === "it" ? "Accedere ai tuoi dati personali e ottenerne copia" : "Access your personal data and obtain a copy"}</li>
                  <li>{locale === "it" ? "Rettificare dati inesatti o incompleti" : "Rectify inaccurate or incomplete data"}</li>
                  <li>{locale === "it" ? "Ottenere la cancellazione dei dati (diritto all'oblio)" : "Obtain erasure of data (right to be forgotten)"}</li>
                  <li>{locale === "it" ? "Limitare il trattamento" : "Restrict processing"}</li>
                  <li>{locale === "it" ? "Opporti al trattamento" : "Object to processing"}</li>
                  <li>{locale === "it" ? "Ricevere i dati in formato strutturato (portabilità)" : "Receive data in a structured format (portability)"}</li>
                  <li>{locale === "it" ? "Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento precedente" : "Withdraw consent at any time, without affecting the lawfulness of prior processing"}</li>
                </ul>
                <p className="mt-2">
                  {locale === "it" ? "Per esercitare i tuoi diritti, scrivi a" : "To exercise your rights, write to"}{" "}
                  <a
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href={`mailto:${EMAIL_TO}`}
                  >
                    {EMAIL_TO}
                  </a>
                  .{" "}
                  {locale === "it"
                    ? "Risponderemo entro 30 giorni dalla ricezione."
                    : "We will respond within 30 days of receipt."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "11. Diritto di reclamo"
                    : "11. Right to Complain"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Se ritieni che il trattamento dei tuoi dati violi il GDPR, hai il diritto di proporre reclamo al Garante per la protezione dei dati personali:"
                    : "If you believe the processing of your data violates the GDPR, you have the right to lodge a complaint with the Italian Data Protection Authority (Garante per la protezione dei dati personali):"}
                </p>
                <p className="mt-1">
                  <a
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href="https://www.garanteprivacy.it"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.garanteprivacy.it
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "12. Violazione dei dati (Data Breach)"
                    : "12. Data Breach"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "In caso di violazione dei dati personali che presenti un rischio per i diritti e le libertà degli interessati, provvederemo a notificare l'Autorità Garante entro 72 ore dalla scoperta e, ove necessario, a informare gli interessati senza ingiustificato ritardo, ai sensi degli Artt. 33-34 GDPR."
                    : "In the event of a personal data breach posing a risk to the rights and freedoms of data subjects, we will notify the Data Protection Authority within 72 hours of becoming aware of the breach and, where necessary, inform the affected data subjects without undue delay, in accordance with Arts. 33-34 GDPR."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it" ? "13. Aggiornamenti" : "13. Updates"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "La presente informativa può essere aggiornata per adeguamenti normativi o variazioni nei servizi offerti. La versione corrente è sempre disponibile su"
                    : "This notice may be updated due to regulatory changes or variations in the services offered. The current version is always available at"}{" "}
                  <a
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href={SITE_URL}
                  >
                    {SITE_URL}
                  </a>
                  .{" "}
                  {locale === "it"
                    ? "In caso di modifiche sostanziali, ne daremo evidenza in modo visibile sul sito."
                    : "In case of substantial changes, we will highlight them visibly on the website."}
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