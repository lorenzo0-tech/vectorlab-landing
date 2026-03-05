"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Applies a subtle parallax translation to its children based on scroll position.
 * Images wrapped in this component move slower than the page, creating depth.
 *
 * Usage:
 * ```tsx
 * <Parallax speed={0.08}>
 *   <Image ... />
 * </Parallax>
 * ```
 */
export function Parallax({
  children,
  speed = 0.08,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isActive = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (reduced || isMobile) return;

    isActive.current = true;
    el.style.willChange = "transform";

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const offset = (elementCenter - viewportCenter) * speed;
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
