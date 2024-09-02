var fs = require("fs");

var input = fs
  .readFileSync("input.txt", "utf-8")
  .trim()
  .split("\n")
  .map(Number);

const testLength = input[0];
const testCases = input.slice(1);

const dp = Array(11).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= 10; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

const answer = [];
for (let i = 0; i < testLength; i++) {
  answer.push(dp[testCases[i]]);
}

console.log(answer.join("\n"));
