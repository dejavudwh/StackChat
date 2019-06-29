const initialState = {
    signup: false,
    signupUsername: '',
    signupEmail: '',
    signupPwd: '',
}

const registerChange = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  } else if(action.type === 'SIGNUP_NAME_CHANGE') {
    return Object.assign({}, state, {
        signup: true,
        signupUsername: action.value,
        signupEmail: state.signupEmail,
        signupPwd: state.signupPwd,
    })
  } else if(action.type === 'SIGNUP_EMAIL_CHANGE') {
    return Object.assign({}, state, {
        signup: true,
        signupUsername: state.signupUsername,
        signupEmail: action.value,
        signupPwd: state.signupPwd,
    })
  } else if(action.type === 'SIGNUP_PWD_CHANGE') {
    return Object.assign({}, state, {
        signup: true,
        signupUsername: state.signupUsername,
        signupEmail: state.signupEmail,
        signupPwd: action.value,
    })
  } else if(action.type === 'onSignup') {
    return Object.assign({}, state, {
        signup: true,
        signupUsername: state.signupUsername,
        signupEmail: state.signupEmail,
        signupPwd: state.signupPwd,
    })
  } else if(action.type === 'closeSignup') {
    return Object.assign({}, state, {
        signup: action.sign,
        signupUsername: state.signupUsername,
        signupEmail: state.signupEmail,
        signupPwd: state.signupPwd,
    })
  } else if(action.type === 'SIGNUP_USER_SUCCESS') {
    return Object.assign({}, state, {
        signup: action.sign,
        signupUsername: state.signupUsername,
        signupEmail: state.signupEmail,
        signupPwd: state.signupPwd,
    })
  } else if(action.type === 'SIGNUP_NAME_FAIL') {
    return Object.assign({}, state, {
        signup: action.sign,
        signupUsername: state.signupUsername,
        signupEmail: state.signupEmail,
        signupPwd: state.signupPwd,
    })
  } else if(action.type === 'SIGNUP_SERVER_FAIL') {
    return Object.assign({}, state, {
        signup: action.sign,
        signupUsername: state.signupUsername,
        signupEmail: state.signupEmail,
        signupPwd: state.signupPwd,
    })
  } else {
    return state;
  }
}

export default registerChange;