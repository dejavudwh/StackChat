const express = require('express')
const fs = require('fs')
const cors = require('cors')
const bodyParser = require('body-parser')
const signupForUser = require('./service/login').signupForUser
const signinForUser = require('./service/login').signinForUser

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (res, req) => {
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) throw err
    req.send(data)
  })
})

app.post('/api/signin', (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  }
  console.log(user)
  signinForUser(user, res)
})

app.post('/api/signup', (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }
  signupForUser(user, res)
})

app.listen(8008, () => console.log('App listening on port 8008!'))

// var url = 'http://localhost:8008/api/signup';
// var data = {username: 'example', email:'asdadsa2qq.com', password: 'asd'};

// fetch(url, {
//   method: 'POST', // or 'PUT'
//   body: JSON.stringify(data), // data can be `string` or {object}!
//   headers: new Headers({
//     'Content-Type': 'application/json'
//   })
// }).then(res => res.json())
// .catch(error => console.error('Error:', error))
// .then(response => console.log('Success:', response));
