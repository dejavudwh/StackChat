const EMAIL_EXISTING = 'EMAIL_EXISTING'

function addUser(database, user) {
  database.collection('user').insertOne(user)
}

function checkRepeatEmail(database, email) {
  // return new Promise((resolve) => {
  //   const user = database.collection('user').findOne({ email })
  //   console.log('check email', user, email)
  //   if (user.email === email) {
  //     throw new Error(EMAIL_EXISTING)
  //   } else {
  //     resolve(database)
  //   }
  // })
  return database.collection('user').findOne({ email })
    .then(user => new Promise((resolve, reject) => {
      if (user.email === email) {
        reject(EMAIL_EXISTING)
      } else {
        resolve(database)
      }
    }))
}

module.exports.addUser = addUser
module.exports.checkRepeatEmail = checkRepeatEmail
