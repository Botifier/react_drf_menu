const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api/menu', { target: 'http://localhost:8000' }));
};