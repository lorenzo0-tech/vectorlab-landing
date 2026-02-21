"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  type HTMLMotionProps,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import { CALENDLY_URL } from "@/lib/constants";
import { trackCtaClick } from "@/lib/analytics-events";

type MagneticLinkProps = HTMLMotionProps<"a">;

function MagneticLink({ className, children, ...props }: MagneticLinkProps) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 22, mass: 0.3 });
  const y = useSpring(my, { stiffness: 260, damping: 22, mass: 0.3 });

  return (
    <motion.a
      {...props}
      className={className}
      style={reduce ? undefined : { x, y }}
      onMouseMove={(event) => {
        if (reduce) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const nx = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
        const ny = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
        mx.set(nx * 7);
        my.set(ny * 7);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      whileHover={reduce ? undefined : { scale: 1.01 }}
      whileTap={reduce ? undefined : { scale: 0.99 }}
    >
      {children}
    </motion.a>
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
    let width = 0;
    let height = 0;
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

    const count = Math.max(14, Math.min(30, Math.floor(width / 38)));
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

    const tick = () => {
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

    raf = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
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
  const shouldReduceMotion = useReducedMotion();
  const particlesEnabled = !shouldReduceMotion;

  const pills = useMemo(
    () => [
      "Prima su smartphone",
      "Velocità reale",
      "Menu in un tocco",
      "SEO locale di base",
      "Tracciamento dei clic",
    ],
    [],
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
        <div className="relative flex min-h-[78vh] items-center pb-28 pt-14 sm:min-h-[86vh] sm:pb-24 sm:pt-20">
          <div className="absolute inset-0 -z-10">
            <ParticlesCanvas enabled={particlesEnabled} />
          </div>

          <div className="grid w-full items-center gap-10 lg:grid-cols-12">
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
              className="max-w-3xl xl:col-span-7"
            >
              <div className="relative">
                <motion.span
                  aria-hidden="true"
                  className="hero-title-glow"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: [0.62, 0.82, 0.62], scale: [1, 1.04, 1] }
                  }
                  transition={{
                    duration: 6.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <h1 className="heading-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                  <span className="hero-title-tech">
                    Siti web per ristoranti e hotel, creati su misura.
                  </span>
                </h1>
              </div>

              <p className="mt-6 text-pretty text-lg leading-8 text-(--muted) sm:text-xl">
                Siamo specializzati in creazione e sviluppo di siti web per
                ristoranti e hotel: progettazione di alto livello, esperienza
                utente prima da smartphone e tecnologia solida per trasformare
                visite in prenotazioni e richieste.
              </p>

              <p className="mt-3 text-sm font-semibold tracking-wide text-cyan-100/90">
                Dalla strategia al lancio: un unico partner per immagine,
                prestazioni e conversione.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {pills.map((p) => (
                  <span
                    key={p}
                    className="glass gradient-border rounded-full px-3 py-1 text-xs font-semibold text-foreground"
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
                  className="btn-primary focus-ring"
                  onClick={() =>
                    trackCtaClick({
                      posizione: "testata",
                      destinazione: "calendly",
                    })
                  }
                >
                  Prenota una chiamata (15 min)
                  <ArrowUpRight className="h-4 w-4" />
                </MagneticLink>
                <MagneticLink
                  href="#preventivo"
                  className="btn-secondary focus-ring"
                  onClick={() =>
                    trackCtaClick({
                      posizione: "testata",
                      destinazione: "preventivo",
                    })
                  }
                >
                  Richiedi un preventivo
                  <Mail className="h-4 w-4" />
                </MagneticLink>
              </div>
            </motion.div>

            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 20, scale: 0.985 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.2, 0.8, 0.2, 1],
                delay: 0.08,
              }}
              className="relative hidden lg:col-span-5 lg:block"
            >
              <div className="glass-strong gradient-border panel-tech card-tech relative overflow-hidden rounded-3xl p-3">
                <Image
                  src="/images/herosala.jpg"
                  alt="Sala ristorante elegante, luce calda e profondità"
                  width={1400}
                  height={900}
                  priority
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-auto w-full rounded-2xl"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="glass gradient-border rounded-2xl px-4 py-3">
                  <p className="text-[11px] font-semibold tracking-widest text-(--muted)">
                    SPECIALIZZAZIONE
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    Ristoranti · Pizzerie · Cocktail bar
                  </p>
                </div>

                <div className="glass gradient-border rounded-2xl px-4 py-3">
                  <p className="text-[11px] font-semibold tracking-widest text-(--muted)">
                    OBIETTIVO
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    Prenotazioni, chiamate, richieste
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
