import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

// Pin workspace root when a lockfile exists in a parent directory (e.g. home).
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Only needed locally when a parent directory has another lockfile (e.g. home).
  // On Vercel, `VERCEL` is set — omit so file tracing uses the deployment root only.
  ...(process.env.VERCEL ? {} : { outputFileTracingRoot: projectRoot }),
};

export default nextConfig;
