export const updateCharBar = data => ({
  type: 'UPDATE_CHATBAR',
  dest: data.dest,
  value: data.input,
  mesType: data.mesType,
})

export const changeDestSokcet = dest => ({
  type: 'CHANGE_SOCKET',
  dest,
})

export const changeInput = value => ({
  type: 'CHANGE_CHAT_INPUT',
  value,
})

export const sendMessage = () => (dispatch, getState) => {
  const origin = getState().login.email
  const dest = getState().chat.dest
  const input = getState().chat.input
  const socket = getState().connect.socket
  socket.emit('send_message', { origin, dest, input })
  const data = {
    dest,
    input,
    mesType: 'self',
  }
  dispatch(changeInput(''))
  dispatch(updateCharBar(data))
}
export const socketCharMessage = () => (dispatch, getState) => {
  setTimeout(() => {
    const socket = getState().connect.socket

    socket.on('receive_message', (data) => {
      console.log(data)
    })
  }, 500)
}
