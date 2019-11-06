// const path = require('path');

module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.stories\.js?$/,
    loaders: [require.resolve("@storybook/source-loader")],
    enforce: "pre"
  });
  
  config.module.rules.push({
    test: /\.(sa|sc|c)ss$/,
    loaders: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
  });

  // Return the altered config
  return config;
};
