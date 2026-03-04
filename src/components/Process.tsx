import { ClipboardCheck, DraftingCompass, Rocket, Zap } from "lucide-react";

export function Process({ locale }: { locale: string }) {
  const steps =
    locale === "it"
      ? [
          {
            n: "01",
            title: "Allineamento (15–30 min)",
            desc: "Obiettivo, pubblico, azione principale. Tagliamo tutto il resto.",
            Icon: Zap,
          },
          {
            n: "02",
            title: "Struttura e testi",
            desc: "Testata, inviti all'azione, menu e sezioni: ordine logico, frizione minima.",
            Icon: DraftingCompass,
          },
          {
            n: "03",
            title: "Progettazione di alto livello + sviluppo",
            desc: "Prima su smartphone, prestazioni, immagini ottimizzate, interfaccia pulita.",
            Icon: Rocket,
          },
          {
            n: "04",
            title: "Pubblicazione e misurazione",
            desc: "Mettiamo online e tracciamo i clic su inviti all'azione, menu e contatti.",
            Icon: ClipboardCheck,
          },
        ]
      : [
          {
            n: "01",
            title: "Alignment (15–30 min)",
            desc: "Goal, audience, primary action. We cut everything unnecessary.",
            Icon: Zap,
          },
          {
            n: "02",
            title: "Structure and copy",
            desc: "Hero, calls to action, menu and sections: clear order, minimum friction.",
            Icon: DraftingCompass,
          },
          {
            n: "03",
            title: "Premium design + development",
            desc: "Smartphone-first, high performance, optimized images, clean interface.",
            Icon: Rocket,
          },
          {
            n: "04",
            title: "Launch and measurement",
            desc: "We go live and track clicks on CTAs, menu and contacts.",
            Icon: ClipboardCheck,
          },
        ];

  return (
    <section id="metodo" className="section-pad">
      <div className="container-pad">
        <div className="reveal">
          <h2 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {locale === "it"
              ? "Metodo rapido. Decisioni rapide. Risultati rapidi."
              : "Fast method. Fast decisions. Fast results."}
          </h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-4 reveal-stagger">
          {steps.map(({ n, title, desc, Icon }) => (
            <div
              key={n}
              className="glass gradient-border card-tech group rounded-3xl p-6 reveal"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold tracking-widest text-(--muted)">
                  {n}
                </p>
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5 transition-transform duration-250 group-hover:rotate-2 group-hover:scale-[1.03]"
                >
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold tracking-tight">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-(--muted)">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
