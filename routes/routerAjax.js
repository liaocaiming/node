var models = require("../models/index")
function routerAjax(app) {
  // 获取购物车列表的数据
  app.get("/get-all-roduct-by-cart", function (req, res, next) {
    models.getAllProductByCart(function(db, result) {
      res.send(result);
      db.close();
    })
  })

  app.post("/use-login", function (req, res, next) {
    models.login(req.body, function (db, result) {
      console.log(result, "resu")
      if (result.length == 0) {
        res.send({
          Code: 1,
          msg: "用户名不存在或者密码错误"
        })
      } else {
        res.send({
          code: 0,
          msg: "sucess"
        })
      }
      db.close();
    })
  })
}
module.exports = routerAjax;
