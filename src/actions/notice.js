const { dialog } = require('electron').remote

export const newMessage = value => ({
  type: 'NEW_MESSAGE',
  value,
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
      console.log('listen request')
      socket.on('add_friend_request', (data) => {
        console.log(data)
        const message = data.message
        dispatch(newMessage(message))
      })
    }
  }, 3000)
}
