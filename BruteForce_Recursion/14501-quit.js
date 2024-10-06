var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

const N = parseInt(input[0]);

const TP = input.slice(1).map((el) => el.split(" ").map(Number));

let max = 0;
const solution = (start, cur) => {
  if (start >= N) {
    max = Math.max(max, cur);
    return;
  }

  solution(start + 1, cur);

  const [T, P] = TP[start];
  if (start + T <= N) {
    solution(start + T, cur + P);
  }
};

solution(0, 0);

console.log(max);
