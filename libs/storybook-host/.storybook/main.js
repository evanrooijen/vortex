const rootMain = require('../../../.storybook/main');
const path = require('path');
module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../../ui/**/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    ...rootMain.addons,
    '@nrwl/react/plugins/storybook',
  ],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed

    config.module.rules.push({
      test: /\.css$/,
      use: ["postcss-loader"],
      include: path.resolve(__dirname, "../"),
    });


    return config;
  },
};
