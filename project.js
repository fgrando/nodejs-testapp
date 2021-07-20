const importedSum = require("./myModule/sum");

var res = importedSum(5, 10);

console.log(res);

const calc = require("./myModule/stuffs");

res = calc.sum(5, 10);
console.log(res);

res = calc.subtract(5, 10);
console.log(res);

const calc2 = require("./myModule2");
console.log(calc2);