// const mongonConnect = require('./dao/connect')
const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/stackchat'

// mongonConnect.then((db) => {
//   console.log(db.collection('user').find({ username: 'dejavudwh' }))
// })
const email = '1001@qq.com'
const cond = { useremail: '1001@qq.com' }
const update = { $push: { friends: { useremail: '1003@qq.com' } } }

MongoClient.connect(url, { useNewUrlParser: true })
  .then(db => (db.db('stackchat').collection('friend').findOne({ useremail: '1001@qq.com' })))
  .then(result => console.log(result.friends))
