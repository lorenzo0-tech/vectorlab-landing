"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { Parallax } from "@/components/Parallax";
import { CALENDLY_URL } from "@/lib/constants";
import { trackCtaClick } from "@/lib/analytics-events";
import { useTextScramble } from "@/lib/useTextScramble";

function MagneticLink({
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <a
      ref={ref}
      className={className}
      {...props}
      style={{ transition: "transform 0.25s cubic-bezier(0.2,0.8,0.2,1)" }}
      onMouseMove={(event) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const nx = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
        const ny = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
        el.style.transform = `translate(${nx * 7}px, ${ny * 7}px)`;
      }}
      onMouseLeave={() => {
        const el = ref.current;
        if (el) el.style.transform = "";
      }}
    >
      {children}
    </a>
  );
}

function ParticlesCanvas({ enabled }: { enabled: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let isRunning = true;
    let width = 0;
    let height = 0;
    let lastFrameTime = 0;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (reduce?.matches) return;

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const count = Math.max(10, Math.min(22, Math.floor(width / 50)));
    const particles = Array.from({ length: count }).map(() => {
      const speed = 0.18 + Math.random() * 0.4;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        r: 0.7 + Math.random() * 1.8,
        a: 0.08 + Math.random() * 0.16,
      };
    });

    const tick = (now: number) => {
      if (!isRunning) {
        raf = window.requestAnimationFrame(tick);
        return;
      }

      if (now - lastFrameTime < 1000 / 30) {
        raf = window.requestAnimationFrame(tick);
        return;
      }
      lastFrameTime = now;

      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        ctx.beginPath();
        ctx.fillStyle = `rgba(15, 23, 42, ${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = window.requestAnimationFrame(tick);
    };

    const handleVisibilityChange = () => {
      isRunning = document.visibilityState === "visible";
    };

    handleVisibilityChange();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    raf = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [enabled]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

export function Hero() {
  const { locale } = useLanguage();
  const [shouldReduceMotion, setShouldReduceMotion] = useState(true);
  const [showMotionEffects, setShowMotionEffects] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setShouldReduceMotion(reduced);

    if (reduced) return;

    const timer = window.setTimeout(() => {
      setShowMotionEffects(true);
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  const canRunParticles =
    !shouldReduceMotion &&
    typeof window !== "undefined" &&
    !window.matchMedia("(max-width: 767px)").matches &&
    !(
      "connection" in navigator &&
      Boolean(
        (navigator as Navigator & { connection?: { saveData?: boolean } })
          .connection?.saveData,
      )
    );

  const particlesEnabled =
    showMotionEffects && !shouldReduceMotion && canRunParticles;

  const heroText =
    locale === "it"
      ? "Siti web su misura per far crescere la tua azienda."
      : "Custom websites built to grow your business.";

  const { displayed: scrambledTitle, scramble: triggerScramble } =
    useTextScramble(heroText, {
      speed: 25,
      delay: 0,
      enabled: !shouldReduceMotion,
    });

  useEffect(() => {
    triggerScramble();
  }, [triggerScramble]);

  const pills = useMemo(
    () => [
      locale === "it" ? "Prima su smartphone" : "Smartphone-first",
      locale === "it" ? "Velocità reale" : "Real speed",
      locale === "it" ? "Orientato alla conversione" : "Conversion-driven",
      locale === "it" ? "SEO di base" : "SEO fundamentals",
      locale === "it" ? "Tracciamento dei clic" : "Click tracking",
    ],
    [locale],
  );

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 noise">
        <div className="aurora" />
      </div>

      <div
        className="pointer-events-none absolute -inset-x-24 -top-40 h-112 -rotate-12 opacity-70"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(6,182,212,0) 0%, rgba(6,182,212,0.28) 35%, rgba(217,70,239,0.11) 70%, rgba(217,70,239,0) 100%)",
          filter: "blur(18px)",
        }}
      />

      <div className="container-pad">
        <div className="relative flex min-h-[70vh] items-center pb-20 pt-10 sm:min-h-[86vh] sm:pb-24 sm:pt-20">
          <div className="absolute inset-0 -z-10">
            <ParticlesCanvas enabled={particlesEnabled} />
          </div>

          <div className="grid w-full items-center gap-10 lg:grid-cols-12">
            <div className="max-w-3xl xl:col-span-7">
              <div className="relative">
                <span aria-hidden="true" className="hero-title-glow" />
                <h1 className="heading-display text-balance text-[1.85rem] font-semibold leading-[1.05] tracking-tight sm:text-4xl md:text-6xl">
                  <span className="hero-title-tech" aria-label={heroText}>
                    {scrambledTitle}
                  </span>
                </h1>
              </div>

              <p className="mt-6 text-pretty text-base leading-7 text-(--muted) sm:text-lg sm:leading-8 md:text-xl">
                {locale === "it"
                  ? "Progettiamo e sviluppiamo siti web per aziende di ogni settore: design di alto livello, esperienza utente prima da smartphone e tecnologia solida per trasformare visite in clienti e richieste."
                  : "We design and build websites for businesses across every industry: premium design, smartphone-first UX, and solid technology to turn visits into customers and leads."}
              </p>

              <p className="mt-3 text-sm font-semibold tracking-wide text-cyan-100/90">
                {locale === "it"
                  ? "Dalla strategia al lancio: un unico partner per immagine, prestazioni e risultati."
                  : "From strategy to launch: one partner for brand, performance, and results."}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {pills.map((p) => (
                  <span
                    key={p}
                    className="glass gradient-border rounded-full px-3 py-1 text-xs font-semibold text-foreground transition-all duration-200 sm:hover:border-cyan-400/30 sm:hover:bg-cyan-400/8 sm:hover:scale-[1.03]"
                  >
                    {p}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <MagneticLink
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary focus-ring text-base px-7 py-4"
                  onClick={() =>
                    trackCtaClick({
                      posizione: "testata",
                      destinazione: "calendly",
                    })
                  }
                >
                  {locale === "it"
                    ? "Prenota analisi gratuita (15 min)"
                    : "Book a free strategy call (15 min)"}
                  <ArrowUpRight className="h-4 w-4" />
                </MagneticLink>
                <MagneticLink
                  href="#preventivo"
                  className="btn-secondary focus-ring text-base px-7 py-4"
                  onClick={() =>
                    trackCtaClick({
                      posizione: "testata",
                      destinazione: "preventivo",
                    })
                  }
                >
                  {locale === "it"
                    ? "Ricevi una proposta su misura"
                    : "Get a tailored proposal"}
                  <Mail className="h-4 w-4" />
                </MagneticLink>
              </div>
            </div>

            <Parallax
              speed={0.06}
              className="relative mt-2 hidden lg:col-span-5 lg:mt-0 lg:block"
            >
              <div className="glass-strong gradient-border panel-tech card-tech relative overflow-hidden rounded-3xl p-3">
                <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-cyan-200/20 bg-[#060b16]">
                  {showMotionEffects && (
                    <>
                      <div
                        aria-hidden="true"
                        className="hero-blob-a absolute -left-16 -top-16 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl"
                        style={{
                          animation: "hero-blob-a 10s ease-in-out infinite",
                        }}
                      />
                      <div
                        aria-hidden="true"
                        className="hero-blob-b absolute -bottom-16 -right-12 h-56 w-56 rounded-full bg-fuchsia-400/18 blur-3xl"
                        style={{
                          animation: "hero-blob-b 12s ease-in-out infinite",
                        }}
                      />
                      <div
                        aria-hidden="true"
                        className="hero-ring-cw absolute left-1/2 top-1/2 h-52 w-52 rounded-full border border-cyan-200/28"
                        style={{
                          animation: "hero-ring-cw 20s linear infinite",
                        }}
                      />
                      <div
                        aria-hidden="true"
                        className="hero-ring-ccw absolute left-1/2 top-1/2 h-36 w-36 rounded-full border border-fuchsia-200/26"
                        style={{
                          animation: "hero-ring-ccw 14s linear infinite",
                        }}
                      />
                    </>
                  )}

                  <div
                    className="hero-logo-bob absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/30 bg-white/5 p-2 shadow-[0_20px_50px_rgba(2,6,23,0.45)] backdrop-blur-md"
                    style={
                      showMotionEffects
                        ? {
                            animation:
                              "hero-logo-bob 4.2s ease-in-out infinite",
                          }
                        : undefined
                    }
                  >
                    <Image
                      src="/icon.png"
                      alt={locale === "it" ? "Logo VettoLab" : "VettoLab logo"}
                      width={96}
                      height={96}
                      sizes="96px"
                      priority
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/75 via-slate-950/30 to-transparent px-3 py-2">
                    <p className="text-[11px] font-semibold tracking-[0.12em] text-cyan-100/95 uppercase">
                      {locale === "it"
                        ? "Esperienza digitale premium"
                        : "Premium digital experience"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="glass gradient-border card-tech rounded-2xl px-4 py-3">
                  <p className="text-[11px] font-semibold tracking-widest text-(--muted)">
                    {locale === "it" ? "PER CHI" : "FOR"}
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    {locale === "it"
                      ? "Aziende · Professionisti · Brand"
                      : "Businesses · Professionals · Brands"}
                  </p>
                </div>

                <div className="glass gradient-border card-tech rounded-2xl px-4 py-3">
                  <p className="text-[11px] font-semibold tracking-widest text-(--muted)">
                    {locale === "it" ? "OBIETTIVO" : "GOAL"}
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    {locale === "it"
                      ? "Contatti, vendite, richieste"
                      : "Leads, sales, inquiries"}
                  </p>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
}
