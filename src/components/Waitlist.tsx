"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    // Honeypot check
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement)?.value;
    if (honeypot) return;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-20 rounded-full bg-gradient-to-r from-[#FF6600]/30 via-[#FF6600]/10 to-[#3B82F6]/30 blur-3xl" />
      </div>

      <div
        className={`relative z-10 max-w-2xl mx-auto px-6 text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF6600]">
          Early Access
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAFAFA]">
          Help us ship it right
        </h2>
        <p className="mt-4 text-[#A1A1AA] text-lg max-w-lg mx-auto">
          Join the beta waitlist. Early riders shape the product — your feedback
          lands directly in our build queue.
        </p>

        {status === "success" ? (
          <div className="mt-10 p-6 rounded-2xl border border-[#FF6600]/20 bg-[#FF6600]/5">
            <div className="text-2xl mb-2">&#10003;</div>
            <p className="text-[#FAFAFA] font-semibold">You&apos;re on the list</p>
            <p className="text-[#A1A1AA] text-sm mt-1">
              We&apos;ll reach out when the beta is ready. Thanks for riding with us early.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                  className="w-full px-5 py-3.5 rounded-xl bg-[#18181B] border border-[#27272A] text-[#FAFAFA] placeholder-[#52525B] focus:outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600] transition-colors text-sm"
                />
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute opacity-0 h-0 w-0 overflow-hidden"
                  aria-hidden="true"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-7 py-3.5 rounded-xl bg-[#FF6600] text-white font-semibold hover:bg-[#E65C00] transition-all hover:shadow-[0_0_30px_rgba(255,102,0,0.2)] disabled:opacity-60 disabled:cursor-not-allowed text-sm whitespace-nowrap"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Joining...
                  </span>
                ) : (
                  "Join the beta"
                )}
              </button>
            </div>

            {status === "error" && errorMsg && (
              <p className="mt-3 text-sm text-red-400">{errorMsg}</p>
            )}

            <p className="mt-4 text-xs text-[#52525B]">
              We&apos;ll only use your email to send beta updates. No spam, ever.
              See our{" "}
              <a href="/privacy" className="underline hover:text-[#A1A1AA] transition-colors">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
