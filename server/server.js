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

    // socket.emit('newEmail',{
    //     from:'ian@gmail.com',
    //     text:"Hey what is going on",
    //     createdAt:120000
    // });

    // socket.on('createEmail',(newEmail)=>{
    //  console.log('New Email',newEmail); 
    // });

    socket.emit('newMessage',{
       to:'ian@gmail.com',
       text:'What are you upto',
       createdAt:1230
    });

    socket.on('createMessage',(newMessage)=>{
      console.log('You have new message',newMessage);
    });

  socket.on('disconnect',()=>{
      console.log('User is disconnected');
  });
});

server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
