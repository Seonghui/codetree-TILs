const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");
const first = input[0].split(' ');

let a = first[0];

let b = first[1];

let c = input[1];

console.log(`${a} ${b} ${c}`);