/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www3.animeflv.net',
            port: '',
          },
        ],
      },
};

export default nextConfig;
