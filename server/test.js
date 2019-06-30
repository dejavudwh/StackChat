// const mongonConnect = require('./dao/connect')
const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/stackchat'

// mongonConnect.then((db) => {
//   console.log(db.collection('user').find({ username: 'dejavudwh' }))
// })
const email = '1001@qq.com'

MongoClient.connect(url, { useNewUrlParser: true })
  .then(db => (db.db('stackchat').collection('user').findOne({ email })))
  .then(result => console.log(result))
