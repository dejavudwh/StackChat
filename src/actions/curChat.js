export const updateCharBar = () => ({
  type: 'UPDATE_CHATBAR',
  dest: '',
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
  dispatch(updateCharBar())
}
export const socketCharMessage = () => ({

})
