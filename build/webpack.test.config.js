const WebpackBaseConfig = require('./webpack.base.config')
const WebpackMerge = require('webpack-merge')
//  karma test won't ues entry
WebpackBaseConfig.entry = null
module.exports = WebpackMerge(WebpackBaseConfig, {
  devtool: '#inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$|\.ts$/,
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true }
        },
        enforce: 'post',
        exclude: /node_modules|\.spec\.js$/,
      }
    ]
  }
})
