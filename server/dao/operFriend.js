const { USER_NO_EXIST, ADD_FRIEND_FAILED, ADD_FRIEND_SUCCESS } = require('./constantInfo')

function findFriend(database, destEmail) {
  return database.collection('user').findOne({ email: destEmail })
    .then(user => new Promise((resolve, reject) => {
      if (user === null) {
        reject(USER_NO_EXIST)
      } else {
        resolve(database)
      }
    }))
}

function addFriend(database, { origin, dest }) {
  const cond = { useremail: origin }
  const update = { $push: { friends: { useremail: dest } } }
  return database.collection('friend').updateOne(cond, update)
    .then(res => new Promise((resolve, reject) => {
      if (res.result.ok === 1) {
        const cond2 = { useremail: dest }
        const update2 = { $push: { friends: { useremail: origin } } }
        return database.collection('friend').updateOne(cond2, update2)
          .then((seRes) => {
            if (seRes.result.ok === 1) {
              resolve(ADD_FRIEND_SUCCESS)
            } else {
              reject(ADD_FRIEND_FAILED)
            }
          })
      }
      reject(ADD_FRIEND_FAILED)
      return false
    }))
}

function queryFriendList(database, useremail) {
  return database.collection('friend').findOne({ useremail })
}

module.exports.findFriend = findFriend
module.exports.addFriend = addFriend
module.exports.queryFriendList = queryFriendList
