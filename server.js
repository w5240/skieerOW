'use strict';
const express = require('express')
const proxy = require('http-proxy-middleware');
const path = require('path')
const webpack = require('webpack')
var serveIndex = require('serve-index');
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.dev.config')
const port = process.argv.slice(2)[0] || 801 // npm start 3030  默认888
const publicPath = config.output.publicPath;
const nodeProxy = proxy({
  target: 'http://123.57.16.246:10008',
  changeOrigin: true,
  pathRewrite: {
    '^/api' : '',
  }
});
const app = express()

//这里不使用 webpack-dev-server 的原因 ： 独立Server能够更方便的处理Mock中Post请求以及Prox等问题，自由度更大
const middleware = webpackDevMiddleware(webpack(config), {
  publicPath,
  stats: {
    colors: true
  }
})
app.use(middleware);
app.use('/server', serveIndex(__dirname, { 'icons': true }))
app.use(express.static(path.join(__dirname, publicPath), { index: false }))
const getPage = function (page) {
  const htmlPath = path.join(__dirname, publicPath + '/' + page + '.html');
  var result = "";
  try {
    result = middleware.fileSystem.readFileSync(htmlPath);
  } catch (err) {
    result = err.toString();
  }
  return result;
}
app.get('/other', function (req, res, next) {
  res.write(getPage('other'));
  res.end();
});
app.use('/api/', nodeProxy)
app.use('*', function (req, res, next) {
  res.write(getPage('index'));
  res.end();
});
app.listen(port, function () {
  console.log('Server listening on http://localhost:' + port + ', Ctrl+C to stop')
})
