"use client";

import { useEffect, useState } from "react";

// A lightweight replacement for the previous context-based API.
// - `useTheme()` returns `{ isDark, toggleTheme }`.
// - Theme is persisted in `localStorage` and applied to `document.documentElement`.
// - Components stay reactive via an internal "theme-change" event.

function applyDocumentTheme(isDark: boolean) {
  if (isDark) document.documentElement.classList.add("dark");
  else document.documentElement.classList.remove("dark");
}

function getSavedTheme(): boolean {
  try {
    return localStorage.getItem("theme") === "dark";
  } catch {
    return false;
  }
}

export function toggleTheme() {
  const current = getSavedTheme();
  const next = !current;
  try {
    localStorage.setItem("theme", next ? "dark" : "light");
  } catch {}
  applyDocumentTheme(next);
  window.dispatchEvent(
    new CustomEvent("theme-change", { detail: { isDark: next } })
  );
}

export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return getSavedTheme();
  });

  useEffect(() => {
    // apply initial theme
    applyDocumentTheme(isDark);

    // listener to keep multiple components in sync
    const onChange = (e: Event) => {
      const ev = e as CustomEvent<{ isDark: boolean }>;
      setIsDark(Boolean(ev.detail?.isDark));
    };

    window.addEventListener("theme-change", onChange as EventListener);

    return () =>
      window.removeEventListener("theme-change", onChange as EventListener);
  }, []);

  return {
    isDark,
    toggleTheme,
  };
}
