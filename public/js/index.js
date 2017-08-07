let socket = io();

 socket.on('connect',function(){
 console.log('connected to server');
//    socket.emit('createEmail',{     
//     to:'emaple@gmail.com',
//     text:'Hey,This is Adrew', 
//    });

socket.on('newMessage',function(newMessage){
     console.log('new message',newMessage);
 });

 socket.emit('createMessage',{
     from:'ian@gmail.com',
     text:'What are you upto'
  });
});
socket.on('disconnect',function(){
console.log('disconnected from  server');
});


