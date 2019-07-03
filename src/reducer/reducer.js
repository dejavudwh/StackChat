import { combineReducers } from 'redux'
import registerChange from './register'
import loginInfoChange from './login'
import searchFriend from './addFriend'
import connectSocket from './connectSocket'
import addNewMessage from './notice'

export default combineReducers({
  register: registerChange,
  login: loginInfoChange,
  search: searchFriend,
  connect: connectSocket,
  notification: addNewMessage,
})
