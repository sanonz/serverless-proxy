// const url = require('url');
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (req, res) => {
  // const params = url.parse(decodeURI(req.url.replace(/^\/proxy/, '')));

  let target = '';

  if (req.url.startsWith('/proxy')) {
    target = 'http://123.207.118.193:3000';
  }

  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite : {
      '^/proxy/': '/'
    }
  })(req, res);
};
