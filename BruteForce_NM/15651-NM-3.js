var fs = require("fs");

var [N, M] = fs.readFileSync("input.txt", "utf-8").split(" ").map(Number);

let result = [];
function solution(seq) {
  if (seq.length === M) {
    result.push(seq.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    solution([...seq, i]);
  }
}

solution([]);
console.log(result.join("\n"));
