/**
 *
 * @author Bichi Kim [bichi@pjfactory.com]
 * @copyright (c) PJ Factory Co.
 * @license Private
 */
const WebpackBaseConfig = require('./webpack.base.config')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const WebpackMerge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals');
WebpackBaseConfig.output.libraryTarget = 'umd' // module mode
module.exports = WebpackMerge(WebpackBaseConfig, {
  mode: 'production',
  // externals see https://www.npmjs.com/package/webpack-node-externals
  externals: [nodeExternals()]
})