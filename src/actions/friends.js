const { dialog } = require('electron').remote

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
  socket.on('add_friend_response', (data) => {
    const message = JSON.parse(data).message
    dialog.showMessageBox({
      title: '提示',
      message,
    })
  })

  socket.on('add_friend_request', (data) => {
    // const message = JSON.parse(data).message
    console.log(data)
  })
}
