/**
 * @file Defines the Next.js configuration.
 */

// @ts-check

const { withExpo } = require("@expo/next-adapter");

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = withExpo({
  projectRoot: __dirname,
});

module.exports = nextConfig;
