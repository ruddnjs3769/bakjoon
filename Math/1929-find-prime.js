// 1929 - 소수 구하기

var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").split(" ").map(Number);

const first = input[0];
const second = input[1];
// 1000이하의 소수 구해놓기.
let arr = Array(1000001).fill(true);

arr[0] = false;
arr[1] = false;

for (let i = 2; i * i <= 1000000; i++) {
  if (arr[i]) {
    for (let j = i * i; j <= 1000000; j += i) {
      arr[j] = false;
    }
  }
}

let ansArr = [];
for (let i = first; i <= second; i++) {
  if (arr[i]) {
    ansArr.push(i);
  }
}

console.log(ansArr);
