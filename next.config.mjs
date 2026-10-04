/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/es',
        permanent: true,
      },
      {
        source: '/es/undefined',
        destination: '/es/cookie-settings',
        permanent: true,
      },
      {
        source: '/en/undefined',
        destination: '/en/cookie-settings',
        permanent: true,
      },
      {
        source: '/fr/undefined',
        destination: '/fr/cookie-settings',
        permanent: true,
      },
      {
        source: '/zh-Hant/undefined',
        destination: '/zh-Hant/cookie-settings',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
