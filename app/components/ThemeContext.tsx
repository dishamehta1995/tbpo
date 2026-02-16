"use client";

export { useTheme, toggleTheme } from "@/context/ThemeContext";

// Keep a no-op ThemeProvider for compatibility with any imports that expect it.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
