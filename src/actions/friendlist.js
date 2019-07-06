export const updateList = value => ({
  type: 'UPDATE_FRIEND_LIST',
  value,
})

export const socketFriends = () => (dispatch, getState) => {
  const email = getState().login.email
  const socket = getState().connect.socket
  socket.emit('get_friend_list', { email })
  socket.on('obtain_friend_list', (data) => {
    dispatch(updateList(data))
  })
}
