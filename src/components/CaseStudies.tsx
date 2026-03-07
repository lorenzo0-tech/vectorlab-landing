export function CaseStudies({ locale }: { locale: string }) {
  const cases =
    locale === "it"
      ? [
          {
            name: "Scenario tipo · Studio professionale",
            metric: "+contatti",
            goal: "Obiettivo",
            detail:
              "Scenario dimostrativo: come interveniamo su un sito con bassa conversione",
            before:
              "Invito all'azione poco visibile e percorso di contatto dispersivo",
            action:
              "Testata semplificata, invito all'azione fisso e percorso smartphone lineare",
            accent: "cyan",
          },
          {
            name: "Scenario tipo · E-commerce locale",
            metric: "+vendite online",
            goal: "Obiettivo",
            detail:
              "Scenario dimostrativo: ottimizzazione testata e invito all'azione",
            before: "Catalogo confuso e difficile da navigare da smartphone",
            action:
              "Navigazione semplificata + gerarchia visiva orientata all'acquisto",
            accent: "indigo",
          },
          {
            name: "Scenario tipo · Azienda di servizi",
            metric: "+richieste",
            goal: "Obiettivo",
            detail:
              "Scenario dimostrativo: riduzione frizione e aumento fiducia",
            before: "Traffico buono ma conversione bassa su smartphone",
            action:
              "Riduzione frizione sui tocchi e blocchi fiducia sopra la piega",
            accent: "fuchsia",
          },
        ]
      : [
          {
            name: "Typical scenario · Professional firm",
            metric: "+leads",
            goal: "Goal",
            detail:
              "Demonstrative scenario: how we improve a low-converting site",
            before: "Low-visibility CTA and scattered contact flow",
            action:
              "Simplified hero, sticky CTA, and linear smartphone journey",
            accent: "cyan",
          },
          {
            name: "Typical scenario · Local e-commerce",
            metric: "+online sales",
            goal: "Goal",
            detail: "Demonstrative scenario: hero and CTA optimization",
            before: "Confusing catalog, hard to navigate on smartphone",
            action:
              "Simplified navigation + purchase-oriented visual hierarchy",
            accent: "indigo",
          },
          {
            name: "Typical scenario · Service company",
            metric: "+inquiries",
            goal: "Goal",
            detail:
              "Demonstrative scenario: friction reduction and trust building",
            before: "Good traffic but low smartphone conversion",
            action:
              "Reduced tap friction and added above-the-fold trust blocks",
            accent: "fuchsia",
          },
        ];

  const accentMap: Record<string, string> = {
    cyan: "border-cyan-400/30 bg-cyan-400/12",
    indigo: "border-indigo-400/30 bg-indigo-400/12",
    fuchsia: "border-fuchsia-400/30 bg-fuchsia-400/12",
  };

  const accentTextMap: Record<string, string> = {
    cyan: "text-cyan-300",
    indigo: "text-indigo-300",
    fuchsia: "text-fuchsia-300",
  };

  return (
    <section className="section-pad" id="metodo">
      <div className="container-pad">
        <div className="reveal">
          <h2 className="heading-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl">
            {locale === "it" ? (
              <>
                Il nostro metodo:{" "}
                <span className="heading-accent">
                  analisi, intervento, misurazione.
                </span>
              </>
            ) : (
              <>
                Our method:{" "}
                <span className="heading-accent">
                  analysis, intervention, measurement.
                </span>
              </>
            )}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-(--muted)">
            {locale === "it"
              ? "Scenari tipo con problema, intervento e obiettivo: ecco come progettiamo ogni sito per massimizzare le conversioni."
              : "Typical scenarios with problem, intervention, and goal: this is how we design every site to maximize conversions."}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 reveal-stagger">
          {cases.map((item, index) => (
            <article
              key={`case-${index}`}
              className="glass gradient-border card-tech rounded-3xl overflow-hidden reveal"
            >
              {/* Metric banner */}
              <div
                className={`flex items-center justify-between px-4 py-3 border-b sm:px-6 ${accentMap[item.accent]}`}
              >
                <span className="text-xs font-semibold tracking-widest uppercase text-(--muted)">
                  {item.goal}
                </span>
                <span
                  className={`text-xl font-bold tracking-tight ${accentTextMap[item.accent]}`}
                >
                  {item.metric}
                </span>
              </div>

              <div className="p-4 sm:p-6">
                <p className="text-xs font-semibold tracking-widest text-(--muted)">
                  {item.name}
                </p>
                <p className="mt-2 text-sm text-(--muted)">{item.detail}</p>

                {/* Before / After visual */}
                <div className="mt-4 space-y-2 border-t border-white/8 pt-4">
                  <div className="flex items-start gap-2 rounded-xl bg-red-500/6 border border-red-400/15 px-3 py-2 transition-colors hover:bg-red-500/10 hover:border-red-400/25">
                    <span className="mt-0.5 text-xs font-bold text-red-400 shrink-0">
                      {locale === "it" ? "Prima" : "Before"}
                    </span>
                    <p className="text-sm leading-5 text-(--muted)">
                      {item.before}
                    </p>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl bg-emerald-500/6 border border-emerald-400/15 px-3 py-2 transition-colors hover:bg-emerald-500/10 hover:border-emerald-400/25">
                    <span className="mt-0.5 text-xs font-bold text-emerald-400 shrink-0">
                      {locale === "it" ? "Dopo" : "After"}
                    </span>
                    <p className="text-sm leading-5 text-(--muted)">
                      {item.action}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
