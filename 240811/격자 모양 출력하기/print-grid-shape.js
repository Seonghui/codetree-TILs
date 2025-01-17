const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let [n, m] = input[0].split(' ').map(Number);

let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));

for (let i = 1; i <= m; i++) {
    const [r, c] = input[i].split(' ').map(Number);
    arr2d[r - 1][c - 1] = r * c;
}

for (let row of arr2d) {
    console.log(row.join(' '))
}