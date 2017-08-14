function routes(app) {
  app.use('/home', function (req, res, next) {
    res.render('index', { title: '微商户助手' });
  });
}
module.exports = routes;
