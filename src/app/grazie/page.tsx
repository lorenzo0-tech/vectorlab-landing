import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarCheck } from "lucide-react";
import { cookies } from "next/headers";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Richiesta inviata",
  description: "Conferma invio richiesta contatto.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-image-preview": "none",
      "max-snippet": 0,
      "max-video-preview": 0,
    },
  },
};

export default async function GraziePage() {
  const cookieStore = await cookies();
  const locale =
    cookieStore.get("site_locale_v1")?.value === "en" ? "en" : "it";

  return (
    <main className="main-ambient min-h-screen overflow-hidden">
      <AmbientBackdrop />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-[8%] top-[12%] h-52 w-52 rounded-full bg-cyan-300/15 blur-3xl" />
        <div className="absolute right-[10%] top-[18%] h-60 w-60 rounded-full bg-indigo-300/20 blur-3xl" />
        <div className="absolute bottom-[8%] left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-fuchsia-300/15 blur-3xl" />
      </div>

      <section className="section-pad relative z-10">
        <div className="container-pad">
          <div className="glass-strong gradient-border panel-tech mx-auto max-w-2xl rounded-3xl p-8 shadow-2xl sm:p-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15">
              <CalendarCheck className="h-6 w-6" />
            </span>
            <h1 className="heading-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {locale === "it"
                ? "Richiesta inviata correttamente."
                : "Request sent successfully."}
            </h1>
            <p className="mt-4 text-(--muted)">
              {locale === "it"
                ? "Ti ricontattiamo entro 48 ore con i prossimi step consigliati per impostare il progetto nel modo giusto."
                : "We will contact you within 48 hours with the recommended next steps to set the project correctly."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary focus-ring"
              >
                {locale === "it"
                  ? "Prenota una chiamata ora"
                  : "Book a call now"}
              </a>
              <Link href="/" className="btn-secondary focus-ring inline-flex">
                <ArrowLeft className="h-4 w-4" />
                {locale === "it" ? "Torna alla home" : "Back to home"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
