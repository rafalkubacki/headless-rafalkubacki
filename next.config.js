/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA(
  nextTranslate({
    reactStrictMode: true,
    images: {
      domains: ["cdn.sanity.io"],
    },
    optimization: {
      mergeDuplicateChunks: true,
    },
    pwa: {
      disable: process.env.NODE_ENV === "development",
      dest: "public",
      runtimeCaching,
    },
  })
);
