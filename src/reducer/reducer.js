import { combineReducers } from 'redux'
import registerChange from './register'
import loginInfoChange from './login'
import searchFriend from './addFriend'

export default combineReducers({
  register: registerChange,
  login: loginInfoChange,
  search: searchFriend,
})
