// 1978 - 소수찾기

var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").split("\n");

var inputNums = input[1].split(" ");

// 1000이하의 소수 구해놓기.
let arr = Array(1000).fill(true);

arr[0] = false;
arr[1] = false;

for (let i = 2; i * i <= 1000; i++) {
  if (arr[i]) {
    for (let j = i * i; j <= 1000; j += i) {
      arr[j] = false;
    }
  }
}

const answer = inputNums
  .map((el) => {
    return arr[el];
  })
  .filter((el) => el).length;

console.log(answer);
