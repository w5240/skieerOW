'use strict';
const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.base.config');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin')
const port = process.argv.slice(2)[0] || 800 // npm start 3030  默认888
const devConfig = {
  devtool: '#eval-source-map',
  output: {
    filename: 'js/[name].[hash].js',
    // path: path.resolve(__dirname, 'dist'), //只使用 dev-middleware 可以忽略本属性
    publicPath: "/dist"
  },
  plugins: [
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    ...config.commonPluginsConfig,
    new OpenBrowserPlugin({
      url: 'http://localhost:' + port + "/"
    }),
    new LiveReloadPlugin({
      appendScriptTag:true
    })
  ]
};
module.exports = Object.assign(config.baseConfig, devConfig);
