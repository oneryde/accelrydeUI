"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl border-b border-nav-border bg-nav-scrolled"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <Image src="/logo.svg" alt="AccelRyde" width={32} height={32} className="transition-transform group-hover:scale-105" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            AccelRyde
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="#product"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Product
          </a>
          <a
            href="#waitlist"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Beta
          </a>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy
          </Link>
          <ThemeToggle />
          <a
            href="https://qafuavp1bg.zite.so"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-full bg-accent text-white hover:bg-accent-hover transition-colors"
          >
            Join our founding team
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-muted-foreground hover:text-foreground"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden backdrop-blur-xl border-b border-nav-border bg-nav-scrolled px-6 pb-6 space-y-4">
          <a
            href="#product"
            onClick={() => setMobileOpen(false)}
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            Product
          </a>
          <a
            href="#waitlist"
            onClick={() => setMobileOpen(false)}
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            Beta
          </a>
          <Link
            href="/privacy"
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            Privacy
          </Link>
          <a
            href="https://qafuavp1bg.zite.so"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium px-5 py-2.5 rounded-full bg-accent text-white hover:bg-accent-hover transition-colors"
          >
            Join our founding team
          </a>
        </div>
      )}
    </nav>
  );
}
