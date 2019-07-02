const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const cors = require('cors')
const bodyParser = require('body-parser')
const { signin, signup } = require('./service/router')

const { addFriend } = this.require('./service/friend')

app.use(bodyParser.json())
app.use(cors())

app.post(signin.router, signin.func)

app.post(signup.router, signup.func)

const socketArray = []

io.on('connection', (socket) => {
  socketArray.push(socket)
  console.log(socketArray.length)
  socket.on('ADD_FRIEND', (addInfo) => {
    console.log(addInfo)
    addFriend(addInfo)
  })
})

http.listen(8008, () => {
  console.log('listening on *:8008')
})

module.exports = app
