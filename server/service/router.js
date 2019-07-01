const signupForUser = require('./login').signupForUser
const signinForUser = require('./login').signinForUser

exports.signin = {
  router: '/api/signin',
  func: (req, res) => {
    const user = {
      email: req.body.email,
      password: req.body.password,
    }
    signinForUser(user, res)
  },
}

exports.signup = {
  router: '/api/signup',
  func: (req, res) => {
    const user = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }
    signupForUser(user, res)
  },
}
