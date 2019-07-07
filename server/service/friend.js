const mongonConnect = require('../dao/connect')
const {
  USER_NO_EXIST_MESSAGE, ADD_FRIEND_FAILED_MESSAGE, USER_NO_EXIST, ADD_FRIEND_FAILED, ADD_FRIEND_SUCCESS, ADD_FRIEND_SUCCESS_MESSAGE,
} = require('../dao/constantInfo')
const findFriend = require('../dao/operFriend').findFriend
const addFriend = require('../dao/operFriend').addFriend
const queryFriendList = require('../dao/operFriend').queryFriendList
const findSocketFromEmail = require('./handleSocket').findSocketFromEmail

function addFriendService(origin, dest, socket) {
  mongonConnect
    .then(db => addFriend(db, { origin, dest }))
    .then((message) => {
      console.log('message', message)
      if (message === ADD_FRIEND_SUCCESS) {
        socket.emit('add_friend_response', ADD_FRIEND_SUCCESS_MESSAGE)
      }
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

function sendFriendRequest({ origin, dest }, socket) {
  mongonConnect
    .then(db => findFriend(db, dest))
    .then(() => {
      const destUser = findSocketFromEmail(dest)
      console.log(destUser.user)
      const mr = {
        origin,
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

function obtainFriendList(useremail, socket) {
  mongonConnect
    .then(db => queryFriendList(db, useremail))
    .then((result) => {
      socket.emit('obtain_friend_list', result.friends)
    })
    .catch((err) => {
      console.log(err)
    })
}

function forwardedMessage({ origin, dest, input }) {
  const destUser = findSocketFromEmail(dest)
  if (destUser === null) {
    // TODO
  } else {
    const data = {
      origin,
      message: input,
    }
    destUser.socket.emit('receive_message', data)
  }
}

module.exports.addFriend = addFriendService
module.exports.sendFriendRequest = sendFriendRequest
module.exports.obtainFriendList = obtainFriendList
module.exports.forwardedMessage = forwardedMessage
