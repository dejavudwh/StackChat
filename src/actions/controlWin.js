const { ipcRenderer } = require('electron')

export const closeWindow = () => ({
  type: 'CLOSE_WINDOW',
})

export const minimizeWindow = () => {

}

export const closeSocket = () => (dispatch, getState) => {
  const socket = getState().connect.socket
  const email = getState().login.email
  socket.emit('will_close', email)
  socket.disconnect(true)
  ipcRenderer.send('close_window')
  dispatch(closeWindow())
}
