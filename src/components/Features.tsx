"use client";

import { useEffect, useRef, useState, useCallback, type ReactNode } from "react";
import {
  GroupOverviewScreen,
  MembersScreen,
  RidesScreen,
  MapScreen,
  ChatScreen,
  DiscoverGroupsScreen,
  RideDetailsScreen,
} from "./AppScreens";

/* ------------------------------------------------------------------ */
/*  Auto-sliding phone carousel                                       */
/* ------------------------------------------------------------------ */

function PhoneCarousel({
  screens,
  labels,
  accent,
  interval = 4000,
}: {
  screens: ReactNode[];
  labels: string[];
  accent: string;
  interval?: number;
}) {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval>>(undefined);

  const startTimer = useCallback(() => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      setActive((prev) => (prev + 1) % screens.length);
    }, interval);
  }, [screens.length, interval]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timer.current);
  }, [startTimer]);

  function goTo(idx: number) {
    setActive(idx);
    startTimer();
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Phone frame */}
      <div
        className="relative mx-auto w-full max-w-[280px] aspect-[9/19] rounded-[2rem] border-2 border-border bg-phone-frame overflow-hidden"
        style={{
          boxShadow: `0 0 80px ${accent}14, 0 8px 32px rgba(0,0,0,0.25)`,
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-phone-notch rounded-b-xl z-20" />

        {/* Screens with crossfade */}
        {screens.map((screen, idx) => (
          <div
            key={idx}
            className="absolute inset-0 pt-5 transition-opacity duration-500"
            style={{ opacity: idx === active ? 1 : 0, pointerEvents: idx === active ? "auto" : "none" }}
          >
            {screen}
          </div>
        ))}

        {/* Home indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-phone-home rounded-full z-20" />
      </div>

      {/* Dot indicators + labels */}
      <div className="flex items-center gap-3">
        {labels.map((label, idx) => (
          <button
            key={label}
            onClick={() => goTo(idx)}
            className="flex items-center gap-1.5 group"
            aria-label={`Show ${label}`}
          >
            <span
              className="block w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: idx === active ? accent : "var(--color-phone-home)",
                transform: idx === active ? "scale(1.2)" : "scale(1)",
              }}
            />
            <span
              className="text-[10px] font-medium transition-colors duration-300 hidden sm:inline"
              style={{ color: idx === active ? "var(--color-foreground)" : "var(--color-muted)" }}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Static phone frame (single screen)                                */
/* ------------------------------------------------------------------ */

function PhoneFrame({ screen, accent }: { screen: ReactNode; accent: string }) {
  return (
    <div
      className="relative mx-auto w-full max-w-[280px] aspect-[9/19] rounded-[2rem] border-2 border-border bg-phone-frame overflow-hidden"
      style={{
        boxShadow: `0 0 80px ${accent}14, 0 8px 32px rgba(0,0,0,0.25)`,
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-phone-notch rounded-b-xl z-20" />
      <div className="absolute inset-0 pt-5 overflow-hidden">{screen}</div>
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#3f3f46] rounded-full z-20" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature data                                                      */
/* ------------------------------------------------------------------ */

interface Feature {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  type: "carousel" | "static";
  // carousel
  screens?: ReactNode[];
  labels?: string[];
  // static
  screen?: ReactNode;
}

const features: Feature[] = [
  {
    number: "01",
    title: "Ride together, in sync",
    subtitle: "Group coordination",
    description:
      "Create a group, set a destination, and everyone stays on the same page. Real-time location sharing, ETA updates, and regrouping alerts — no more scattered texts asking \"where are you?\"",
    accent: "#FF6600",
    type: "carousel",
    screens: [<GroupOverviewScreen key="overview" />, <MembersScreen key="members" />, <RidesScreen key="rides" />, <MapScreen key="map" />],
    labels: ["Overview", "Members", "Rides", "Map"],
  },
  {
    number: "02",
    title: "Routes that make sense",
    subtitle: "Smart routing",
    description:
      "Plan rides with stops, fuel breaks, and scenic detours baked in. Share routes with your group instantly — everyone rides the same path, no wrong turns, no one left behind.",
    accent: "#3B82F6",
    type: "static",
    screen: <MapScreen />,
  },
  {
    number: "03",
    title: "Discover new groups",
    subtitle: "Community & people",
    description:
      "Find riding groups near you, join open communities, or invite friends to build your own crew. AccelRyde makes it easy to discover riders who share your routes, your schedule, and your vibe.",
    accent: "#FF6600",
    type: "static",
    screen: <DiscoverGroupsScreen />,
  },
  {
    number: "04",
    title: "One thread, every ride",
    subtitle: "Group messaging",
    description:
      "Built-in group chat that lives with your ride. Share photos, voice notes, and pins without switching apps. Your ride history and conversations stay together — everything in context.",
    accent: "#3B82F6",
    type: "static",
    screen: <ChatScreen />,
  },
  {
    number: "05",
    title: "Less apps, more experience",
    subtitle: "Everything unified",
    description:
      "Stop juggling WhatsApp for chat, Google Maps for routes, and spreadsheets for plans. AccelRyde replaces the patchwork with one app — and keeps your complete ride history so every mile counts.",
    accent: "#FF6600",
    type: "static",
    screen: <RideDetailsScreen />,
  },
];

/* ------------------------------------------------------------------ */
/*  Feature card with scroll reveal                                    */
/* ------------------------------------------------------------------ */

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in-up");
          el.style.opacity = "1";
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="opacity-0 grid md:grid-cols-2 gap-12 md:gap-20 items-center py-20 md:py-32"
    >
      {/* Number + content */}
      <div className={`space-y-6 ${isEven ? "" : "md:order-2"}`}>
        <div className="flex items-center gap-4">
          <span
            className="text-7xl md:text-8xl font-black tracking-tighter leading-none"
            style={{ color: feature.accent, opacity: 0.15 }}
          >
            {feature.number}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {feature.subtitle}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
          {feature.title}
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
          {feature.description}
        </p>
      </div>

      {/* Phone: carousel or static */}
      <div className={`${isEven ? "" : "md:order-1"}`}>
        {feature.type === "carousel" && feature.screens && feature.labels ? (
          <PhoneCarousel
            screens={feature.screens}
            labels={feature.labels}
            accent={feature.accent}
          />
        ) : (
          <PhoneFrame screen={feature.screen} accent={feature.accent} />
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Features section                                                   */
/* ------------------------------------------------------------------ */

export default function Features() {
  return (
    <section id="product" className="relative">
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            The Product
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Built for riders, not commuters
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Five pillars that replace the patchwork of apps you use today.
          </p>
        </div>

        <div className="divide-y divide-divide">
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
