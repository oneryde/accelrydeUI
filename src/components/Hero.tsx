import GradientMesh from "./GradientMesh";
import StoreBadges from "./StoreBadges";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GradientMesh />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20 text-center">
        {/* Pill badge */}
        <div className="opacity-0 animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#27272A] bg-[#18181B]/60 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-[#FF6600] animate-pulse" />
          <span className="text-xs font-medium text-[#A1A1AA] tracking-wide uppercase">
            Beta launching soon
          </span>
        </div>

        {/* Headline */}
        <h1 className="opacity-0 animate-fade-in-up animation-delay-100 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
          <span className="text-[#FAFAFA]">One place for</span>
          <br />
          <span className="bg-gradient-to-r from-[#FF6600] via-[#FF8533] to-[#FF6600] bg-clip-text text-transparent">
            the ride
          </span>
        </h1>

        {/* Subheadline */}
        <p className="opacity-0 animate-fade-in-up animation-delay-200 text-lg sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto mb-10 leading-relaxed">
          AccelRyde brings your group, your routes, and your favorite spots into
          one app — so you spend less time coordinating and more time riding.
        </p>

        {/* CTAs */}
        <div className="opacity-0 animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#product"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF6600] text-white font-semibold hover:bg-[#E65C00] transition-all hover:shadow-[0_0_30px_rgba(255,102,0,0.3)]"
          >
            Explore the product
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
          <a
            href="https://qafuavp1bg.zite.so"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#27272A] text-[#FAFAFA] font-semibold hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all"
          >
            Join our founding team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        {/* Store badges */}
        <div className="opacity-0 animate-fade-in-up animation-delay-400">
          <StoreBadges />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090B] to-transparent pointer-events-none" />
    </section>
  );
}
