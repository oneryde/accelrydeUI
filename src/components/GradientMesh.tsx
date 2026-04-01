"use client";

export default function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, #FF6600 0%, transparent 70%)",
          animation: "mesh-drift 20s ease-in-out infinite",
          opacity: "var(--opacity-mesh-orange)",
        }}
      />
      <div
        className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
          animation: "mesh-drift 25s ease-in-out infinite reverse",
          opacity: "var(--opacity-mesh-blue)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          opacity: "var(--opacity-mesh-noise)",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}
