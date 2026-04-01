"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "accelryde-theme";

function subscribe(onStoreChange: () => void) {
  const el = document.documentElement;
  const observer = new MutationObserver(onStoreChange);
  observer.observe(el, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function getThemeSnapshot(): "dark" | "light" {
  const t = document.documentElement.getAttribute("data-theme");
  return t === "light" ? "light" : "dark";
}

function getServerSnapshot(): "dark" | "light" {
  return "dark";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, [theme]);

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-lg border border-border bg-card px-2.5 py-1.5 text-muted-foreground shadow-sm hover:text-foreground hover:border-muted transition-colors"
      aria-label={theme === "dark" ? "Preview light theme" : "Preview dark theme"}
      title={theme === "dark" ? "Light preview" : "Dark theme"}
    >
      {theme === "dark" ? (
        <span className="text-xs font-medium flex items-center gap-1.5">
          <SunIcon />
          Light
        </span>
      ) : (
        <span className="text-xs font-medium flex items-center gap-1.5">
          <MoonIcon />
          Dark
        </span>
      )}
    </button>
  );
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
