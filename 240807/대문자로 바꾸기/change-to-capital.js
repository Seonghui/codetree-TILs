const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

// 2차원 배열을 구현합니다.
let arr2d = [];
const row = 5;
const col = 3;
for (let i = 0; i < row; i++) {
    arr2d.push(input[i].split(" "));
}

for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        arr2d[i][j] = arr2d[i][j].toUpperCase()
    }
    console.log(arr2d[i].join(' '))
}