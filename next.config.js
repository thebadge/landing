const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin(
  // Specify a custom path here
  "./i18n/index.ts"
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
      {
        protocol: "https",
        hostname: "assets-global.website-files.com",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
