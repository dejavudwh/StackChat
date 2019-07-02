const { USER_NO_EXIST, ADD_FRIEND_FAILED, ADD_FRIEND_SUCCESS } = require('./constantInfo')

function findFriend(database, destEmail) {
  database.collection('user').findOne({ email: destEmail })
    .then(user => new Promise((resolve, reject) => {
      if (user.email === undefined) {
        reject(USER_NO_EXIST)
      } else {
        resolve(database)
      }
    }))
}

function addFriend(database, { origin, dest }) {
  const cond = { useremail: origin }
  const update = { $push: { friends: { useremail: dest } } }
  database.collection('friend').updateOne(cond, update)
    .then(res => new Promise((resolve, reject) => {
      if (res.result.ok === 1) {
        resolve(ADD_FRIEND_SUCCESS)
      } else {
        reject(ADD_FRIEND_FAILED)
      }
    }))
}

module.exports.addFriend = findFriend
module.exports.addFriend = addFriend
