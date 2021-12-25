/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // to enable auto reload on Docker
  // https://github.com/vercel/next.js/issues/6417
  webpackDevMiddleware: (config) => {
    // Solve compiling problem via vagrant
    config.watchOptions = {
      poll: 1000,   // Check for changes every second
      aggregateTimeout: 300,   // delay before rebuilding
    };
    return config;
  }
}
