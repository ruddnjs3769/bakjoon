var fs = require("fs");

var input = parseInt(fs.readFileSync("input.txt", "utf-8").trim());

let count = 0;

let digit = input.toString().length;

// 1 ~ 9 = 9
// 10 ~ 99 = 2 * 90
// 100 ~ 999 = 3 * 900
// 1000 ~ 9999 = 4 * 9000

for (let i = 1; i <= digit; i++) {
  if (i < digit) {
    count += i * 9 * Math.pow(10, i - 1);
  }
  if (i === digit) {
    count += i * (input - Math.pow(10, i - 1) + 1);
  }
}

console.log(count);
