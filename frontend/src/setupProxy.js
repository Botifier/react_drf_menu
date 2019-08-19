const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api/menu', { target: process.env.DOCKERIZED ? 'http://backend:8000/':'http://localhost:8000' }));
};