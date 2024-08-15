const fs = require("fs");
let items = fs.readFileSync(0).toString().split("\n");
let max = items[0]
let min = items[0]

for (let item of items) {
    if (max.length <= item.length) {
        max = item
        continue
    }
    if (min.length >= item.length) {
        min = item
        continue
    }
}

console.log(max.length - min.length)