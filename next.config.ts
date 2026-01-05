import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // ESLint 경고는 빌드를 중단하지 않음 (에러만 중단)
  eslint: {
    ignoreDuringBuilds: false, // false로 두고 ESLint 설정에서 경고로 변경
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
