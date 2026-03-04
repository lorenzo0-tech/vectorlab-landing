"use client";

import { useEffect } from "react";

/**
 * Lightweight replacement for framer-motion `whileInView`.
 * Observes `.reveal`, `.reveal-scale`, `.reveal-left`, `.reveal-right`
 * elements and adds `.in-view` once visible.
 * ~0.3 KB vs ~30 KB for framer-motion's motion component.
 */
const REVEAL_SEL = ".reveal, .reveal-scale, .reveal-left, .reveal-right";
const PENDING_SEL =
  ".reveal:not(.in-view), .reveal-scale:not(.in-view), .reveal-left:not(.in-view), .reveal-right:not(.in-view)";
const REVEAL_CLASSES = [
  "reveal",
  "reveal-scale",
  "reveal-left",
  "reveal-right",
];

export function ScrollReveal() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      // Immediately show everything when reduced motion is preferred
      document.querySelectorAll(REVEAL_SEL).forEach((el) => {
        el.classList.add("in-view");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    const elements = document.querySelectorAll(PENDING_SEL);
    elements.forEach((el) => observer.observe(el));

    // Re-observe when new sections lazy-load via dynamic imports
    const mutation = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node instanceof HTMLElement) {
            if (
              REVEAL_CLASSES.some((c) => node.classList.contains(c)) &&
              !node.classList.contains("in-view")
            ) {
              observer.observe(node);
            }
            node.querySelectorAll?.(PENDING_SEL).forEach((el) => {
              observer.observe(el);
            });
          }
        }
      }
    });

    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return null;
}
