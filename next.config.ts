import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

// Pin workspace root when a lockfile exists in a parent directory (e.g. home).
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;
