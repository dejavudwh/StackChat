const mongonConnect = require('../dao/connect')
const {
  USER_NO_EXIST_MESSAGE, ADD_FRIEND_FAILED_MESSAGE, USER_NO_EXIST, ADD_FRIEND_FAILED, ADD_FRIEND_SUCCESS, ADD_FRIEND_SUCCESS_MESSAGE,
} = require('../dao/constantInfo')
const findFriend = require('../dao/operFriend').findFriend
const addFriend = require('../dao/operFriend').addFriend
const findSocketFromEmail = require('./handleSocket').findSocketFromEmail

function addFriendService({ origin, dest }, socket) {
  mongonConnect
    .then(db => findFriend(db, dest))
    .then(db => addFriend(db, { origin, dest }))
    .then((message) => {
      console.log('mes', message)
      if (message === ADD_FRIEND_SUCCESS) {
        socket.emit('add_friend_response', ADD_FRIEND_SUCCESS_MESSAGE)
      }
    })
    .catch((message) => {
      if (message === USER_NO_EXIST) {
        socket.emit('add_friend_response', USER_NO_EXIST_MESSAGE)
      } else if (message === ADD_FRIEND_FAILED) {
        socket.emit('add_friend_response', ADD_FRIEND_FAILED_MESSAGE)
      }
    })
}

function sendFriendRequest({ origin, dest }, socket) {
  mongonConnect
    .then(db => findFriend(db, dest))
    .then(() => {
      const destUser = findSocketFromEmail(dest)
      console.log(destUser)
      const mr = {
        message: `Friend add request from ${origin}`,
      }
      destUser.socket.emit('add_friend_request', mr)
    })
    .catch((message) => {
      console.log(message)
      if (message === USER_NO_EXIST) {
        socket.emit('add_friend_response', USER_NO_EXIST_MESSAGE)
      } else if (message === ADD_FRIEND_FAILED) {
        socket.emit('add_friend_response', ADD_FRIEND_FAILED_MESSAGE)
      }
    })
}

module.exports.addFriend = addFriendService
module.exports.sendFriendRequest = sendFriendRequest
