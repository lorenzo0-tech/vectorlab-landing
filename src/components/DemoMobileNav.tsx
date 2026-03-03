"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

type NavItem = { href: string; label: string };

export function DemoMobileNav({
  items,
  theme,
}: {
  items: NavItem[];
  theme: "light" | "dark";
}) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const isLight = theme === "light";

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg"
        aria-label={open ? "Chiudi menu" : "Apri menu"}
        aria-expanded={open}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={close}
          />
          <nav
            className={
              "fixed inset-x-0 top-0 z-50 flex flex-col gap-1 px-5 pb-6 pt-16 shadow-xl " +
              (isLight
                ? "bg-[#fbf8f2] text-[#32281d]"
                : "bg-[#120d09] text-[#f5eee4]")
            }
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg"
              aria-label="Chiudi menu"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className={
                  "rounded-xl px-4 py-3 text-base font-medium transition " +
                  (isLight ? "hover:bg-[#f0e6d3]" : "hover:bg-[#2a1e12]")
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}
