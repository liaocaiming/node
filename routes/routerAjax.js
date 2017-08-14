function routerAjax(app) {
  app.get("/home-ajax", function (req, res, next) {
    res.send({
      title: 66666
    })
  })
}
module.exports = routerAjax;
