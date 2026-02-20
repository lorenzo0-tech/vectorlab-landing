"use client";

import { useEffect, useState } from "react";
import { EntryGate } from "@/components/EntryGate";

const GATE_SESSION_KEY = "entry_gate_seen_v1";

export function GateOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = window.sessionStorage.getItem(GATE_SESSION_KEY) === "1";
    if (seen) return;

    const timer = window.setTimeout(() => {
      setVisible(true);
      window.sessionStorage.setItem(GATE_SESSION_KEY, "1");
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[80] pointer-events-auto"
      aria-hidden="true"
    >
      <EntryGate
        nonBlocking
        autoStart
        showSkip
        durationMs={1700}
        onCompleteAction={() => setVisible(false)}
      />
    </div>
  );
}
