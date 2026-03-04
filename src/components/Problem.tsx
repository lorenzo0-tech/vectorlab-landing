import { TriangleAlert } from "lucide-react";

export function Problem({ locale }: { locale: string }) {
  const bullets =
    locale === "it"
      ? [
          {
            stat: "53%",
            text: "degli utenti abbandona se non trova il menu subito.",
          },
          {
            stat: null,
            text: "Invito all'azione assente o debole: le persone non sanno cosa fare e se ne vanno.",
          },
          {
            stat: null,
            text: "Versione smartphone disastrosa: tocchi difficili, testi piccoli, pagina pesante.",
          },
          {
            stat: "40%",
            text: "del traffico perso se il sito impiega più di 3 secondi.",
          },
        ]
      : [
          {
            stat: "53%",
            text: "of users leave if they can't find the menu immediately.",
          },
          {
            stat: null,
            text: "Weak or missing call to action: visitors don't know what to do and leave.",
          },
          {
            stat: null,
            text: "Poor smartphone experience: hard taps, tiny text, heavy page.",
          },
          {
            stat: "40%",
            text: "of traffic lost if the site takes over 3 seconds.",
          },
        ];

  return (
    <section className="section-pad reveal">
      <div className="container-pad">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 reveal-left">
            <h2 className="heading-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              {locale === "it" ? (
                <>
                  Se il tuo sito è lento o confuso,{" "}
                  <span className="text-red-400">
                    stai regalando clienti agli altri.
                  </span>
                </>
              ) : (
                <>
                  If your website is slow or confusing,{" "}
                  <span className="text-red-400">
                    you are handing customers to competitors.
                  </span>
                </>
              )}
            </h2>
            <p className="mt-4 text-lg leading-8 text-(--muted)">
              {locale === "it"
                ? "Le persone decidono in pochi secondi: se non capiscono subito cosa fare, escono."
                : "People decide in seconds: if they do not immediately understand what to do, they leave."}
            </p>
          </div>
          <div className="lg:col-span-7 reveal-right">
            <div className="problem-card gradient-border card-tech rounded-3xl p-5 sm:p-8">
              <div className="flex items-center gap-2">
                <span className="icon-chip-fuchsia h-8 w-8">
                  <TriangleAlert className="h-4 w-4" />
                </span>
                <p className="text-sm font-semibold">
                  {locale === "it"
                    ? "Problemi reali, ogni giorno"
                    : "Real problems, every day"}
                </p>
              </div>
              <ul className="mt-5 space-y-3">
                {bullets.map((b) => (
                  <li
                    key={b.text}
                    className="flex items-start gap-3 text-sm leading-7 text-(--muted)"
                  >
                    {b.stat ? (
                      <span
                        className="shrink-0 mt-0.5 inline-flex items-center justify-center rounded-lg bg-red-500/10 border border-red-400/20 px-2 py-0.5 text-xs font-bold text-red-400"
                        style={{
                          animation: "stat-pulse 2s ease-in-out 0.6s 1",
                        }}
                      >
                        {b.stat}
                      </span>
                    ) : (
                      <span className="shrink-0 mt-2 h-2 w-2 rounded-full bg-red-400/60 ring-2 ring-red-400/20" />
                    )}
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
