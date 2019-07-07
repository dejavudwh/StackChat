export const updateCharBar = () => ({
  type: 'UPDATE_CHATBAR',
  dest: '',
})

export const changeDestSokcet = dest => ({
  type: 'CHANGE_SOCKET',
  dest,
})

export const changeInput = value => ({
  type: 'CHANGE_CHAT_INPUT',
  value,
})

export const socketCharMessage = () => ({

})
