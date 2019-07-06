const initialState = {
  friendList: [

  ],
}

const updateFriendList = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }
  if (action.type === 'UPDATE_FRIEND_LIST') {
    return Object.assign({}, state, {
      friendList: action.value,
    })
  }
}

export default updateFriendList
