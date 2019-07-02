const mongonConnect = require('../dao/connect')
const {
  USER_NO_EXIST_MESSAGE, ADD_FRIEND_FAILED_MESSAGE, USER_NO_EXIST, ADD_FRIEND_FAILED, ADD_FRIEND_SUCCESS, ADD_FRIEND_SUCCESS_MESSAGE,
} = require('../dao/constantInfo')
const findFriend = require('../dao/operFriend').findFriend
const addFriend = require('../dao/operFriend').addFriend
const { addFriendEvent } = require('./socketEvent')

function addFriendService({ origin, dest }, socket) {
  mongonConnect
    .then(db => findFriend(db, dest))
    .then(db => addFriend(db, { origin, dest }))
    .then((message) => {
      console.log('mes', message)
      if (message === ADD_FRIEND_SUCCESS) {
        socket.emit(addFriendEvent, ADD_FRIEND_SUCCESS_MESSAGE)
      }
    })
    .catch((message) => {
      if (message === USER_NO_EXIST) {
        socket.emit(addFriendEvent, USER_NO_EXIST_MESSAGE)
      } else if (message === ADD_FRIEND_FAILED) {
        socket.emit(addFriendEvent, ADD_FRIEND_FAILED_MESSAGE)
      }
    })
}

module.exports.addFriend = addFriendService
