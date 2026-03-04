import { ClipboardCheck, DraftingCompass, Rocket, Zap } from "lucide-react";

const STEP_COLORS = [
  "icon-chip-cyan",
  "icon-chip-indigo",
  "icon-chip-fuchsia",
  "icon-chip-cyan",
];
const NUMBER_GRADIENTS = [
  "from-cyan-400 to-cyan-600",
  "from-indigo-400 to-indigo-600",
  "from-fuchsia-400 to-fuchsia-600",
  "from-cyan-400 to-indigo-500",
];

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
            {locale === "it" ? (
              <>
                Metodo rapido.{" "}
                <span className="heading-accent">Risultati rapidi.</span>
              </>
            ) : (
              <>
                Fast method.{" "}
                <span className="heading-accent">Fast results.</span>
              </>
            )}
          </h2>
        </div>

        {/* Timeline connector (desktop only) */}
        <div className="relative mt-10">
          <div
            className="absolute top-14 left-0 right-0 hidden h-0.5 bg-gradient-to-r from-cyan-500/30 via-indigo-500/30 to-fuchsia-500/30 lg:block"
            aria-hidden="true"
          >
            {/* Node dots on timeline */}
            <span className="absolute left-[12.5%] top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
            <span className="absolute left-[37.5%] top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
            <span className="absolute left-[62.5%] top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400 shadow-[0_0_8px_rgba(217,70,239,0.5)]" />
            <span className="absolute left-[87.5%] top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
          </div>

          <div className="grid gap-4 lg:grid-cols-4 reveal-stagger">
            {steps.map(({ n, title, desc, Icon }, index) => (
              <div
                key={n}
                className="glass gradient-border card-tech group rounded-3xl p-5 sm:p-6 reveal"
              >
                <div className="flex items-center justify-between">
                  {/* Gradient number circle */}
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${NUMBER_GRADIENTS[index]} text-sm font-bold text-slate-950`}
                  >
                    {n}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`h-10 w-10 ${STEP_COLORS[index]} transition-transform duration-250 group-hover:rotate-2 group-hover:scale-[1.03]`}
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
      </div>
    </section>
  );
}
