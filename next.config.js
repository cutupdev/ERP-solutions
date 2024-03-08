/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'erpnext.com',
            },
            {
                protocol: 'https',
                hostname: 'clickup.com',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
        ],
    },
};

module.exports = nextConfig;
