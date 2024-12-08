// eslint-disable-next-line @typescript-eslint/no-require-imports
const semi = require('@douyinfe/semi-next').default({
  theme: '@semi-bot/semi-theme-dark-theme'
})

const nextConfig = {
  reactStrictMode: false,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: "/api/:path*",
          destination: "http://localhost:3001/api/:path*",
        }],
    };
  }

};

module.exports = semi(nextConfig);
