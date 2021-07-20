const {opendir, stat, open, readFile, writeFile} = require('fs');
const {promisify} = require('util');


const oDir = promisify(opendir);
const getStat = promisify(stat);
const read = promisify(readFile);
const write = promisify(writeFile);

oDir('./')
 .then(async (dir)=>{
    for await(let dirent of dir) {
        console.log(dirent.name);
    };
 })
 .catch();


getStat('./EventEmitter.js')
.then((stat)=>{
    console.log(stat);
})
.catch(err => console.log(err));


// open('./EventEmitter.js', (err, fd) => {
//     if(err) {
//         console.log(err);
//         return;
//     }

//     read(fd, 'utf8')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err));
// });


writeFile('./text.txt', 'Hello from this file', (err) => {
    console.log(err);
})





