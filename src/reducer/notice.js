const initialState = {
  originEmail: '',
  message: [
  ],
}

const addNewMessage = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }
  if (action.type === 'NEW_MESSAGE') {
    const message = state.message.concat()
    message.push({ type: 'friend', value: action.value })
    return Object.assign({}, state, {
      originEmail: action.origin,
      message,
    })
  }

  return state
}

export default addNewMessage
