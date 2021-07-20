const http = require('http');

const dbConnection = true;

if (!dbConnection) { process.exit(1); };

const server = http.createServer((req, res) => {
    switch(req.url) {
        case '/':
            res.end('<html><head> <title> first node app</title></head> <body>root page</body></html>');
            break;
        case '/user':
            res.end('<html><head> <title> first node app</title></head> <body>user page</body></html>');
            break;
        case '/end':
            res.end('<html><head> <title> first node app</title></head> <body>bye</body></html>');
            process.exit(2);
            break;
        default:
            res.end('<html><head> <title> first node app</title></head> <body>page not found</body></html>');
            break;
    }

});

const port = 5050;
server.listen(port, ()=> {
    console.log(`server is listening on port ${port}`)
});