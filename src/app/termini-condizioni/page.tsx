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
  title: "Termini e Condizioni",
  description: `Termini e condizioni di utilizzo del sito ${COMPANY_NAME}.`,
  alternates: {
    canonical: "/termini-condizioni",
  },
};

const effectiveDate = "21 febbraio 2026";

export default async function TerminiCondizioniPage() {
  const cookieStore = await cookies();
  const locale =
    cookieStore.get("site_locale_v1")?.value === "en" ? "en" : "it";

  return (
    <main className="main-ambient min-h-screen overflow-hidden">
      <section className="section-pad">
        <div className="container-pad">
          <article className="glass-strong gradient-border panel-tech mx-auto max-w-4xl rounded-3xl p-6 sm:p-10">
            <h1 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {locale === "it"
                ? "Termini e Condizioni"
                : "Terms and Conditions"}
            </h1>
            <p className="mt-3 text-sm text-(--muted)">
              {locale === "it" ? "Ultimo aggiornamento" : "Last updated"}:{" "}
              {effectiveDate}
            </p>

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-(--muted)">
              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it" ? "1. Oggetto e accettazione" : "1. Scope and Acceptance"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? `I presenti termini e condizioni regolano l'accesso e l'utilizzo del sito web ${SITE_URL}, di proprietà di ${COMPANY_NAME}, ditta individuale con sede operativa in ${COMPANY_CITY}, P.IVA ${COMPANY_VAT}. La navigazione del sito comporta l'accettazione integrale dei presenti termini.`
                    : `These terms and conditions govern access to and use of the website ${SITE_URL}, owned by ${COMPANY_NAME}, sole proprietorship based in ${COMPANY_CITY}, VAT ID ${COMPANY_VAT}. Browsing the website constitutes full acceptance of these terms.`}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "2. Descrizione del servizio"
                    : "2. Service Description"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? `${COMPANY_NAME} offre servizi di progettazione e sviluppo di siti web per il settore della ristorazione e dell'ospitalità. Il sito ha finalità informativa e promozionale. Le condizioni specifiche di ciascun incarico sono definite nel contratto individuale sottoscritto tra le parti.`
                    : `${COMPANY_NAME} provides website design and development services for the restaurant and hospitality sector. The website serves informational and promotional purposes. The specific conditions of each engagement are defined in the individual contract signed between the parties.`}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "3. Prezzi"
                    : "3. Pricing"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? `I prezzi pubblicati sul sito di ${COMPANY_NAME} hanno valore indicativo e non costituiscono offerta al pubblico ai sensi dell'Art. 1336 c.c. Le condizioni economiche definitive sono stabilite nel preventivo o contratto individuale.`
                    : `Prices published on the ${COMPANY_NAME} website are indicative and do not constitute a public offer under Art. 1336 of the Italian Civil Code. Final economic conditions are established in the individual quote or contract.`}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "4. Contenuti demo e materiale illustrativo"
                    : "4. Demo Content and Illustrative Material"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Le sezioni demo presenti sul sito (es. \"demo-ristorante\" e \"demo-hotel-villa\") sono esempi illustrativi creati esclusivamente per mostrare le capacità progettuali e lo stile di lavoro. Tutti i nomi, indirizzi, numeri di telefono, recensioni e contenuti presenti nelle demo sono fittizi e non si riferiscono a persone, attività o luoghi reali. Qualsiasi somiglianza è puramente casuale."
                    : "The demo sections on the website (e.g. \"demo-ristorante\" and \"demo-hotel-villa\") are illustrative examples created exclusively to showcase design capabilities and working style. All names, addresses, phone numbers, reviews, and content in the demos are fictitious and do not refer to real people, businesses, or places. Any resemblance is purely coincidental."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "5. Proprietà intellettuale"
                    : "5. Intellectual Property"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? `Testi, elementi grafici, design, codice sorgente, marchi e contenuti presenti sul sito sono protetti dalle norme applicabili in materia di proprietà intellettuale e diritto d'autore (L. 633/1941 e successive modifiche). È vietata la riproduzione, distribuzione o utilizzo non autorizzato, anche parziale, senza previo consenso scritto di ${COMPANY_NAME}.`
                    : `Texts, graphics, design, source code, trademarks, and website content are protected by applicable intellectual property and copyright laws (Italian Law 633/1941 and subsequent amendments). Unauthorized reproduction, distribution, or use, even partial, is prohibited without prior written consent from ${COMPANY_NAME}.`}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it" ? "6. Uso consentito" : "6. Permitted Use"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "L'utente si impegna a utilizzare il sito esclusivamente per finalità lecite e conformi ai presenti termini. È vietato: utilizzare il sito per finalità fraudolente o lesive dei diritti di terzi; tentare di compromettere sicurezza, integrità o disponibilità del servizio; estrarre dati in modo automatizzato (scraping) senza autorizzazione."
                    : "The user agrees to use the website exclusively for lawful purposes in accordance with these terms. It is prohibited to: use the website for fraudulent purposes or to infringe third-party rights; attempt to compromise service security, integrity, or availability; extract data through automated means (scraping) without authorization."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "7. Esclusione di garanzia sui risultati"
                    : "7. No Guarantee of Results"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Gli scenari, le metriche e gli obiettivi presentati sul sito hanno scopo puramente illustrativo e metodologico. Non costituiscono promessa o garanzia di risultati specifici. I risultati effettivi dipendono da molteplici fattori esterni al controllo del fornitore, tra cui il mercato di riferimento, la qualità del servizio offerto dal cliente e le condizioni competitive."
                    : "Scenarios, metrics, and goals presented on the website are purely illustrative and methodological. They do not constitute a promise or guarantee of specific results. Actual results depend on multiple factors outside the provider's control, including the target market, the quality of the client's service, and competitive conditions."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "8. Limitazione di responsabilità"
                    : "8. Limitation of Liability"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Le informazioni presenti sul sito hanno carattere informativo e possono essere aggiornate o modificate senza preavviso. Salvo dolo o colpa grave, non si garantisce l'assenza di errori, interruzioni o omissioni. La responsabilità complessiva è limitata al corrispettivo effettivamente percepito per il servizio in oggetto."
                    : "Information on the website is for informational purposes and may be updated or changed without notice. Except in cases of intentional misconduct or gross negligence, absence of errors, interruptions, or omissions is not guaranteed. Total liability is limited to the fees actually received for the service in question."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it" ? "9. Link esterni" : "9. External Links"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? `Il sito può contenere collegamenti a servizi e siti web di terze parti (es. Calendly, Google). ${COMPANY_NAME} non è responsabile per contenuti, disponibilità, policy sulla privacy o pratiche di siti esterni. L'utente accede a tali siti sotto la propria responsabilità.`
                    : `The website may contain links to third-party services and websites (e.g. Calendly, Google). ${COMPANY_NAME} is not responsible for content, availability, privacy policies, or practices of external websites. The user accesses such websites at their own risk.`}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "10. Legge applicabile e foro competente"
                    : "10. Governing Law and Jurisdiction"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? `I presenti termini sono regolati dalla legge italiana. Per qualsiasi controversia derivante dall'utilizzo del sito o dall'interpretazione dei presenti termini, il foro competente esclusivo è quello di Milano, salvo diversa disposizione inderogabile di legge a tutela del consumatore.`
                    : `These terms are governed by Italian law. For any dispute arising from the use of the website or the interpretation of these terms, the exclusive jurisdiction is the Court of Milan, unless otherwise mandated by mandatory consumer protection provisions.`}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "11. Modifiche ai termini"
                    : "11. Changes to Terms"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Ci riserviamo il diritto di modificare i presenti termini in qualsiasi momento. Le modifiche hanno efficacia dalla pubblicazione su"
                    : "We reserve the right to modify these terms at any time. Changes take effect from publication on"}{" "}
                  <a
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href={SITE_URL}
                  >
                    {SITE_URL}
                  </a>
                  .{" "}
                  {locale === "it"
                    ? "L'utilizzo continuato del sito dopo la pubblicazione delle modifiche costituisce accettazione delle stesse."
                    : "Continued use of the website after publication of changes constitutes acceptance thereof."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it" ? "12. Contatti" : "12. Contacts"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Per comunicazioni relative ai presenti termini:"
                    : "For communications regarding these terms:"}{" "}
                  <a
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href={`mailto:${EMAIL_TO}`}
                  >
                    {EMAIL_TO}
                  </a>
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