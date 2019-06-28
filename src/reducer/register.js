const initialState = {
  signUpForm: {
    signup: false,
    signupUsername: '',
    signupEmail: '',
    signupPwd: '',
  }
}

const registerChange = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  } else if(action.type === 'SIGNUP_NAME_CHANGE') {
    return Object.assign({}, state, {
      signUpForm: {
        signup: true,
        signupUsername: action.value,
        signupEmail: state.signUpForm.signupEmail,
        signupPwd: state.signUpForm.signupPwd,
      },
    })
  } else if(action.type === 'SIGNUP_EMAIL_CHANGE') {
    return Object.assign({}, state, {
      signUpForm: {
        signup: true,
        signupUsername: state.signUpForm.signupUsername,
        signupEmail: action.value,
        signupPwd: state.signUpForm.signupPwd,
      },
    })
  } else if(action.type === 'SIGNUP_PWD_CHANGE') {
    return Object.assign({}, state, {
      signUpForm: {
        signup: true,
        signupUsername: state.signUpForm.signupUsername,
        signupEmail: state.signUpForm.signupEmail,
        signupPwd: action.value,
      },
    })
  } else if(action.type === 'onSignup') {
    return Object.assign({}, state, {
      signUpForm: {
        signup: true,
        signupUsername: state.signUpForm.signupUsername,
        signupEmail: state.signUpForm.signupEmail,
        signupPwd: state.signUpForm.signupPwd,
      },
    })
  } else if(action.type === 'closeSignup') {
    return Object.assign({}, state, {
      signUpForm: {
        signup: action.sign,
        signupUsername: state.signUpForm.signupUsername,
        signupEmail: state.signUpForm.signupEmail,
        signupPwd: state.signUpForm.signupPwd,
      },
    })
  } else if(action.type === 'SIGNUP_USER') {
    return Object.assign({}, state, {
      signUpForm: {
        signup: action.sign,
        signupUsername: state.signUpForm.signupUsername,
        signupEmail: state.signUpForm.signupEmail,
        signupPwd: state.signUpForm.signupPwd,
      },
    })
  }
}

export default registerChange;