const { dialog } = require('electron').remote

export const newMessage = data => ({
  type: 'NEW_MESSAGE',
  origin: data.origin,
  value: data.message,
})

export const deleteMessage = () => ({
  type: 'DELETE_MESSAGE',
})

export const waitNotice = () => (dispatch, getState) => {
  setTimeout(() => {
    const socket = getState().connect.socket
    if (socket === undefined) {
      dialog.showMessageBox({
        title: '提示',
        message: 'Server error',
      })
    } else {
      socket.on('add_friend_request', (data) => {
        // const message = data.message
        dispatch(newMessage(data))
      })
      socket.on('add_friend_response', (data) => {
        const res = JSON.parse(data)
        console.log('add_friend_response', res)
        dispatch(newMessage(res))
      })
    }
  }, 1000)
}

export const responseMessage = pick => (dispatch, getState) => {
  const response = {
    pick,
    info: {
      origin: getState().login.email,
      dest: getState().notification.originEmail,
    },
  }
  const socket = getState().connect.socket
  console.log('fuck response add r')
  socket.emit('add_friend_response', response)
}
