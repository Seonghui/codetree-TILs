const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

let a = parseFloat(input[0]);

let b = parseFloat(input[1]);

console.log((a + b).toFixed(2));