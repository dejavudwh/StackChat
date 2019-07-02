import { combineReducers } from 'redux'
import registerChange from './register'
import loginInfoChange from './login'
import searchFriend from './addFriend'
import connectSocket from './connectSocket'

export default combineReducers({
  register: registerChange,
  login: loginInfoChange,
  search: searchFriend,
  connect: connectSocket,
})
