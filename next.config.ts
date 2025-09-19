import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    compiler: {
        emotion: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
