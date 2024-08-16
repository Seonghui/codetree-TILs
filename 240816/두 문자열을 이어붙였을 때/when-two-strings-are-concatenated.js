const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let a = input[0];
let b = input[1];
const aStr = a+b
const bStr = b+a
console.log(aStr===bStr);