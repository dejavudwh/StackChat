const initialState = {
  dest: '',
  input: '',
  message: [
    {

    },
  ],
}

const changeChatObj = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }
  if (action.type === 'UPDATE_CHATBAR') {
    const message = state.message.concat()
    message.push({ type: action.mesType, dest: action.dest, value: action.value })
    return Object.assign({}, state, {
      message,
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
