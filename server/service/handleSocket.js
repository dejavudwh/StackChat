const addFriend = require('./friend').addFriend

const socketArray = []

function handleSocket(socket) {
  const query = socket.handshake.query
  const s = {
    user: query.user,
    socket,
  }
  socketArray.push(s)
  console.log(socketArray)
  socket.on('add_friend', (addInfo) => {
    // console.log(addInfo)
    addFriend(addInfo, socket)
  })
}

module.exports = handleSocket
