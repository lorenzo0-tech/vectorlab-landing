"use client";

import { useEffect, useRef, type ReactNode, type MouseEvent } from "react";

/**
 * Wrapper that applies a 3D tilt effect on hover.
 * Only active on desktop (hover-capable devices).
 * Avoids hydration mismatch by always rendering a plain div on first paint,
 * then promoting to 3D via DOM mutation after mount.
 */
export function TiltCard({
  children,
  className = "",
  max = 6,
  perspective = 800,
  speed = 400,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  perspective?: number;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const active = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    active.current = true;
    el.style.transformStyle = "preserve-3d";
    el.style.willChange = "transform";

    return () => {
      active.current = false;
    };
  }, []);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!active.current) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const nx = (x / rect.width - 0.5) * 2;
    const ny = (y / rect.height - 0.5) * 2;
    const rotateX = -ny * max;
    const rotateY = nx * max;

    el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    el.style.transition = `transform ${speed * 0.25}ms cubic-bezier(.03,.98,.52,.99)`;
  };

  const onMouseLeave = () => {
    if (!active.current) return;
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    el.style.transition = `transform ${speed}ms cubic-bezier(.03,.98,.52,.99)`;
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
