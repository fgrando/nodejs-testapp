// this is the first thing that runs:

require('dotenv').config()

const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log(`server listen called on port ${process.env.PORT}`);
});

server.on('listening', () => {
    console.log('server is listening');
});