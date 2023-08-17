/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pinimg.com'],
  },
  i18n,
};
module.exports = nextConfig;
