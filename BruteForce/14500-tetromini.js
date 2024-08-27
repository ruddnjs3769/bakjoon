// n x m 크기의 2차원배열에서, 연속된 4개의 수가 가장 큰 경우. (좌우,상하 관계 없음)

var fs = require("fs");
var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

const nm = input[0].split(" ").map(Number);
const n = nm[0];
const m = nm[1];
const board = input.slice(1).map((el) => el.split(" ").map(Number));
let rowMax = 0;
let columnMax = 0;
// 1자로 4개
// 가로
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m - 3; j++) {
    let temp =
      board[i][j] + board[i][j + 1] + board[i][j + 2] + board[i][j + 3];
    if (temp > rowMax) {
      rowMax = temp;
    }
  }
}
// 세로
for (let i = 0; i < n - 3; i++) {
  for (let j = 0; j < m; j++) {
    let temp =
      board[i][j] + board[i + 1][j] + board[i + 2][j] + board[i + 3][j];
    if (temp > columnMax) {
      columnMax = temp;
    }
  }
}
let stickmax = Math.max(rowMax, columnMax);

let sixMax = 0;
// 2 * 3 중 최솟값 2개 빼기
for (let i = 0; i < n - 2; i++) {
  for (let j = 0; j < m - 1; j++) {
    let sixArr = [
      board[i][j],
      board[i + 1][j],
      board[i + 2][j],
      board[i][j + 1],
      board[i + 1][j + 1],
      board[i + 2][j + 1],
    ];
    sum = sixArr.reduce((arr, cur) => arr + cur);
    sixArr.sort((a, b) => a - b);
    // 1열 가운데가 최솟값 중 하나일때
    if (sixArr[0] === board[i + 1][j] || sixArr[1] === board[i + 1][j]) {
      let other = sixArr[0] === board[i + 1][j] ? sixArr[1] : sixArr[0];
      if (
        other !== board[i + 1][j + 1] &&
        other !== board[i][j + 1] &&
        other !== board[i + 2][j + 1]
      ) {
        let temp = sum - sixArr[0] - sixArr[1];
        if (sixMax < temp) {
          sixMax = temp;
        }
      }
    }
    // 2열 가운데가 최솟값 중 하나일때
    if (
      sixArr[0] === board[i + 1][j + 1] ||
      sixArr[1] === board[i + 1][j + 1]
    ) {
      let other = sixArr[0] === board[i + 1][j + 1] ? sixArr[1] : sixArr[0];
      if (
        other !== board[i + 1][j] ||
        (other !== board[i][j] && other !== board[i + 2][j])
      ) {
        let temp = sum - sixArr[0] - sixArr[1];
        if (sixMax < temp) {
          sixMax = temp;
        }
      }
    }
  }
}

// 3 * 2 중 최솟값 2개 빼기
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < m - 2; j++) {
    let sixArr = [
      board[i][j],
      board[i][j + 1],
      board[i][j + 2],
      board[i + 1][j],
      board[i + 1][j + 1],
      board[i + 1][j + 2],
    ];
    sum = sixArr.reduce((arr, cur) => arr + cur);
    sixArr.sort((a, b) => a - b);
    if (sixArr[0] === board[i][j + 1] || sixArr[1] === board[i][j + 1]) {
      let other = sixArr[0] === board[i][j + 1] ? sixArr[1] : sixArr[0];
      if (
        other !== board[i + 1][j + 1] &&
        other !== board[i + 1][j] &&
        other !== board[i + 1][j + 2]
      ) {
        let temp = sum - sixArr[0] - sixArr[1];
        if (sixMax < temp) {
          sixMax = temp;
        }
      }
    }
    if (
      sixArr[0] === board[i + 1][j + 1] ||
      sixArr[1] === board[i + 1][j + 1]
    ) {
      let other = sixArr[0] === board[i + 1][j + 1] ? sixArr[1] : sixArr[0];
      if (
        other !== board[i][j + 1] &&
        other !== board[i][j] &&
        other !== board[i][j + 2]
      ) {
        let temp = sum - sixArr[0] - sixArr[1];
        if (sixMax < temp) {
          sixMax = temp;
        }
      }
    }
  }
}

let answer = Math.max(sixMax, stickmax);

console.log(answer);
