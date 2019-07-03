const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const cors = require('cors')
const bodyParser = require('body-parser')
const { signin, signup } = require('./service/router')
const socketService = require('./service/socketService')

app.use(bodyParser.json())
app.use(cors())

app.post(signin.router, signin.func)

app.post(signup.router, signup.func)

io.on('connection', (socket) => {
  socketService(socket)
})

http.listen(8008, () => {
  console.log('listening on *:8008')
})

module.exports = app
