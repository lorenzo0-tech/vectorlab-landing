import { COMPANY_NAME, COMPANY_CITY } from "@/lib/constants";

export function AboutFounder({ locale }: { locale: string }) {
  return (
    <section id="chi-siamo" className="section-pad">
      <div className="container-pad">
        <div className="mx-auto max-w-3xl text-center reveal">
          {/* Gradient monogram */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 shadow-[0_0_40px_rgba(6,182,212,0.2)] transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(6,182,212,0.35)]">
            <span className="heading-display text-3xl font-bold text-slate-950">
              L
            </span>
          </div>

          <p className="text-xs font-semibold tracking-widest text-(--muted) uppercase">
            {locale === "it"
              ? `Chi c'è dietro ${COMPANY_NAME}`
              : `Who's behind ${COMPANY_NAME}`}
          </p>
          <h2 className="heading-display mt-3 text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
            {locale === "it" ? (
              <>
                Progetto siti che portano{" "}
                <span className="heading-accent">clienti reali</span>
              </>
            ) : (
              <>
                I build websites that bring{" "}
                <span className="heading-accent">real customers</span>
              </>
            )}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-(--muted)">
            <p>
              {locale === "it" ? (
                <>
                  Sono Lorenzo, fondatore di{" "}
                  <span className="text-foreground font-semibold">
                    {COMPANY_NAME}
                  </span>
                  . Lavoro da {COMPANY_CITY} con un'unica specializzazione:
                  creare{" "}
                  <span className="text-foreground font-semibold">
                    siti web per ristoranti e hotel
                  </span>{" "}
                  che trasformano visitatori in prenotazioni.
                </>
              ) : (
                <>
                  I'm Lorenzo, founder of{" "}
                  <span className="text-foreground font-semibold">
                    {COMPANY_NAME}
                  </span>
                  . I work from {COMPANY_CITY} with a single focus: building{" "}
                  <span className="text-foreground font-semibold">
                    websites for restaurants and hotels
                  </span>{" "}
                  that turn visitors into bookings.
                </>
              )}
            </p>
            <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            <p>
              {locale === "it" ? (
                <>
                  Non faccio siti per tutti. Ogni progetto nasce dall'analisi
                  del locale, del suo posizionamento e dei suoi{" "}
                  <span className="text-foreground font-semibold">
                    obiettivi concreti
                  </span>
                  . Design di alto livello, struttura orientata alla{" "}
                  <span className="text-foreground font-semibold">
                    conversione
                  </span>
                  , performance reali.
                </>
              ) : (
                <>
                  I don't build sites for everyone. Every project starts from
                  analyzing the venue, its positioning, and its{" "}
                  <span className="text-foreground font-semibold">
                    concrete goals
                  </span>
                  . Premium design,{" "}
                  <span className="text-foreground font-semibold">
                    conversion-oriented
                  </span>{" "}
                  structure, real performance.
                </>
              )}
            </p>
            <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            <p>
              {locale === "it"
                ? 'Se hai un ristorante, un hotel o un B&B e vuoi un sito che lavori per te — non solo che "faccia bella figura" — parliamone.'
                : 'If you have a restaurant, hotel, or B&B and want a site that works for you — not just one that "looks nice" — let\'s talk.'}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 reveal-stagger">
            {(locale === "it"
              ? [
                  { value: "100%", label: "Verticale ospitalità" },
                  { value: "14 gg", label: "Consegna tipica" },
                  { value: COMPANY_CITY, label: "Base operativa" },
                ]
              : [
                  { value: "100%", label: "Hospitality-focused" },
                  { value: "14 days", label: "Typical delivery" },
                  { value: COMPANY_CITY, label: "Based in" },
                ]
            ).map((stat) => (
              <div
                key={stat.label}
                className="glass gradient-border rounded-2xl px-5 py-3 text-center noise-subtle reveal"
              >
                <p className="text-2xl font-bold tracking-tight text-cyan-300">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-(--muted)">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
