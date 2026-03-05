"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Inline animated counter that counts up when scrolled into view.
 *
 * Usage: <CountUp end={14} suffix=" giorni" className="text-2xl font-bold" />
 */
export function CountUp({
  end,
  duration = 1800,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  const finalFormatted =
    decimals > 0 ? end.toFixed(decimals) : end.toLocaleString("it-IT");

  const [value, setValue] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          observer.disconnect();

          const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;
          if (reduced) {
            setValue(`${prefix}${finalFormatted}${suffix}`);
            return;
          }

          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * end;

            // Format with locale-aware separators
            const formatted =
              decimals > 0
                ? current.toFixed(decimals)
                : Math.round(current).toLocaleString("it-IT");
            setValue(`${prefix}${formatted}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setValue(`${prefix}${finalFormatted}${suffix}`);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, decimals, prefix, suffix, finalFormatted]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
