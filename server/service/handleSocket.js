const addFriend = require('./friend').addFriend

const socketArray = []

function deleteSocketFromArray(closeUser) {
  for (let i = 0; i < socketArray.length; i += 1) {
    if (socketArray[i].user === closeUser) {
      socketArray.splice(i, 1)
    }
  }
}

function handleSocket(socket) {
  const query = socket.handshake.query
  const s = {
    user: query.user,
    socket,
  }
  socketArray.push(s)
  console.log('before', socketArray)
  socket.on('add_friend', (addInfo) => {
    // console.log(addInfo)
    addFriend(addInfo, socket)
  })

  socket.on('will_close', (closeUser) => {
    console.log(closeUser)
    deleteSocketFromArray(closeUser)
    console.log('after', socketArray)
  })

  socket.on('disconnect', (reason) => {
    console.log('after', socketArray)
  })
}

module.exports = handleSocket
