const {pbkdf2} = require('crypto');

const start = Date.now();

const hash = () => {
    pbkdf2('myPass', 'crazysalt', 10000, 1000, 'sha256', () => {
        console.log('Hash',Date.now() - start)
    });
};

hash();
hash();
hash();
hash();

// libuv has 4 threads. uncomment the following line to see this difference
// hash();

console.log('hello');