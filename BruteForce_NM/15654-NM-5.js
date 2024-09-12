var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const numbs = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = [];

let visited = Array(N).fill(false);

const solution = (seq) => {
  if (seq.length === M) {
    answer.push(seq.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      solution([...seq, numbs[i]]);
      visited[i] = false;
    }
  }
};

solution([]);

console.log(answer.join("\n"));
