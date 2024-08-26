var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

const N = parseInt(input[0]);
const broken = input[2] ? new Set(input[2].split(" ")) : new Set();

function canMake(num) {
  if (num === 0) return !broken.has("0") ? 1 : 0;
  let len = 0;
  while (num > 0) {
    if (broken.has(String(num % 10))) return 0;
    len++;
    num = Math.floor(num / 10);
  }
  return len;
}

let answer = Math.abs(N - 100); // +/- 버튼만 사용하는 경우

for (let i = 0; i <= 1000000; i++) {
  const len = canMake(i);
  if (len > 0) {
    const press = len + Math.abs(i - N);
    answer = Math.min(answer, press);
  }
}

console.log(answer);
