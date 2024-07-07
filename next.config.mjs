/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            // Basic redirect
            {
                source: '/data',
                destination: '/space',
                permanent: true,
            }
        ]
    },
};

export default nextConfig;
