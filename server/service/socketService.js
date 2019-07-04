const saveSocket = require('./handleSocket').saveSocket
const sendFriendRequest = require('./friend').sendFriendRequest
const deleteSocket = require('./handleSocket').deleteSocket

function socketService(socket) {
  saveSocket(socket)

  socket.on('add_friend', (addInfo) => {
    sendFriendRequest(addInfo, socket)
  })

  socket.on('add_friend_response', (data) => {
    console.log(data)
  })

  socket.on('will_close', (closeUser) => {
    deleteSocket(closeUser)
  })

  socket.on('disconnect', (reason) => {
    console.log('a user disconnect:', reason)
  })
}

module.exports = socketService
