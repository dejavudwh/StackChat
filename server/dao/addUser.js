const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/stackchat";

const addUser = function(username, email, password) {
  const user = {
    username : username,
    email: email,
    password: password,
  };
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("stackchat");
    console.log("into add");
    dbo.collection("user").insertOne(user, function(err, res) {
        if (err) {
          console.log("mongodb connect failed");
        };
        console.log("insert success");
    });
  });
}

module.exports = addUser;