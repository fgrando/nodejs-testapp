const {readFile} = require('fs');
const {promisify} = require('util');

// readFile('./callback.js','utf8', (err, data) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })


const read = promisify(readFile);
read('./callback.js', 'utf8')
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));