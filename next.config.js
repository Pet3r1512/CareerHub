/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jlehnhviqykpbhjqjzmp.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/Static%20Images/**",
      },
    ],
  },
};

module.exports = nextConfig;
