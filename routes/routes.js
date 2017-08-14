function routes(app) {
  app.use('/login', function (req, res, next) {
    res.render('login', { title: '微商户助手' });
  });
  app.use('/home', function (req, res, next) {
    res.render('home', { title: '首页' });
  });
}
module.exports = routes;
