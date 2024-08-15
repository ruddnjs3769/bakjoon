// 1037 - 약수

var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

var findN = () => {
  let N = 0;
  const divisors = [...input[1].split(" ")].map(Number);
  divisors.sort((a, b) => {
    return a - b;
  });
  console.log(divisors);
  N =
    divisors.length >= 2
      ? divisors[0] * divisors[divisors.length - 1]
      : divisors[0] * divisors[0];
  return N;
};
console.log(findN());
