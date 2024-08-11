const fs = require("fs");
let arr = fs.readFileSync(0).toString().split(" ");
let n = Number(arr[0]);
let m = Number(arr[1]);
let answer = Array.from(Array(n), () => Array(m).fill(0));

let count = 1;

for (let startCol = 0; startCol < m; startCol++) {
    let currRow = 0;
    let currCol = startCol;


    while (currCol >= 0 && currRow < n) {
        answer[currRow][currCol] = count;

        // 변수 업데이트 :
        currRow++;
        currCol--;
        count++;
    }
}

for (let startRow = 1; startRow < n; startRow++) {
    let currRow = startRow;
    let currCol = m - 1;

    while (currCol >= 0 && currRow < n) {
        answer[currRow][currCol] = count;

        // 변수 업데이트 :
        currRow++;
        currCol--;
        count++;
    }
}

for (let row of answer) {
    let str = "";
    for (let elem of row) {
        str += elem + " ";
    }
    console.log(str);
}