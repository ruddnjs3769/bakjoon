var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

var boardSize = parseInt(input[0]);

const candies = input
  .slice(1)
  .map((candy) => candy.split("").slice(0, boardSize));

let maxLength = 0;

// 현재 보드 상태에서 최대 연속 길이
const checkCurrentBoard = () => {
  // 행
  for (let i = 0; i < boardSize; i++) {
    let currentLength = 1;
    for (let j = 1; j < boardSize; j++) {
      if (candies[i][j] === candies[i][j - 1]) {
        currentLength++;
      } else {
        maxLength = Math.max(maxLength, currentLength);
        currentLength = 1;
      }
    }
    maxLength = Math.max(maxLength, currentLength);
  }

  // 열
  for (let i = 0; i < boardSize; i++) {
    let currentLength = 1;
    for (let j = 1; j < boardSize; j++) {
      if (candies[j][i] === candies[j - 1][i]) {
        currentLength++;
      } else {
        maxLength = Math.max(maxLength, currentLength);
        currentLength = 1;
      }
    }
    maxLength = Math.max(maxLength, currentLength);
  }
};

checkCurrentBoard();

// 교환
for (let i = 0; i < boardSize; i++) {
  for (let j = 0; j < boardSize; j++) {
    // 좌우
    if (j + 1 < boardSize) {
      [candies[i][j], candies[i][j + 1]] = [candies[i][j + 1], candies[i][j]];
      checkCurrentBoard();
      [candies[i][j], candies[i][j + 1]] = [candies[i][j + 1], candies[i][j]];
    }
    // 상하
    if (i + 1 < boardSize) {
      [candies[i][j], candies[i + 1][j]] = [candies[i + 1][j], candies[i][j]];
      checkCurrentBoard();
      [candies[i][j], candies[i + 1][j]] = [candies[i + 1][j], candies[i][j]];
    }
  }
}

console.log(maxLength);
