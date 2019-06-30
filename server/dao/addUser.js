const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/stackchat'

function addUser(username, email, password) {
  const user = {
    username,
    email,
    password,
  }
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      console.log('mongodb connect failed')
    }
    const dbo = db.db('stackchat')
    console.log('into add')
    dbo.collection('user').insertOne(user, (insertError) => {
      if (insertError) {
        console.log('insert failed')
      }
      console.log('insert success')
      db.close()
    })
  })
}

module.exports = addUser
