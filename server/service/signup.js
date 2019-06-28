const addUser = require('../dao/addUser')

const SignUp = function({username, email, password}) {
  // Todo validate
  console.log('ready sign up', username, email, password);
  addUser(username, email, password);
}

module.exports = SignUp;