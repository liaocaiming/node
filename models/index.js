var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/wxchat'; // 连接数据库

function connectFn (col, callback) { // 连接数据库的collection
  MongoClient.connect(DB_CONN_STR, function (err, db) {
    var collection = db.collection(col);
    if (err) {
      console.log('Error:' + err);
      return
    }
    callback && callback(collection, db)
  })
}

// 获取购物车数量
function getAllProductByCart(callback) {
  connectFn("cart", function (collection, db) {
    collection.find({}).toArray(function (err, result) {
      if (err) {
        console.log('Error:' + err);
        return
      }
      callback && callback(db, result)
    })
  })
}

// 获取登录信息
function login(parms, callback) {
  MongoClient.connect(DB_CONN_STR, function (err, db) {
    var collection = db.collection('useInfo');
    if (err) {
      console.log('Error:' + err);
      return
    }
    collection.find(parms).toArray(function (err, result) {
      if (err) {
        console.log('Error:' + err);
        return
      }
      callback && callback(db, result)
    })
  })
}
login({ name: "liaocaiming", passWord: "123456"}, function(db, result) {
  console.log(result, 99999)
})

module.exports = {
  getAllProductByCart
}