import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Optimized images are static assets here, so cache them for 30 days
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
