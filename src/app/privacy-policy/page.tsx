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
                    ? `Il titolare del trattamento è ${COMPANY_NAME}, con sede operativa in ${COMPANY_CITY} (${COMPANY_VAT}). Per richieste privacy:`
                    : `${COMPANY_NAME} is the data controller, with operational office in ${COMPANY_CITY} (${COMPANY_VAT}). For privacy requests:`}{" "}
                  <a
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href={`mailto:${EMAIL_TO}`}
                  >
                    {EMAIL_TO}
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it" ? "2. Dati raccolti" : "2. Data Collected"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Possiamo raccogliere dati identificativi e di contatto (es. nome, email, telefono) inviati volontariamente tramite moduli del sito, oltre a dati tecnici di navigazione (es. indirizzo IP, user agent, eventi di interazione) necessari al funzionamento e al miglioramento del servizio."
                    : "We may collect identification and contact data (e.g. name, email, phone) voluntarily submitted through website forms, as well as technical navigation data (e.g. IP address, user agent, interaction events) required for operation and service improvement."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "3. Finalità e base giuridica"
                    : "3. Purposes and Legal Basis"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Trattiamo i dati per: rispondere alle richieste di contatto, fornire preventivi, gestire comunicazioni precontrattuali, garantire sicurezza e performance del sito, analizzare l’utilizzo del servizio. Le basi giuridiche includono misure precontrattuali, legittimo interesse e, quando richiesto, consenso."
                    : "We process data to: reply to contact requests, provide quotes, manage pre-contractual communications, ensure website security and performance, and analyze service usage. Legal bases include pre-contractual measures, legitimate interest, and where required, consent."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "4. Conservazione dei dati"
                    : "4. Data Retention"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Conserviamo i dati per il tempo strettamente necessario alle finalità indicate e agli obblighi di legge. I dati relativi alle richieste commerciali sono mantenuti per il tempo utile a gestire la trattativa, salvo obblighi normativi differenti."
                    : "We retain data for the time strictly necessary for the stated purposes and legal obligations. Data related to commercial requests is retained for the period needed to manage the negotiation, unless different legal requirements apply."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "5. Destinatari e responsabili esterni"
                    : "5. Recipients and External Processors"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "I dati possono essere trattati da fornitori tecnici necessari all’erogazione del servizio (hosting, piattaforme email, strumenti analitici) nominati, ove necessario, responsabili del trattamento."
                    : "Data may be processed by technical suppliers necessary for service delivery (hosting, email platforms, analytics tools), appointed where necessary as data processors."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "6. Trasferimenti extra UE"
                    : "6. Transfers Outside the EU"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Alcuni fornitori potrebbero trattare dati in Paesi extra UE. In tali casi adottiamo misure conformi al GDPR, incluse clausole contrattuali standard o strumenti equivalenti previsti dalla normativa."
                    : "Some suppliers may process data in non-EU countries. In such cases, we adopt GDPR-compliant safeguards, including standard contractual clauses or equivalent legal instruments."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "7. Diritti dell’interessato"
                    : "7. Data Subject Rights"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Puoi esercitare i diritti di accesso, rettifica, cancellazione, limitazione, opposizione e portabilità, oltre a revocare il consenso quando applicabile, scrivendo a"
                    : "You may exercise your rights of access, rectification, erasure, restriction, objection, and portability, and withdraw consent where applicable, by writing to"}{" "}
                  <a
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href={`mailto:${EMAIL_TO}`}
                  >
                    {EMAIL_TO}
                  </a>
                  .{" "}
                  {locale === "it"
                    ? "Hai anche diritto di reclamo all’Autorità Garante per la protezione dei dati personali."
                    : "You also have the right to lodge a complaint with the competent data protection authority."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it" ? "8. Aggiornamenti" : "8. Updates"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "La presente informativa può essere aggiornata in qualsiasi momento. La versione corrente è pubblicata su"
                    : "This notice may be updated at any time. The current version is published at"}{" "}
                  <a
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href={SITE_URL}
                  >
                    {SITE_URL}
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
