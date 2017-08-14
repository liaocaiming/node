var models = require("../models/index")
function routerAjax(app) {
  app.get("/get-all-roduct-by-cart", function (req, res, next) {
    models.getAllProductByCart(function(db, result) {
      res.send(result);
      db.close();
    })
  })
}
module.exports = routerAjax;
