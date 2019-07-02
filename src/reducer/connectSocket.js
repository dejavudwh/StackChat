const initialState = {
  socket: '',
}

const connectSocket = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }
  if (action.type === 'CONNECT_SOCKET_SUCCESS') {
    return Object.assign({}, state, {
      socket: action.socket,
    })
  }

  return state
}

export default connectSocket
