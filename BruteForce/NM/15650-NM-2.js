var fs = require("fs");

var [N, M] = fs.readFileSync("input.txt", "utf-8").split(" ").map(Number);

let result = [];
function solution(start, seq) {
  // console.log(seq, "first");
  if (seq.length === M) {
    result.push(seq.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    // console.log(i, seq, "loop start");
    solution(i + 1, [...seq, i]);
    // console.log(i, seq, "loop end");
  }
}

solution(1, []);
console.log(result.join("\n"));
