import { browserHistory } from 'react-router'

const { dialog } = require('electron').remote

export const loginEmailChange = value => ({
  type: 'LOGIN_EMAIL_CHANGE',
  value,
})

export const loginPwdChange = value => ({
  type: 'LOGIN_PWD_CHANGE',
  value,
})

export const signInSuccess = () => ({
  type: 'SIGNIN_USER_SUCCESS',
})

export const signInFail = () => ({
  type: 'SIGNIN_USER_FAIL',
})

const fetchSignIn = (email, password) => {
  const url = 'http://localhost:8008/api/signin'
  const data = {
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

export const signInUser = () => (dispatch, getState) => {
  const email = getState().login.email
  const password = getState().login.password

  fetchSignIn(email, password)
    .then((response) => {
      if (response.status === 200) {
        const path = '/home'
        browserHistory.push(path)
        dispatch(signInSuccess())
      } else if (response.status === 400) {
        dialog.showMessageBox({
          title: '提示',
          message: response.message,
        })
        dispatch(signInFail())
      }
    })
    .catch(() => {
      dialog.showMessageBox({
        title: '提示',
        message: 'Server error',
      })
    })
}
