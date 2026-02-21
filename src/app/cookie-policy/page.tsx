import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cookies } from "next/headers";
import { COMPANY_NAME, EMAIL_TO, SITE_URL } from "@/lib/constants";

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
                    ? "I cookie sono piccoli file di testo memorizzati sul dispositivo dell’utente durante la navigazione. Servono a garantire funzionalità tecniche, sicurezza e analisi aggregate dell’utilizzo del sito."
                    : "Cookies are small text files stored on the user’s device while browsing. They support technical functionality, security, and aggregated website usage analysis."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "2. Tipologie utilizzate"
                    : "2. Types Used"}
                </h2>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    {locale === "it"
                      ? "Cookie tecnici: necessari al corretto funzionamento del sito."
                      : "Technical cookies: necessary for proper website operation."}
                  </li>
                  <li>
                    {locale === "it"
                      ? "Cookie analitici: misurano traffico e interazioni in forma aggregata."
                      : "Analytics cookies: measure traffic and interactions in aggregated form."}
                  </li>
                  <li>
                    {locale === "it"
                      ? "Cookie di terze parti: eventuali servizi integrati (es. analisi o scheduling)."
                      : "Third-party cookies: integrated services (e.g. analytics or scheduling)."}
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it" ? "3. Base giuridica" : "3. Legal Basis"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "I cookie tecnici sono trattati sulla base del legittimo interesse all’erogazione del servizio. Eventuali cookie non tecnici sono attivati solo in presenza di una base giuridica adeguata, incluso il consenso quando richiesto."
                    : "Technical cookies are processed on the basis of legitimate interest for service delivery. Non-technical cookies are enabled only with an appropriate legal basis, including consent where required."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "4. Gestione preferenze"
                    : "4. Preference Management"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Al primo accesso puoi scegliere dal banner se accettare o rifiutare i cookie analitici. Puoi inoltre limitare o bloccare i cookie tramite le impostazioni del browser. La disattivazione dei cookie tecnici può compromettere il corretto funzionamento di alcune parti del sito."
                    : "On first access, you can use the banner to accept or reject analytics cookies. You can also limit or block cookies through browser settings. Disabling technical cookies may affect proper operation of some website areas."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it"
                    ? "5. Servizi di terze parti"
                    : "5. Third-Party Services"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Il sito può integrare strumenti di terze parti (ad esempio analisi traffico o prenotazioni) che potrebbero impostare propri cookie secondo le rispettive informative."
                    : "The website may integrate third-party tools (for example traffic analytics or scheduling) that may set their own cookies according to their policies."}
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  {locale === "it" ? "6. Contatti" : "6. Contacts"}
                </h2>
                <p className="mt-2">
                  {locale === "it"
                    ? "Per informazioni su questa policy puoi scrivere a"
                    : "For information about this policy, write to"}{" "}
                  <a
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href={`mailto:${EMAIL_TO}`}
                  >
                    {EMAIL_TO}
                  </a>
                  .{" "}
                  {locale === "it"
                    ? "La versione aggiornata è disponibile su"
                    : "The updated version is available at"}{" "}
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
