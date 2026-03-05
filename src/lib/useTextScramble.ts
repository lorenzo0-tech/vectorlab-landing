"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

/**
 * Decodes text character by character with random glyphs,
 * producing a "terminal hack" effect.
 */
export function useTextScramble(
  text: string,
  options?: { speed?: number; delay?: number; enabled?: boolean },
) {
  const { speed = 30, delay = 200, enabled = true } = options ?? {};
  const [displayed, setDisplayed] = useState(text);
  const rafRef = useRef(0);

  const scramble = useCallback(() => {
    if (!enabled) {
      setDisplayed(text);
      return;
    }

    let frame = 0;
    const totalFrames = text.length;

    // Immediately show fully-scrambled text (no flash of plain text)
    let scrambled = "";
    for (let i = 0; i < text.length; i++) {
      scrambled +=
        text[i] === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)];
    }
    setDisplayed(scrambled);

    const tick = () => {
      let output = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          output += " ";
        } else if (i <= frame) {
          output += text[i];
        } else {
          output += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplayed(output);
      frame++;
      if (frame <= totalFrames) {
        rafRef.current = window.setTimeout(tick, speed);
      }
    };

    rafRef.current = window.setTimeout(tick, delay);
  }, [text, speed, delay, enabled]);

  useEffect(() => {
    return () => {
      window.clearTimeout(rafRef.current);
    };
  }, []);

  return { displayed, scramble };
}
