const initialState = {
  email: '',
  password: '',
}

const loginInfoChange = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  } if (action.type === 'LOGIN_EMAIL_CHANGE') {
    return Object.assign({}, state, {
      email: action.value,
      password: state.password,
    })
  } if (action.type === 'LOGIN_PWD_CHANGE') {
    return Object.assign({}, state, {
      email: state.email,
      password: action.value,
    })
  }
  return state
}

export default loginInfoChange
