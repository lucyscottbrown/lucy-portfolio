import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/ai-scorecard", destination: "/ai-scorecard.html" },
    ];
  },
};

export default nextConfig;
