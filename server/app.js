const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const cors = require('cors')
const bodyParser = require('body-parser')
const { signin, signup } = require('./service/router')

app.use(bodyParser.json())
app.use(cors())

app.post(signin.router, signin.func)

app.post(signup.router, signup.func)

io.on('connection', (socket) => {
  console.log(socket.id)
  socket.on('news', (data) => {
    console.log(data)
  })
  socket.emit('fu', { sign: 'connect fuck' })
})

http.listen(8008, () => {
  console.log('listening on *:8008')
})

module.exports = app
