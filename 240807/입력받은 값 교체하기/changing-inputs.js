const fs = require("fs");
let a = fs.readFileSync(0).toString().split(" ");
let n = Number(a[0]);
let m = Number(a[1]);

[n, m] = [m, n]

console.log(`${n} ${m}`)