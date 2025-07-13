import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com","cdn-icons-png.flaticon.com"],
  },
   eslint: {
    ignoreDuringBuilds: true, // 💥 this skips lint errors during build
  },
};

export default nextConfig;
