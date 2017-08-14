function routerAjax(app) {
  app.get("/home-ajax", function (req, res, next) {
    console.log(888)
    res.send({
      title: 66666
    })
  })
}
module.exports = routerAjax;
