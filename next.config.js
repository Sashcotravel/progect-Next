/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

const withNextIntl = require('next-intl/plugin')(
    './i18n.js'
);

module.exports = withNextIntl(nextConfig)
