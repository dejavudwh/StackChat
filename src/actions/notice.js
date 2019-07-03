const { dialog } = require('electron').remote

export const newMessage = value => ({
  type: 'NEW_MESSAGE',
  value,
})

export const waitNotice = () => (dispatch, getState) => {
  setTimeout(() => {
    const socket = getState().connect.socket
    if (socket === null) {
      dialog.showMessageBox({
        title: '提示',
        message: 'Server error',
      })
    } else {
      console.log('socket', socket)
      socket.on('add_friend_request', (data) => {
        const message = JSON.parse(data).message
        dispatch(newMessage(message))
      })
    }
  }, 5000)
}
