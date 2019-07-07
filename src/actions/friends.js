export const addFriendSuccess = () => {

}

export const addFriendFailed = () => {

}

export const searchInputChange = value => ({
  type: 'SEARCH_INPUT_CHANGE',
  value,
})

export const addFriend = () => (dispatch, getState) => {
  const socket = getState().connect.socket

  socket.emit('add_friend', {
    origin: getState().login.email,
    dest: getState().search.input,
  })
}
