const saveSocket = require('./handleSocket').saveSocket
const sendFriendRequest = require('./friend').sendFriendRequest
const addFriend = require('./friend').addFriend
const obtainFriendList = require('./friend').obtainFriendList
const forwardedMessage = require('./friend').forwardedMessage
const deleteSocket = require('./handleSocket').deleteSocket
const findSocketFromEmail = require('./handleSocket').findSocketFromEmail
const { ADD_FRIEND_BE_REJECTET } = require('../dao/constantInfo')

function socketService(socket) {
  saveSocket(socket)

  socket.on('add_friend', (addInfo) => {
    sendFriendRequest(addInfo, socket)
  })

  socket.on('add_friend_response', (data) => {
    const desk = findSocketFromEmail(data.info.dest)
    if (data.pick) {
      addFriend(data.info.origin, data.info.dest, desk.socket)
    } else {
      desk.socket.emit('add_friend_response', ADD_FRIEND_BE_REJECTET)
    }
  })

  socket.on('get_friend_list', (data) => {
    obtainFriendList(data.email, socket)
  })

  socket.on('send_message', (data) => {
    console.log(data)
    forwardedMessage(data)
  })

  socket.on('will_close', (closeUser) => {
    deleteSocket(closeUser)
  })

  socket.on('disconnect', (reason) => {
    console.log('a user disconnect:', reason)
  })
}

module.exports = socketService
