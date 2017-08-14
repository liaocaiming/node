function routes(app) {
  app.use('/', function (req, res, next) {
    res.render('index', { title: '微商户助手' });
    next();
  });
}
module.exports = routes;
