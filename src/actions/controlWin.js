export const closeWindow = () => ({
  type: 'CLOSE_WINDOW',
})

export const minimizeWindow = () => {

}

export const closeSocket = () => (dispatch, getState) => {
  const socket = getState().connect.socket
  socket.disconnect()
  dispatch(closeWindow())
}
