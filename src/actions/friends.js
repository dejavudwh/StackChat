import io from 'socket.io-client'

export const addFriendSuccess = () => {

}

export const addFriendFailed = () => {

}

export const searchInputChange = value => ({
  type: 'SEARCH_INPUT_CHANGE',
  value,
})

// const fetchAddFriend = (input) => {
//   const socket = io('http://localhost:8008')
// }

export const addFriend = () => (dispatch, getState) => {
  const socket = io('http://localhost:8008')

  socket.emit('ADD_FRIEND', {
    origin: getState().login.email,
    dest: getState().search.input,
  })
}
