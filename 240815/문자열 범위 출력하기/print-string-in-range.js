const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split().toString();
console.log(input.slice(2, 10))