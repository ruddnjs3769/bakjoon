var fs = require("fs");

var input = fs
  .readFileSync("input.txt", "utf-8")
  .trim()
  .split("\n")
  .map(Number);

const total = input.reduce((acc, cur) => acc + cur, 0);
const targetSum = total - 100;

let flag = false;
for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] + input[j] === targetSum) {
      input.splice(j, 1);
      input.splice(i, 1);
      flag = true;
      break;
    }
  }
  if (flag) break;
}

input.sort((a, b) => a - b);

console.log(input.join("\n"));
