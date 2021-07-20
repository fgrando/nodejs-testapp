const {EventEmitter} = require('events');


const myEmitter = new EventEmitter();

// listener
myEmitter.on('greeting', (name) => {
    console.log(`greeting hello to ${name}!`);
})

myEmitter.on('greeting', () => {
    console.log(`hello again`);
})


// emitter
myEmitter.emit('greeting', 'fernando')



const http = require('http');
const server = http.createServer();

// to be executed as the last listener, even if it was assigned earlier
// use the set immediate

server.on('listening', () => {
    setImmediate(()=>{
        console.log('server is listening (first) now');
    })
})

server.on('listening', () => {
    console.log('server still listening (second)');
})




server.listen(3000)

