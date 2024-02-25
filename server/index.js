const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const cors = require('cors');

app.use(
    cors({
    origin:"http://localhost:3000",
    methods: ["GET", "POST"]
})); 

const server = http.createServer(app);
const io = socketIo(server);


server.listen(3001, () => {
  console.log('Socket.IO server is running on port 3001');
});