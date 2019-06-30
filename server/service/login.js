const mongonConnect = require('../dao/connect')
const checkRepeatEmail = require('../dao/login').checkRepeatEmail
const addUser = require('../dao/login').addUser

const successMessage = JSON.stringify({
  status: 200,
  Message: 'Operation is successful',
})

const EmailFailedMessage = JSON.stringify({
  status: 400,
  Message: 'Mailbox already exists',
})

function signupForUser(user, response) {
  mongonConnect
    .then(db => checkRepeatEmail(db, user.email))
    .then((db) => {
      addUser(db, user)
      response.send(successMessage)
    })
    .catch((err) => {
      // console.log(err)
      if (err === 'EMAIL_EXISTING') {
        response.send(EmailFailedMessage)
      } else {
        response.send(500)
      }
    })
}

module.exports.signupForUser = signupForUser
