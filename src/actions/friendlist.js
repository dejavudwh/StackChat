export const updateList = value => ({
  type: 'UPDATE_FRIEND_LIST',
  value,
})

export const socketFriends = () => (dispatch, getState) => {
  setTimeout(() => {
    const email = getState().login.email
    const socket = getState().connect.socket
    socket.emit('get_friend_list', { email })
    console.log('client get friend list')
    socket.on('obtain_friend_list', (data) => {
      console.log(data)
      dispatch(updateList(data))
    })
  }, 500)
}
