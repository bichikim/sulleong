const webpackBaseConfig = require('./webpack.base.config')
const webpackMerge = require('webpack-merge')
//  karma test won't ues entry
webpackBaseConfig.entry = null
module.exports = webpackMerge(webpackBaseConfig, {
  /**
   * Test in this project needs development
   * For more info See this
   * @link https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a
   */
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$|\.ts$/,
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: {esModules: true},
        },
        enforce: 'post',
        exclude: /node_modules|\.spec\.js$/,
      },
    ],
  },
})
