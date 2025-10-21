/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN: This will allow builds even if there are TS errors !!
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
