import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 bg-background text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
        Page not found
      </h1>
      <p className="mt-3 text-muted-foreground max-w-md text-sm leading-relaxed">
        That URL doesn&apos;t exist on this site. Check the address, or head back
        to the homepage.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
