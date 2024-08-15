const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let a = input[0];
let b = input[1];
let str = ''
str = a.replaceAll(' ', '')
str += b.replaceAll(' ', '')
console.log(str);