"use client";

import { useEffect, useState } from "react";
import { EntryGate } from "@/components/EntryGate";

const GATE_SESSION_KEY = "entry_gate_seen_v1";

export function GateOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = window.sessionStorage.getItem(GATE_SESSION_KEY) === "1";
    if (seen) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const saveData =
      "connection" in navigator &&
      Boolean(
        (navigator as Navigator & { connection?: { saveData?: boolean } })
          .connection?.saveData,
      );

    if (prefersReducedMotion || isMobile || saveData) {
      window.sessionStorage.setItem(GATE_SESSION_KEY, "1");
      return;
    }

    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 220);

    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-999 bg-background pointer-events-auto isolate"
      aria-hidden="true"
    >
      <EntryGate
        showSkip={false}
        durationMs={1700}
        onCompleteAction={() => {
          window.sessionStorage.setItem(GATE_SESSION_KEY, "1");
          setVisible(false);
        }}
      />
    </div>
  );
}
