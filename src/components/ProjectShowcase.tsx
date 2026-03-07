import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { TiltCard } from "@/components/TiltCard";
import { StaggerText } from "@/components/StaggerText";

export function ProjectShowcase({ locale }: { locale: string }) {
  const projects =
    locale === "it"
      ? [
          {
            title: "Demo Hotel / Villa Luxury",
            subtitle: "Esperienza completa multipagina per strutture ricettive",
            description:
              "Un sito premium con percorso completo: pagine, esperienze, servizi, galleria e contatti. Un esempio del livello qualitativo che applichiamo a ogni progetto.",
            href: "/demo-hotel-villa",
            image: "/images/vettolab-free/hotel-pro.jpg",
            cta: "Vedi demo live",
          },
          {
            title: "Demo Ristorante Premium",
            subtitle:
              "Vetrina orientata alla conversione e al valore percepito",
            description:
              "Un concept completo: storytelling, servizi, esperienze, atmosfera e inviti all'azione ottimizzati. Un esempio della qualità che dedichiamo a ogni cliente.",
            href: "/demo-ristorante",
            image: "/images/vettolab-free/hero-ristorante.jpg",
            cta: "Vedi demo live",
          },
        ]
      : [
          {
            title: "Luxury Hotel / Villa Demo",
            subtitle: "Complete multi-page premium experience",
            description:
              "A premium website with a full journey: pages, experiences, services, gallery, and contacts. A showcase of the quality we bring to every project.",
            href: "/demo-hotel-villa",
            image: "/images/vettolab-free/hotel-pro.jpg",
            cta: "View live demo",
          },
          {
            title: "Premium Restaurant Demo",
            subtitle: "Showcase focused on conversion and perceived value",
            description:
              "A complete concept: storytelling, services, experiences, atmosphere, and optimized CTAs. A sample of the quality we dedicate to every client.",
            href: "/demo-ristorante",
            image: "/images/vettolab-free/hero-ristorante.jpg",
            cta: "View live demo",
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
                Guarda subito come può vendere{" "}
                <span className="heading-accent">il tuo prossimo sito</span>
              </>
            ) : (
              <>
                See how your next website{" "}
                <span className="heading-accent">can sell better</span>
              </>
            )}
          </StaggerText>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-(--muted)">
            {locale === "it"
              ? "Due demo navigabili, immediate da valutare, per capire in pochi minuti qualità, stile e potenziale di conversione che portiamo in ogni progetto."
              : "Two fully navigable demos to quickly evaluate the quality, style, and conversion potential we bring to every project."}
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2 reveal-stagger">
          {projects.map((project) => (
            <TiltCard
              key={project.href}
              className="group glass-strong gradient-border card-tech overflow-hidden rounded-3xl reveal"
            >
              <div className="relative aspect-16/10 overflow-hidden img-reveal reveal">
                {/* Browser chrome mockup */}
                <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-1.5 bg-slate-900/90 px-3 py-2 backdrop-blur-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80 transition-colors group-hover:bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80 transition-colors group-hover:bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80 transition-colors group-hover:bg-green-400" />
                  <span className="ml-2 flex-1 rounded-md bg-white/8 px-3 py-0.5 text-[10px] text-white/40 font-mono">
                    {project.href === "/demo-hotel-villa"
                      ? "vettolab.com/demo-hotel-villa"
                      : "vettolab.com/demo-ristorante"}
                  </span>
                </div>

                <Image
                  src={project.image}
                  alt={project.title}
                  width={1400}
                  height={900}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                <p className="absolute bottom-4 left-4 rounded-full border border-white/35 bg-black/30 px-3 py-1 text-xs font-semibold tracking-wide text-white/95 backdrop-blur-sm">
                  {project.subtitle}
                </p>
              </div>

              <div className="p-6">
                <h3 className="heading-display text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-(--muted)">
                  {project.description}
                </p>
                <a
                  href={project.href}
                  className="btn-primary focus-ring mt-6 inline-flex text-base px-6 py-3"
                >
                  {project.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
