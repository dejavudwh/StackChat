const mongonConnect = require('../dao/connect')
const checkRepeatEmail = require('../dao/login').checkRepeatEmail
const addUser = require('../dao/login').addUser
const verifyPassword = require('../dao/login').verifyPassword
const { SIGNIN_SUCCESS } = require('../dao/constantInfo')
const {
  USER_NO_EXIST, PASSWORD_ERROR, SUCCESS_MESSAGE, EAMIL_FAILED_MESSAGE, SIGNIN_SUCCESS_MESSAGE, USER_NO_EXIST_MESSAGE, PASSWORD_ERROR_MESSAGE,
} = require('../dao/constantInfo')

function signupForUser(user, response) {
  mongonConnect
    .then(db => checkRepeatEmail(db, user.email))
    .then((db) => {
      addUser(db, user)
      response.send(SUCCESS_MESSAGE)
    })
    .catch((err) => {
      if (err === 'EMAIL_EXISTING') {
        response.send(EAMIL_FAILED_MESSAGE)
      } else {
        response.send(500)
      }
    })
}

function signinForUser(user, response) {
  const email = user.email
  const password = user.password

  mongonConnect
    .then(db => verifyPassword(db, email, password))
    .then((message) => {
      if (message === SIGNIN_SUCCESS) {
        response.send(SIGNIN_SUCCESS_MESSAGE)
      }
    })
    .catch((message) => {
      if (message === USER_NO_EXIST) {
        response.send(USER_NO_EXIST_MESSAGE)
      } else if (message === PASSWORD_ERROR) {
        response.send(PASSWORD_ERROR_MESSAGE)
      }
    })
}

module.exports.signupForUser = signupForUser
module.exports.signinForUser = signinForUser
