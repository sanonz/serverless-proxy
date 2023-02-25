const url = require('url');
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (req, res) => {
  const params = url.parse(decodeURIComponent(req.url.replace(/^\/proxy\//, '')));

  let target = '';

  if (req.url.startsWith('/proxy') && params.host) {
    target = `${params.protocol}//${params.host}`;
    req.url = params.pathname;
  }

  createProxyMiddleware({target, changeOrigin: true})(req, res);
};
