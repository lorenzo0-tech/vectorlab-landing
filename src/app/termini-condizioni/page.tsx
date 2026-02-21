import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cookies } from "next/headers";
import { COMPANY_NAME, EMAIL_TO, SITE_URL } from "@/lib/constants";

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
                  {locale === "it" ? "1. Oggetto" : "1. Scope"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? `Questi termini regolano l’accesso e l’utilizzo del sito ${COMPANY_NAME}. Navigando il sito, l’utente accetta i presenti termini.`
                    : `These terms govern access to and use of the ${COMPANY_NAME} website. By browsing the website, the user accepts these terms.`}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "2. Contenuti e proprietà intellettuale"
                    : "2. Content and Intellectual Property"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Testi, elementi grafici, marchi e contenuti presenti sul sito sono protetti dalle norme applicabili in materia di proprietà intellettuale. È vietato l’uso non autorizzato."
                    : "Texts, graphics, trademarks, and website content are protected by applicable intellectual property laws. Unauthorized use is prohibited."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it" ? "3. Uso consentito" : "3. Permitted Use"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "L’utente si impegna a non utilizzare il sito per finalità illecite, fraudolente o lesive dei diritti di terzi, e a non compromettere sicurezza e disponibilità del servizio."
                    : "The user agrees not to use the website for unlawful, fraudulent, or rights-infringing purposes, and not to compromise service security or availability."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "4. Limitazione di responsabilità"
                    : "4. Limitation of Liability"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Le informazioni presenti sul sito hanno carattere informativo e possono essere aggiornate o modificate senza preavviso. Salvo dolo o colpa grave, non si garantisce l’assenza di errori o interruzioni."
                    : "Information on the website is for informational purposes and may be updated or changed without notice. Except in cases of intentional misconduct or gross negligence, absence of errors or interruptions is not guaranteed."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it" ? "5. Link esterni" : "5. External Links"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? `Il sito può contenere collegamenti a servizi di terze parti. ${COMPANY_NAME} non è responsabile per contenuti, disponibilità o policy di siti esterni.`
                    : `The website may contain links to third-party services. ${COMPANY_NAME} is not responsible for content, availability, or policies of external websites.`}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "6. Modifiche ai termini"
                    : "6. Changes to Terms"}
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
                  .
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it" ? "7. Contatti" : "7. Contacts"}
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
