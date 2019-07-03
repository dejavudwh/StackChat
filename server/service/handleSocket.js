const socketArray = []

function deleteSocketFromArray(closeUser) {
  for (let i = 0; i < socketArray.length; i += 1) {
    if (socketArray[i].user === closeUser) {
      socketArray.splice(i, 1)
    }
  }
}

function saveSocket(socket) {
  const query = socket.handshake.query
  const s = {
    user: query.user,
    socket,
  }
  socketArray.push(s)
}

function findSocketFromEmail(email) {
  for (let i = 0; i < socketArray.length; i += 1) {
    if (socketArray[i].user === email) {
      return socketArray[i]
    }
  }

  return null
}

module.exports.saveSocket = saveSocket
module.exports.findSocketFromEmail = findSocketFromEmail
module.exports.deleteSocket = deleteSocketFromArray
