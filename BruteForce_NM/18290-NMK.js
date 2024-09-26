var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

var [N, M, K] = input[0].split(" ").map(Number);

var board = input.slice(1).map((el) => el.split(" ").map(Number));

let maxSum = -Infinity;
let visited = Array(N)
  .fill()
  .map(() => Array(M).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function canSelect(x, y) {
  if (x < 0 || x >= N || y < 0 || y >= M || visited[x][y]) return false;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < N && ny >= 0 && ny < M && visited[nx][ny]) {
      return false;
    }
  }
  return true;
}

function dfs(count, sum) {
  if (count === K) {
    maxSum = Math.max(maxSum, sum);
    return;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (canSelect(i, j)) {
        visited[i][j] = true;
        dfs(count + 1, sum + board[i][j]);
        visited[i][j] = false;
      }
    }
  }
}

function solution() {
  dfs(0, 0);
  console.log(maxSum);
}

solution();
