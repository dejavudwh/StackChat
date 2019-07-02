import io from 'socket.io-client'

export const addFriendSuccess = () => {

}

export const addFriendFailed = () => {

}

export const searchInputChange = value => ({
  type: 'SEARCH_INPUT_CHANGE',
  value,
})

export const addFriend = () => (dispatch, getState) => {
  const socket = io('http://localhost:8008')

  socket.emit('ADD_FRIEND', {
    origin: getState().login.email,
    dest: getState().search.input,
  })

  socket.on('add_friend_event', (data) => {
    console.log(data)
  })
}
