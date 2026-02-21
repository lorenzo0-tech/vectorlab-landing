import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { trackIntroComplete, trackIntroSkip } from "@/lib/analytics-events";
import { COMPANY_NAME } from "@/lib/constants";

type EntryGateProps = {
  onEnterAction?: () => void;
  onCompleteAction?: () => void;
  nonBlocking?: boolean;
  autoStart?: boolean;
  showSkip?: boolean;
  durationMs?: number;
};

type Orb = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: number;
  cooldown: number;
};

const WARP_DURATION_MS = 2200;

function OrbsField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let nextId = 0;

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const createOrb = (x?: number, y?: number, radius?: number): Orb => ({
      id: nextId++,
      x: x ?? Math.random() * width,
      y: y ?? Math.random() * height,
      vx: (Math.random() - 0.5) * 1.15,
      vy: (Math.random() - 0.5) * 1.15,
      r: radius ?? 3 + Math.random() * 4.5,
      hue: 185 + Math.random() * 120,
      cooldown: 0,
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const maxOrbs = 120;
    const orbs: Orb[] = Array.from({ length: 42 }, () => createOrb());

    const tick = () => {
      context.clearRect(0, 0, width, height);

      for (const orb of orbs) {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < orb.r || orb.x > width - orb.r) orb.vx *= -1;
        if (orb.y < orb.r || orb.y > height - orb.r) orb.vy *= -1;

        if (orb.cooldown > 0) orb.cooldown -= 1;
      }

      for (let index = 0; index < orbs.length; index += 1) {
        const a = orbs[index];
        if (!a) continue;

        for (let inner = index + 1; inner < orbs.length; inner += 1) {
          const b = orbs[inner];
          if (!b) continue;

          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distance = Math.hypot(dx, dy);
          const threshold = (a.r + b.r) * 1.1;

          if (distance < threshold) {
            const pull = 0.0009;
            a.vx += dx * pull;
            a.vy += dy * pull;
            b.vx -= dx * pull;
            b.vy -= dy * pull;

            if (a.cooldown <= 0 && b.cooldown <= 0 && orbs.length < maxOrbs) {
              const midX = (a.x + b.x) / 2;
              const midY = (a.y + b.y) / 2;

              a.r = Math.min(a.r + b.r * 0.18, 11.5);
              a.hue = (a.hue + b.hue) / 2;
              a.cooldown = 45;
              b.cooldown = 45;

              orbs.push(
                createOrb(
                  midX + (Math.random() - 0.5) * 12,
                  midY + (Math.random() - 0.5) * 12,
                  2.8 + Math.random() * 2.6,
                ),
              );
            }
          }
        }
      }

      for (const orb of orbs) {
        const gradient = context.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.r * 2.4,
        );

        gradient.addColorStop(0, `hsla(${orb.hue}, 95%, 72%, 0.95)`);
        gradient.addColorStop(1, `hsla(${orb.hue}, 100%, 65%, 0)`);

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(orb.x, orb.y, orb.r * 2.4, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = `hsla(${orb.hue}, 100%, 84%, 0.95)`;
        context.beginPath();
        context.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        context.fill();
      }

      if (orbs.length > maxOrbs) {
        orbs.splice(0, orbs.length - maxOrbs);
      }

      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

function EntryWordmark({ companyName }: { companyName: string }) {
  return (
    <motion.h1
      className="heading-display relative inline-block text-3xl font-semibold tracking-[0.08em] sm:text-6xl sm:tracking-[0.12em]"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 blur-xl text-cyan-200/55"
        animate={{ opacity: [0.38, 0.72, 0.38], scale: [1, 1.025, 1] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      >
        {companyName}
      </motion.span>

      <motion.span
        aria-hidden="true"
        className="absolute inset-0 text-cyan-300/35"
        animate={{
          x: [-0.8, 0.6, -0.4, 0.8, -0.8],
          opacity: [0.22, 0.45, 0.2],
        }}
        transition={{ duration: 1.9, repeat: Infinity, ease: "linear" }}
      >
        {companyName}
      </motion.span>

      <motion.span
        aria-hidden="true"
        className="absolute inset-0 text-fuchsia-300/25"
        animate={{
          x: [0.7, -0.7, 0.5, -0.5, 0.7],
          opacity: [0.2, 0.34, 0.2],
        }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
      >
        {companyName}
      </motion.span>

      <span className="relative inline-block bg-[linear-gradient(110deg,rgba(240,249,255,0.98)_0%,rgba(125,211,252,0.94)_35%,rgba(165,180,252,0.94)_65%,rgba(232,121,249,0.92)_100%)] bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(34,211,238,0.45)]">
        {companyName}
        <motion.span
          aria-hidden="true"
          className="absolute inset-y-0 left-[-26%] w-[26%] skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.72),transparent)] blur-md"
          animate={{ left: ["-26%", "126%"], opacity: [0, 0.78, 0] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            repeatDelay: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </span>
    </motion.h1>
  );
}

function EntryBrandLogoBackground() {
  return (
    <motion.div
      aria-hidden="true"
      className="relative z-10"
      animate={{
        y: [0, -5, 0],
        opacity: [0.88, 1, 0.88],
      }}
      transition={{
        duration: 5.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative">
        <motion.div
          className="absolute inset-[-26%] rounded-4xl bg-cyan-300/18 blur-3xl"
          animate={{ scale: [0.94, 1.08, 0.94], opacity: [0.56, 1, 0.56] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-[-20%] rounded-4xl bg-fuchsia-300/18 blur-3xl"
          animate={{ scale: [1.08, 0.98, 1.08], opacity: [0.42, 0.8, 0.42] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-[-12%] rounded-4xl bg-indigo-300/12 blur-2xl"
          animate={{ opacity: [0.28, 0.55, 0.28] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <Image
          src="/images/mock/logo_vettolab.png"
          alt=""
          width={360}
          height={240}
          className="relative h-auto w-72 opacity-52 mix-blend-screen saturate-150 contrast-150 brightness-115 drop-shadow-[0_0_40px_rgba(56,189,248,0.45)] sm:w-96"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 66% 58% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.86) 70%, rgba(0,0,0,0) 100%)",
            maskImage:
              "radial-gradient(ellipse 66% 58% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.86) 70%, rgba(0,0,0,0) 100%)",
          }}
          priority
        />
        <div className="absolute inset-0 rounded-3xl bg-background/16 blur-lg" />
      </div>
    </motion.div>
  );
}

export function EntryGate({
  onEnterAction,
  onCompleteAction,
  nonBlocking = false,
  autoStart = false,
  showSkip = false,
  durationMs = WARP_DURATION_MS,
}: EntryGateProps) {
  const [ready, setReady] = useState(nonBlocking || autoStart);
  const [jumping, setJumping] = useState(false);
  const completeTimeoutRef = useRef<number | null>(null);
  const startTimeoutRef = useRef<number | null>(null);
  const ringCount = nonBlocking ? 8 : 11;
  const streakCount = nonBlocking ? 140 : 240;

  useEffect(() => {
    return () => {
      if (completeTimeoutRef.current) {
        window.clearTimeout(completeTimeoutRef.current);
      }
      if (startTimeoutRef.current) {
        window.clearTimeout(startTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (nonBlocking || autoStart) return;

    const timeout = window.setTimeout(() => setReady(true), 1100);
    return () => window.clearTimeout(timeout);
  }, [autoStart, nonBlocking]);

  useEffect(() => {
    if (!autoStart) return;

    startTimeoutRef.current = window.setTimeout(() => {
      setJumping(true);

      completeTimeoutRef.current = window.setTimeout(() => {
        setJumping(false);
        trackIntroComplete({
          modalita: nonBlocking ? "non_bloccante" : "bloccante",
          autoStart: true,
        });
        onCompleteAction?.();
      }, durationMs);
    }, 120);

    return () => {
      if (startTimeoutRef.current) {
        window.clearTimeout(startTimeoutRef.current);
      }
      if (completeTimeoutRef.current) {
        window.clearTimeout(completeTimeoutRef.current);
      }
    };
  }, [autoStart, durationMs, nonBlocking, onCompleteAction]);

  const handleEnter = () => {
    if (!ready || jumping) return;

    setJumping(true);
    completeTimeoutRef.current = window.setTimeout(() => {
      onEnterAction?.();
      trackIntroComplete({ modalita: "bloccante", autoStart: false });
      onCompleteAction?.();
    }, durationMs);
  };

  const handleSkip = () => {
    if (startTimeoutRef.current) {
      window.clearTimeout(startTimeoutRef.current);
    }
    if (completeTimeoutRef.current) {
      window.clearTimeout(completeTimeoutRef.current);
    }
    setJumping(false);
    trackIntroSkip({
      modalita: nonBlocking ? "non_bloccante" : "bloccante",
      autoStart,
    });
    onCompleteAction?.();
  };

  return (
    <section
      className={
        nonBlocking
          ? "pointer-events-none fixed inset-0 z-70 flex items-center justify-center overflow-hidden"
          : "relative flex h-full w-full items-center justify-center overflow-hidden"
      }
      aria-hidden={nonBlocking ? "true" : undefined}
    >
      {!nonBlocking ? (
        <div className="pointer-events-none absolute inset-0 bg-background" />
      ) : null}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(82%_62%_at_20%_18%,rgba(6,182,212,0.36),transparent_62%),radial-gradient(74%_56%_at_84%_22%,rgba(99,102,241,0.32),transparent_64%),radial-gradient(70%_60%_at_50%_88%,rgba(217,70,239,0.24),transparent_66%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_34%_at_50%_48%,rgba(14,165,233,0.12),transparent_72%)]" />

      {!nonBlocking ? <OrbsField /> : null}

      <div className="pointer-events-none absolute top-10 left-0 right-0 z-20 px-4 text-center sm:top-14">
        <EntryWordmark companyName={COMPANY_NAME} />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[45%] z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 sm:gap-4">
        <EntryBrandLogoBackground />

        {!nonBlocking && !autoStart ? (
          <motion.div
            className="pointer-events-auto relative z-20"
            initial={{ opacity: 0.96 }}
            animate={{ opacity: 1 }}
          >
            <div className="pointer-events-none absolute -inset-4 rounded-full bg-background/45 blur-xl" />
            <motion.button
              type="button"
              onClick={handleEnter}
              disabled={!ready || jumping}
              aria-disabled={!ready || jumping}
              className={`btn-primary focus-ring relative z-20 ${ready && !jumping ? "" : "cursor-not-allowed opacity-70"}`}
              whileHover={ready && !jumping ? { scale: 1.045 } : undefined}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-cyan-300/25 blur-md"
                animate={
                  ready && !jumping
                    ? {
                        scale: [1, 1.34, 1],
                        opacity: [0.22, 0.68, 0.22],
                      }
                    : undefined
                }
                transition={{
                  duration: 1.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {jumping ? "Ingresso in modalità immersiva" : "Accedi al sito"}
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>
        ) : null}
      </div>

      {nonBlocking && showSkip && jumping ? (
        <button
          type="button"
          onClick={handleSkip}
          className="btn-secondary pointer-events-auto absolute right-4 top-4 z-40 px-4 py-2 text-xs"
          aria-label="Salta animazione iniziale"
        >
          Salta animazione
        </button>
      ) : null}

      <AnimatePresence>
        {jumping ? (
          <motion.div
            className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.18),rgba(2,6,23,0.74)_40%,rgba(2,6,23,0.9)_75%)]"
              initial={{ scale: 1 }}
              animate={{ scale: 1.7 }}
              transition={{
                duration: durationMs / 1000,
                ease: [0.08, 0.82, 0.2, 1],
              }}
            />

            {Array.from({ length: ringCount }).map((_, index) => (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2 rounded-full border border-cyan-100/35"
                initial={{ width: 14, height: 14, opacity: 0 }}
                animate={{
                  width: [14, 240, 1000, 2400],
                  height: [14, 240, 1000, 2400],
                  opacity: [0, 1, 0.3, 0],
                }}
                transition={{
                  duration: durationMs / 1000,
                  delay: index * 0.08,
                  ease: [0.06, 0.82, 0.2, 1],
                }}
                style={{ marginLeft: -7, marginTop: -7 }}
              />
            ))}

            {Array.from({ length: streakCount }).map((_, index) => {
              const angle = (index * 137.5 * Math.PI) / 180;
              const distance = 420 + ((index * 67) % 2200);
              const angleDeg = (angle * 180) / Math.PI;
              const x = Math.cos(angle) * distance;
              const y = Math.sin(angle) * distance;
              return (
                <motion.span
                  key={index}
                  className="absolute left-1/2 top-1/2 rounded-full bg-cyan-100/95"
                  style={{
                    width: 16 + (index % 8) * 12,
                    height: 1.8,
                    rotate: `${angleDeg}deg`,
                  }}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scaleX: 0.12,
                    scaleY: 0.6,
                  }}
                  animate={{
                    x,
                    y,
                    opacity: [0, 1, 0],
                    scaleX: [0.12, 2.6, 0.2],
                    scaleY: [0.6, 1.2, 0.35],
                  }}
                  transition={{
                    duration: 1.5 + (index % 12) * 0.08,
                    delay: (index % 55) * 0.016,
                    ease: [0.08, 0.82, 0.2, 1],
                  }}
                />
              );
            })}

            <motion.div
              className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 blur-2xl"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: [0, 1, 0], scale: [0.3, 7, 16] }}
              transition={{
                duration: durationMs / 1000,
                ease: [0.14, 0.82, 0.2, 1],
              }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
