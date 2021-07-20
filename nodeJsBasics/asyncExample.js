const {pbkdf2} = require('crypto');

const start = Date.now();

// some things are executed in background

pbkdf2('password', 'mySecret', 100000, 1000, 'sha256', ()=>{
    console.log('done', Date.now() - start);
});

console.log("I will be called first", Date.now() - start)