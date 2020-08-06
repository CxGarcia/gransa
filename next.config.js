const withTM = require("next-transpile-modules")(["gsap"]); // pass the modules you would like to see transpiled

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.jsx?$/,
      },
      use: ["@svgr/webpack", "url-loader"],
    });

    withTM();

    return config;
  },
};
