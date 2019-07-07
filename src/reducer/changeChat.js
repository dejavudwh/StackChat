const initialState = {
  dest: '',
  message: '',
}

const changeChatObj = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }
  if (action.type === 'UPDATE_CHATBAR') {
    return Object.assign({}, state, {
      dest: action.dest,
      message: action.message,
    })
  }
  return state
}

export default changeChatObj
