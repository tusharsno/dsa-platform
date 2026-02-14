import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // stop typecheck errors from failing production builds
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
