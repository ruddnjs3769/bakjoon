var fs = require("fs");

var [N, M] = fs.readFileSync("input.txt", "utf-8").split(" ").map(Number);

const visited = Array(N + 1).fill(false);

let result = [];
function solution(seq) {
  if (seq.length === M) {
    result.push(seq.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      solution([...seq, i]);
      visited[i] = false;
    }
  }
}

solution([]);
console.log(result.join("\n"));
