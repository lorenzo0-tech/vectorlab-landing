"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wraps an H2 (or any text) and reveals it letter-by-letter
 * with a staggered wave animation when the element scrolls into view.
 *
 * Usage:
 * ```tsx
 * <StaggerText as="h2" className="heading-display ...">
 *   Your heading text here
 * </StaggerText>
 * ```
 *
 * Children must be a plain string or a mix of strings and <span> elements.
 */
export function StaggerText({
  children,
  as: Tag = "h2",
  className = "",
  staggerMs = 18,
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  staggerMs?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      // Defer to avoid sync setState in effect body
      queueMicrotask(() => setInView(true));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Render children with letter spans while preserving original structure
  const renderWithLetters = (
    node: ReactNode,
    baseIndex: { current: number },
  ): ReactNode => {
    if (typeof node === "string") {
      // Split into words to prevent mid-word line breaks
      const words = node.split(" ");
      return words.map((word, wordIdx) => {
        const letters = word.split("").map((char) => {
          const i = baseIndex.current++;
          return (
            <span
              key={i}
              className="stagger-letter"
              style={{
                transitionDelay: `${i * staggerMs}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(8px)",
                display: "inline-block",
                transition: `opacity 0.35s ease, transform 0.35s ease`,
              }}
            >
              {char}
            </span>
          );
        });
        // Wrap each word in a nowrap span, add a real space between words
        return (
          <span
            key={`w${wordIdx}`}
            style={{ whiteSpace: "nowrap", display: "inline" }}
          >
            {letters}
            {wordIdx < words.length - 1 ? " " : null}
          </span>
        );
      });
    }

    if (Array.isArray(node)) {
      return node.map((child, idx) => (
        <span key={idx}>{renderWithLetters(child, baseIndex)}</span>
      ));
    }

    if (node && typeof node === "object" && "props" in node) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const element = node as any;
      const { children: innerChildren, ...restProps } = element.props;
      return (
        <element.type {...restProps}>
          {renderWithLetters(innerChildren as ReactNode, baseIndex)}
        </element.type>
      );
    }

    return node;
  };

  const indexRef = { current: 0 };

  return (
    <Tag ref={ref as React.Ref<HTMLHeadingElement>} className={className}>
      {renderWithLetters(children, indexRef)}
    </Tag>
  );
}
