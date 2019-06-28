const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/stackchat";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  var dbo = db.db("stackchat");
  var myobj = [
    { username: "菜鸟", password: "hu123456", email: "3141313@qq.com"},
    { username: "菜鸟", password: "hu123456", email: "3141313@qq.com"},
    { username: "菜鸟", password: "hu123456", email: "3141313@qq.com"},
  ];
  dbo.collection("user").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("文档插入成功");
      db.close();
  });
});
