var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const numbs = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = [];

const solution = (seq) => {
  if (seq.length === M) {
    answer.push(seq.join(" "));
    return;
  }
  for (let i = 0; i < N; i++) {
    solution([...seq, numbs[i]]);
  }
};

solution([]);
console.log(answer.join("\n"));
