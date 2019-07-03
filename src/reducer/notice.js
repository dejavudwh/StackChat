const initialState = {
  message: [
    '',
  ],
}

const addNewMessage = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }
  if (action.type === 'NEW_MESSAGE') {
    let message = state.notification.message
    message = message.push(action.value)
    return Object.assign({}, state, {
      message,
    })
  }

  return state
}

export default addNewMessage
