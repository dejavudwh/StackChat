import { combineReducers } from 'redux'
import registerChange from './register'
import loginInfoChange from './login'

export default combineReducers({
  register: registerChange,
  login: loginInfoChange,
})
