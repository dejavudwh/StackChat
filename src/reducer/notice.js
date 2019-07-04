const initialState = {
  message: [
  ],
}

const addNewMessage = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }
  if (action.type === 'NEW_MESSAGE') {
    const message = state.message.concat()
    console.log('state before', message, message instanceof Array)
    message.push(action.value)
    console.log('state after', message, action.value)
    return Object.assign({}, state, {
      message,
    })
  }

  return state
}

export default addNewMessage
