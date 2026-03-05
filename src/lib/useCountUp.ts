"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 to `end` when the element scrolls into view.
 * Returns `{ ref, value }` — attach `ref` to the container element.
 */
export function useCountUp(
  end: number,
  options?: {
    duration?: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
  },
) {
  const {
    duration = 1800,
    decimals = 0,
    prefix = "",
    suffix = "",
  } = options ?? {};
  const [value, setValue] = useState(`${prefix}0${suffix}`);
  const elRef = useRef<HTMLElement | null>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = elRef.current;
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
            setValue(`${prefix}${end.toFixed(decimals)}${suffix}`);
            return;
          }

          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * end;
            setValue(`${prefix}${current.toFixed(decimals)}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setValue(`${prefix}${end.toFixed(decimals)}${suffix}`);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, decimals, prefix, suffix]);

  return { ref: elRef, value };
}
