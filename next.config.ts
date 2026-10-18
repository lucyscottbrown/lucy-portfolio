import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/ai-scorecard", destination: "/ai-scorecard.html" },
      { source: "/triage", destination: "/triage.html" },
      { source: "/what-wine-are-you", destination: "/what-wine-are-you.html" },
    ];
  },
};

export default nextConfig;
