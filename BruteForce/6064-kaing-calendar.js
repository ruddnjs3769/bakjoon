var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

const testCases = input.slice(1).map((el) => el.split(" ").map(Number));

const gcd = (a, b) => (a % b ? gcd(b, a % b) : b);
const lcm = (a, b) => (a * b) / gcd(a, b);
let answers = [];
const solution = (n, m, x, y) => {
  x -= 1;
  y -= 1;
  const maxYear = lcm(n, m);
  for (let i = x; i < maxYear; i += n) {
    if (i % m === y) {
      return i + 1;
    }
  }
  return -1;
};

testCases.forEach((el) => {
  const [n, m, x, y] = el;
  answers.push(solution(n, m, x, y));
});
console.log(answers.join("\n"));
