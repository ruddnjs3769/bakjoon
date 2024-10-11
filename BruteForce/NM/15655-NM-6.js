var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const numbs = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = [];
const solution = (start, seq) => {
  if (seq.length === M) {
    answer.push(seq.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    solution(i + 1, [...seq, numbs[i - 1]]);
  }
};

solution(1, []);

console.log(answer.join("\n"));
