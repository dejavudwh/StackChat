const initialState = {
  input: '',
}

const addFriends = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }
  // if (action.type === 'SEARCH_INPUT_CHANGE') {
  //   return Object.assign({}, state, {
  //     input: action.value,
  //   })
  // }
  // return state
  switch (action.type) {
    case 'SEARCH_INPUT_CHANGE':
      return Object.assign({}, state, {
        input: action.value,
      })
    case 'ADD_FRIEND_FAILEDE':
      return state
    default:
      return state
  }
}

module.exports = addFriends
