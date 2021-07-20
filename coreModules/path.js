
const path = require('path');

// global vars:
console.log(__filename);

//console.log(__dirname); // they are not the same. cwd retuns the path of process not the file
//console.log(process.cwd())

const mod = require('./module/mod')


const base = path.basename(__filename);
console.log(base)

const ext = path.extname(__filename);
console.log(ext)


const parse = path.parse(__filename);
console.log(parse)


const joined = path.join('module', 'mod.js');
console.log(joined)

