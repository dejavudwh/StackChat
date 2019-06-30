import { isCorrectName, isCorrectEmail, isCorrectPwd } from '../static/js/CheckInput'

const { dialog } = require('electron').remote

export const signUpNameChange = value => ({
  type: 'SIGNUP_NAME_CHANGE',
  value,
})

export const signUpEmailChange = value => ({
  type: 'SIGNUP_EMAIL_CHANGE',
  value,
})

export const signUpPwdChange = value => ({
  type: 'SIGNUP_PWD_CHANGE',
  value,
})

export const signUpSuccess = () => ({
  type: 'SIGNUP_USER_SUCCESS',
  sign: false,
})

export const signUpNameFail = () => ({
  type: 'SIGNUP_NAME_FAIL',
  sign: true,
})

export const signUpServerFail = () => ({
  type: 'SIGNUP_SERVER_FAIL',
  sign: true,
})

const fetchSignUp = (username, email, password) => {
  const url = 'http://localhost:8008/api/signup'
  const data = {
    username,
    email,
    password,
  }
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(res => res.json())
}

export const signUpUser = () => (dispatch, getState) => {
  const username = getState().register.signupUsername
  const email = getState().register.signupEmail
  const password = getState().register.signupPwd

  if (!isCorrectName(username) || !isCorrectEmail(email) || !isCorrectPwd(password)) {
    dispatch(signUpNameFail())
  } else {
    fetchSignUp(username, email, password)
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          dispatch(signUpSuccess())
        } else if (response.status === 400) {
          dialog.showMessageBox({
            title: '提示',
            message: response.message,
          })
        }
      })
      .catch(() => {
        dialog.showMessageBox({
          title: '提示',
          message: 'Server error！',
        })
        dispatch(signUpServerFail())
      })
  }
}
