"use client";

import { useEffect } from "react";

/**
 * Lightweight replacement for framer-motion `whileInView`.
 * Observes all `.reveal` elements and adds `.in-view` once visible.
 * ~0.3 KB vs ~30 KB for framer-motion's motion component.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      // Immediately show everything when reduced motion is preferred
      document.querySelectorAll(".reveal").forEach((el) => {
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

    const elements = document.querySelectorAll(".reveal:not(.in-view)");
    elements.forEach((el) => observer.observe(el));

    // Re-observe when new sections lazy-load via dynamic imports
    const mutation = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node instanceof HTMLElement) {
            if (
              node.classList.contains("reveal") &&
              !node.classList.contains("in-view")
            ) {
              observer.observe(node);
            }
            node.querySelectorAll?.(".reveal:not(.in-view)").forEach((el) => {
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
