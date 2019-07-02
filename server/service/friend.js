const mongonConnect = require('../dao/connect')
const {
  USER_NO_EXIST_MESSAGE, ADD_FRIEND_FAILED_MESSAGE, USER_NO_EXIST, ADD_FRIEND_FAILED, ADD_FRIEND_SUCCESS, ADD_FRIEND_SUCCESS_MESSAGE,
} = require('../dao/constantInfo')
const { findFriend, addFriend } = require('../dao/operFriend')


function addFriendService({ origin, dest }, response) {
  mongonConnect
    .then(db => findFriend(db, { origin, dest }))
    .then(db => addFriend(db, { origin, dest }))
    .then((message) => {
      if (message === ADD_FRIEND_SUCCESS) {
        response.send(ADD_FRIEND_SUCCESS_MESSAGE)
      }
    })
    .catch((message) => {
      if (message === USER_NO_EXIST) {
        response.send(USER_NO_EXIST_MESSAGE)
      } else if (message === ADD_FRIEND_FAILED) {
        response.send(ADD_FRIEND_FAILED_MESSAGE)
      }
    })
}

module.exports.addFriend = addFriendService
