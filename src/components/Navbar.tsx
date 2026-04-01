"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
          ? "bg-[#09090B]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/logo.svg" alt="AccelRyde" width={32} height={32} className="transition-transform group-hover:scale-105" />
          <span className="text-lg font-semibold tracking-tight text-[#FAFAFA]">
            AccelRyde
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#product"
            className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
          >
            Product
          </a>
          <a
            href="#waitlist"
            className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
          >
            Beta
          </a>
          <Link
            href="/privacy"
            className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
          >
            Privacy
          </Link>
          <a
            href="https://qafuavp1bg.zite.so"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-full bg-[#FF6600] text-white hover:bg-[#E65C00] transition-colors"
          >
            Join our founding team
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#A1A1AA] hover:text-[#FAFAFA]"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#09090B]/95 backdrop-blur-xl border-b border-white/5 px-6 pb-6 space-y-4">
          <a
            href="#product"
            onClick={() => setMobileOpen(false)}
            className="block text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors py-2"
          >
            Product
          </a>
          <a
            href="#waitlist"
            onClick={() => setMobileOpen(false)}
            className="block text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors py-2"
          >
            Beta
          </a>
          <Link
            href="/privacy"
            className="block text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors py-2"
          >
            Privacy
          </Link>
          <a
            href="https://qafuavp1bg.zite.so"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium px-5 py-2.5 rounded-full bg-[#FF6600] text-white hover:bg-[#E65C00] transition-colors"
          >
            Join our founding team
          </a>
        </div>
      )}
    </nav>
  );
}
