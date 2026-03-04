export function CaseStudies({ locale }: { locale: string }) {
  const cases =
    locale === "it"
      ? [
          {
            name: "Scenario tipo · Ristorante centro città",
            metric: "Obiettivo: +prenotazioni",
            detail:
              "Scenario dimostrativo: come interveniamo su un sito con bassa conversione",
            before:
              "Invito all'azione poco visibile e percorso prenotazione dispersivo",
            action:
              "Testata semplificata, invito all'azione fisso e percorso smartphone lineare",
          },
          {
            name: "Scenario tipo · Pizzeria da asporto",
            metric: "Obiettivo: +clic su menu",
            detail:
              "Scenario dimostrativo: ottimizzazione testata e invito all'azione",
            before: "Menu difficile da trovare da smartphone",
            action: "Menu in un tocco + gerarchia visiva orientata all'azione",
          },
          {
            name: "Scenario tipo · Cocktail bar eventi",
            metric: "Obiettivo: +conversioni",
            detail:
              "Scenario dimostrativo: riduzione frizione e aumento fiducia",
            before: "Traffico buono ma conversione bassa su smartphone",
            action:
              "Riduzione frizione sui tocchi e blocchi fiducia sopra la piega",
          },
        ]
      : [
          {
            name: "Typical scenario · City-center restaurant",
            metric: "Goal: +bookings",
            detail:
              "Demonstrative scenario: how we improve a low-converting site",
            before: "Low-visibility CTA and scattered booking flow",
            action:
              "Simplified hero, sticky CTA, and linear smartphone journey",
          },
          {
            name: "Typical scenario · Takeaway pizzeria",
            metric: "Goal: +menu clicks",
            detail: "Demonstrative scenario: hero and CTA optimization",
            before: "Menu hard to find on smartphone",
            action: "One-tap menu + action-oriented visual hierarchy",
          },
          {
            name: "Typical scenario · Event cocktail bar",
            metric: "Goal: +conversions",
            detail:
              "Demonstrative scenario: friction reduction and trust building",
            before: "Good traffic but low smartphone conversion",
            action:
              "Reduced tap friction and added above-the-fold trust blocks",
          },
        ];

  return (
    <section className="section-pad" id="metodo">
      <div className="container-pad">
        <div className="reveal">
          <h2 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {locale === "it"
              ? "Il nostro metodo: analisi, intervento, misurazione."
              : "Our method: analysis, intervention, measurement."}
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
              className="glass gradient-border card-tech rounded-3xl p-6 reveal"
            >
              <p className="text-xs font-semibold tracking-widest text-(--muted)">
                {item.name}
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-cyan-200">
                {item.metric}
              </p>
              <p className="mt-2 text-sm text-(--muted)">{item.detail}</p>
              <p className="mt-4 text-xs leading-6 text-(--muted)">
                <span className="font-semibold text-foreground/90">
                  {locale === "it" ? "Prima:" : "Before:"}
                </span>{" "}
                {item.before}
              </p>
              <p className="mt-1 text-xs leading-6 text-(--muted)">
                <span className="font-semibold text-foreground/90">
                  {locale === "it" ? "Intervento:" : "Intervention:"}
                </span>{" "}
                {item.action}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
