import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/ai-scorecard", destination: "/ai-scorecard.html" },
      { source: "/triage", destination: "/triage.html" },
    ];
  },
};

export default nextConfig;
