const initialState = {
  list: [
    '',
  ],
}

const updateFriendList = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }
  if (action.type === 'UPDATE_FRIEND_LIST') {
    return Object.assign({}, state, {
      list: action.value,
    })
  }
  return state
}

export default updateFriendList
