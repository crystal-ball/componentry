/**
 * Extend the default Storybook webpack configs to include project aliases,
 * additional loaders, etc.
 * Ref: https://storybook.js.org/docs/configurations/custom-webpack-config/
 */
module.exports = ({ config /* , mode */ }) => {
  config.module.rules = config.module.rules.concat([
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    },
  ])
  return config
}
