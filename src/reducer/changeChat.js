const initialState = {
  dest: '',
  input: '',
  message: '',
}

const changeChatObj = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }
  if (action.type === 'UPDATE_CHATBAR') {
    return Object.assign({}, state, {
      message: action.message,
    })
  }
  if (action.type === 'CHANGE_SOCKET') {
    return Object.assign({}, state, {
      dest: action.dest,
    })
  }
  if (action.type === 'CHANGE_CHAT_INPUT') {
    return Object.assign({}, state, {
      input: action.value,
    })
  }
  return state
}

export default changeChatObj
