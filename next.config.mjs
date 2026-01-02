/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'standalone', // Disabled to support custom server.js // Removed to support standard 'next start' on Azure
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
