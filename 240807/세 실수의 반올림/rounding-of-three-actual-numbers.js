const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

let a = parseFloat(input[0]);
let b = parseFloat(input[1]);
let c = parseFloat(input[2]);

console.log(a.toFixed(3));
console.log(b.toFixed(3));
console.log(c.toFixed(3));