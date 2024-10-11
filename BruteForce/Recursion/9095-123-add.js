var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

const testCases = input.slice(1).map(Number);

let answers = [];
for (let num of testCases) {
  let dp = new Array(num + 1).fill(0);

  dp[1] = 1;
  if (num >= 2) dp[2] = 2;
  if (num >= 3) dp[3] = 4;

  for (let i = 4; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  answers.push(dp[num]);
}

console.log(answers.join("\n"));
