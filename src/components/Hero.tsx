import GradientMesh from "./GradientMesh";
import StoreBadges from "./StoreBadges";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GradientMesh />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20 text-center">
        <div className="opacity-0 animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card shadow-sm backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
            Beta launching soon
          </span>
        </div>

        <h1 className="opacity-0 animate-fade-in-up animation-delay-100 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
          <span className="text-foreground">One place for</span>
          <br />
          <span className="bg-gradient-to-r from-accent via-[#FF8533] to-accent bg-clip-text text-transparent">
            the ride
          </span>
        </h1>

        <p className="opacity-0 animate-fade-in-up animation-delay-200 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          AccelRyde brings your group, your routes, and your favorite spots into
          one app — so you spend less time coordinating and more time riding.
        </p>

        <div className="opacity-0 animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#product"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-semibold hover:bg-accent-hover transition-all hover:shadow-[0_0_30px_rgba(255,102,0,0.3)]"
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-semibold hover:border-secondary hover:text-secondary transition-all"
          >
            Join our founding team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        <div className="opacity-0 animate-fade-in-up animation-delay-400">
          <StoreBadges />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
