 const EventEmitter = require('events');
 const eventEmitter = new EventEmitter();

 eventEmitter.on('tony', (num1, num2) =>{
 console.log( num1 + num2)
 });

 eventEmitter.emit('tony', 3,5);
 
  

 