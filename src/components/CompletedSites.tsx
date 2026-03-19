import { ArrowUpRight } from "lucide-react";
import { StaggerText } from "@/components/StaggerText";

export function CompletedSites({ locale }: { locale: string }) {
  const sites =
    locale === "it"
      ? [
          {
            name: "Nuptiabox",
            domain: "nuptiabox.com",
            tag: "Wedding Platform",
            description:
              "Directory e piattaforma per matrimoni in Italia: ricerca fornitori, shortlist guidata e contatti centralizzati.",
            href: "https://www.nuptiabox.com/",
            cta: "Visita",
            accent: "cyan",
          },
          {
            name: "Rogerex",
            domain: "rogerex.com",
            tag: "Content Auth",
            description:
              "Passaporto digitale per i tuoi contenuti: certifica l'autenticità e permetti a chiunque di verificarla.",
            href: "https://www.rogerex.com/",
            cta: "Visita",
            accent: "indigo",
          },
        ]
      : [
          {
            name: "Nuptiabox",
            domain: "nuptiabox.com",
            tag: "Wedding Platform",
            description:
              "Wedding platform for Italy: curated partner discovery, guided shortlists, and centralized conversations.",
            href: "https://www.nuptiabox.com/",
            cta: "Visit",
            accent: "cyan",
          },
          {
            name: "Rogerex",
            domain: "rogerex.com",
            tag: "Content Auth",
            description:
              "Digital passport for your content: certify authenticity and let anyone verify it.",
            href: "https://www.rogerex.com/",
            cta: "Visit",
            accent: "indigo",
          },
        ];

  return (
    <section id="progetti" className="section-pad">
      <div className="container-pad">
        <div className="reveal">
          <StaggerText
            as="h2"
            className="heading-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl"
          >
            {locale === "it" ? (
              <>
                Siti già realizzati,{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-indigo-300 bg-clip-text text-transparent">
                  già online.
                </span>
              </>
            ) : (
              <>
                Websites already delivered,{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-indigo-300 bg-clip-text text-transparent">
                  already live.
                </span>
              </>
            )}
          </StaggerText>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-(--muted)">
            {locale === "it"
              ? "Progetti pubblicati e funzionanti. Ogni sito è stato progettato, sviluppato e messo online da noi."
              : "Published and running. Every site was designed, developed and shipped by us."}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 reveal-stagger">
          {sites.map(
            ({ name, domain, tag, description, href, cta, accent }) => {
              const isIndigo = accent === "indigo";
              return (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group card-tech relative isolate overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-colors hover:border-white/[0.12] hover:bg-white/[0.04] reveal focus-ring block"
                >
                  {/* top accent line */}
                  <div
                    className={`absolute inset-x-0 top-0 h-px ${
                      isIndigo
                        ? "bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"
                        : "bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
                    }`}
                  />

                  {/* corner glow */}
                  <div
                    className={`pointer-events-none absolute -top-24 h-48 w-48 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                      isIndigo
                        ? "-right-24 bg-indigo-500/10"
                        : "-left-24 bg-cyan-500/10"
                    }`}
                  />

                  <div className="relative flex flex-col gap-5 p-6 sm:p-7">
                    {/* header row */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        {/* live dot */}
                        <span className="relative flex h-2 w-2 shrink-0">
                          <span
                            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${
                              isIndigo ? "bg-indigo-400" : "bg-cyan-400"
                            }`}
                          />
                          <span
                            className={`relative inline-flex h-2 w-2 rounded-full ${
                              isIndigo ? "bg-indigo-400" : "bg-cyan-400"
                            }`}
                          />
                        </span>

                        <span className="font-mono text-[11px] tracking-widest text-white/40 uppercase">
                          {domain}
                        </span>
                      </div>

                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.14em] uppercase ${
                          isIndigo
                            ? "bg-indigo-500/10 text-indigo-300/80 ring-1 ring-indigo-400/15"
                            : "bg-cyan-500/10 text-cyan-300/80 ring-1 ring-cyan-400/15"
                        }`}
                      >
                        {tag}
                      </span>
                    </div>

                    {/* brand wordmark */}
                    <h3 className="leading-none">
                      {name === "Nuptiabox" ? (
                        <span className="heading-display text-[1.75rem] font-bold tracking-tight">
                          Nuptia
                          <span className="text-cyan-400">Box</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2">
                          <span className="heading-display text-[1.75rem] font-bold tracking-[0.04em] uppercase">
                            Rogerex
                          </span>
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 ring-1 ring-indigo-400/30">
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              className="h-3 w-3 text-indigo-400"
                            >
                              <path
                                d="M3.5 8.5L6.5 11.5L12.5 4.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </span>
                      )}
                    </h3>

                    {/* description */}
                    <p className="max-w-md text-sm leading-relaxed text-(--muted)">
                      {description}
                    </p>

                    {/* cta row */}
                    <div className="flex items-center gap-1.5 pt-1 text-xs font-medium tracking-wide text-white/50 transition-colors group-hover:text-white/80">
                      <span>{cta}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* bottom scan-line */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                </a>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
