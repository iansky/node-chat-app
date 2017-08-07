const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

let app = express();

const publicPath = path.join(__dirname,'../public');
let server = http.createServer(app);
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));

//server to use with web socket
//access to route 
let io = socketIO(server);


//register eventlisterner
io.on('connection',(socket) =>{
  console.log('New user connected');

  socket.on('disconnect',()=>{
      console.log('User is disconnected');
  });
});

server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
