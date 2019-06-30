const express = require('express')
const fs = require('fs')
const cors = require('cors')
const bodyParser = require('body-parser')
const SignUp = require('./service/signup')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (res, req) => {
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) throw err
    req.send(data)
  })
})

app.post('/api/validate', (res, req) => {

})

app.post('/api/signup', (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }
  SignUp(user)
  res.send(JSON.stringify(user))
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
