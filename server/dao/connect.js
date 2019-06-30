const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const mongonConnect = MongoClient.connect(url, { useNewUrlParser: true })
  .then(db => db.db('stackchat'))

module.exports = mongonConnect
