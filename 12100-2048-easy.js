var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

const n = parseInt(input[0]);
const board = input.slice(1).map((el) => el.split(" ").map(Number));

const move = (board, dir) => {
  const newBoard = JSON.parse(JSON.stringify(board)); // Deep copy

  const merge = (arr) => {
    const merged = [];
    for (let i = 0; i < arr.length; i++) {
      if (i < arr.length - 1 && arr[i] === arr[i + 1]) {
        merged.push(arr[i] * 2);
        i++;
      } else {
        merged.push(arr[i]);
      }
    }
    return merged;
  };

  if (dir === 0 || dir === 1) {
    // left or right
    for (let i = 0; i < n; i++) {
      let row = newBoard[i].filter((el) => el);
      row = dir === 0 ? merge(row) : merge(row.reverse()).reverse();
      newBoard[i] =
        dir === 0
          ? [...row, ...Array(n - row.length).fill(0)]
          : [...Array(n - row.length).fill(0), ...row];
    }
  } else {
    // up or down
    for (let j = 0; j < n; j++) {
      let col = newBoard.map((row) => row[j]).filter((x) => x);
      col = dir === 2 ? merge(col) : merge(col.reverse()).reverse();
      col =
        dir === 2
          ? [...col, ...Array(n - col.length).fill(0)]
          : [...Array(n - col.length).fill(0), ...col];
      for (let i = 0; i < n; i++) {
        newBoard[i][j] = col[i];
      }
    }
  }
  return newBoard;
};

const getMaxBlock = (board) => Math.max(...board.flat());

const dfs = (board, depth) => {
  if (depth === 5) {
    return getMaxBlock(board);
  }

  let maxValue = 0;
  for (let i = 0; i < 4; i++) {
    const newBoard = move(board, i);
    if (JSON.stringify(newBoard) !== JSON.stringify(board)) {
      maxValue = Math.max(maxValue, dfs(newBoard, depth + 1));
    }
  }
  return maxValue;
};

console.log(dfs(board, 0));
