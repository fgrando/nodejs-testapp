/*
types:

read stream
write stream
duplex
*/


const {createReadStream, createWriteStream} = require('fs');

const readStream = createReadStream('./text.txt');
const writeStream = createWriteStream('./text2.txt');

readStream.pipe(writeStream); // THIS IS THE best WAY TO COPY DATA

const {createServer} = require('http');
const server = createServer();

server.listen(5000);

server.on('connection', (socket) => {
    console.log(socket);
})