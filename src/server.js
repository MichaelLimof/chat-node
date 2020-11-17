const express = require('express')
const path = require('path')
const http = require('http')
const socketIO = require('socket.io')

///Obtendo o front HTML
const publicPath = path.join(__dirname, './public')

const port = process.env.PORT || 3332

const app = express()

///Criando um servidor secundario
const server = http.createServer(app)

///Instanciando o SocketIO
const io = socketIO(server)

///Integrando o front estatico em HTML
app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log("A user just connected")

    socket.on('disconnect', (socket) => {
        console.log("A user was disconnected")
    })
})



server.listen(port)



