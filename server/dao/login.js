const {
  EMAIL_EXISTING, USER_NO_EXIST, PASSWORD_ERROR, SIGNIN_SUCCESS,
} = require('./constantInfo')

function addUser(database, user) {
  database.collection('user').insertOne(user)
}

function checkRepeatEmail(database, email) {
  return database.collection('user').findOne({ email })
    .then(user => new Promise((resolve, reject) => {
      if (user.email === email) {
        reject(EMAIL_EXISTING)
      } else {
        resolve(database)
      }
    }))
}

function verifyPassword(database, email, password) {
  return database.collection('user').findOne({ email })
    .then(user => new Promise((resolve, reject) => {
      if (user.email === undefined) {
        reject(USER_NO_EXIST)
      } else if (user.password !== password) {
        reject(PASSWORD_ERROR)
      } else {
        resolve(SIGNIN_SUCCESS)
      }
    }))
}

module.exports.addUser = addUser
module.exports.checkRepeatEmail = checkRepeatEmail
module.exports.verifyPassword = verifyPassword
