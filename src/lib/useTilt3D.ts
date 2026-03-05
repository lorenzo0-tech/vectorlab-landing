"use client";

import {
  useCallback,
  useRef,
  type MouseEvent,
  type CSSProperties,
} from "react";

/**
 * Adds a 3D perspective tilt on hover.
 * Returns handlers + a style object to spread on the element.
 *
 * Usage:
 * ```tsx
 * const { tiltStyle, handlers } = useTilt3D();
 * <div style={tiltStyle} {...handlers}> ... </div>
 * ```
 */
export function useTilt3D(options?: {
  max?: number;
  perspective?: number;
  speed?: number;
  glare?: boolean;
}) {
  const { max = 8, perspective = 800, speed = 400 } = options ?? {};
  const styleRef = useRef<CSSProperties>({
    transform: "perspective(800px) rotateX(0deg) rotateY(0deg)",
    transition: `transform ${speed}ms cubic-bezier(.03,.98,.52,.99)`,
  });

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const nx = (x / rect.width - 0.5) * 2; // -1 to 1
      const ny = (y / rect.height - 0.5) * 2;
      const rotateX = -ny * max;
      const rotateY = nx * max;

      styleRef.current = {
        transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: `transform ${speed * 0.3}ms cubic-bezier(.03,.98,.52,.99)`,
      };

      // Direct DOM mutation for 60fps
      el.style.transform = styleRef.current.transform as string;
      el.style.transition = styleRef.current.transition as string;
    },
    [max, perspective, speed],
  );

  const onMouseLeave = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const el = e.currentTarget;
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      el.style.transition = `transform ${speed}ms cubic-bezier(.03,.98,.52,.99)`;
    },
    [perspective, speed],
  );

  return {
    tiltHandlers: { onMouseMove, onMouseLeave },
    tiltStyle: {
      transformStyle: "preserve-3d" as const,
      willChange: "transform",
    },
  };
}
