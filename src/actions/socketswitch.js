import io from 'socket.io-client'

export const connectSocketSuccess = socket => ({
  type: 'CONNECT_SOCKET_SUCCESS',
  socket,
})

export const connectSocketFailed = socket => ({
  type: 'CONNECT_SOCKET_FAILED',
})
export const disconnectSocket = socket => ({
  type: 'DISCONNECT_SOCKET',
})

export const openSocket = () => (dispatch, getState) => {
  const query = encodeURIComponent(`${getState().login.email}`)
  const url = `http://localhost:8008?user=${query}`
  const socket = io(url)
  socket.on('connect', () => {
    dispatch(connectSocketSuccess(socket))
  })
}

export const closeSocket = () => (dispatch, getState) => {
  // const socket = getState()
}
