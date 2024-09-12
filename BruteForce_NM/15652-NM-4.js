var fs = require("fs");

var [N, M] = fs
  .readFileSync("input.txt", "utf-8")
  .trim()
  .split(" ")
  .map(Number);

let answer = [];

const solution = (start, seq) => {
  if (seq.length === M) {
    answer.push(seq.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    solution(i, [...seq, i]);
  }
};

solution(1, []);
console.log(answer.join("\n"));
