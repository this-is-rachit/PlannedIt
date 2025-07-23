import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "adorable-roadrunner-186.convex.cloud", protocol: "https" }
    ],
  },
};

export default nextConfig;