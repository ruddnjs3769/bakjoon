// 17425 - 약수의 합

var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");
var testCases = input.splice(1, input.length - 1).map(Number);

var maxN = Math.max(...testCases);

var f = Array(maxN + 1).fill(0);
var g = Array(maxN + 1).fill(0);

for (let i = 1; i <= maxN; i++) {
  for (let j = i; j <= maxN; j += i) {
    f[j] += i;
  }
}

for (let i = 1; i <= maxN; i++) {
  g[i] = g[i - 1] + f[i];
}

const answer = testCases.map((testCase) => g[testCase]);
console.log(answer.join("\n"));

// 개어렵다..
