const { ipcRenderer } = require('electron')

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
  if (action.type === 'CLOSE_WINDOW') {
    ipcRenderer.send('close_window')
    return {}
  }

  return state
}

export default connectSocket
