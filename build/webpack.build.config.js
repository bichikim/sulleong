const webpackBaseConfig = require('./webpack.base.config')
const webpackMerge = require('webpack-merge')
module.exports = webpackMerge(webpackBaseConfig, {
  output: {
    libraryTarget: 'umd',
  },
  mode: 'production',
  /**
   * externals see
   * @link https://www.npmjs.com/package/webpack-node-externals
   */
  externals: {
    externals: {
      lodash: {
        commonjs: 'lodash',
        amd: 'lodash',
        root: '_',
      },
    },
  },
})