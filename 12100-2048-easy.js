var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

const n = parseInt(input[0]);
const board = input.splice(1).map((el) => el.split(" ").map(Number));

const rotate = (board) => {
  let newBoard = Array.from(Array(n), () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      newBoard[j][i] = board[i][j];
    }
  }
  return newBoard;
};

const merge = (row) => {
  let newRow = row.filter((el) => el != 0);
  for (let j = 1; j < newRow.length; j++) {
    if (newRow[j] === newRow[j - 1]) {
      newRow[j - 1] *= 2;
      newRow[j] = 0;
    }
  }
  newRow = newRow.filter((el) => el != 0);
  while (newRow.length < n) {
    newRow.push(0);
  }
  return newRow;
};

const up = (board) => {
  board = rotate(board);
  let newBoard = [];
  for (let i = 0; i < n; i++) {
    let row = merge(board[i]);
    newBoard.push(row);
  }
  return rotate(newBoard);
};

const down = (board) => {
  board = rotate(board);
  let newBoard = [];
  for (let i = 0; i < n; i++) {
    let row = merge(board[i].reverse());
    newBoard.push(row.reverse());
  }
  return rotate(newBoard);
};

const left = (board) => {
  let newBoard = [];
  for (let i = 0; i < n; i++) {
    let row = merge(board[i]);
    newBoard.push(row);
  }
  return newBoard;
};

const right = (board) => {
  let newBoard = [];
  for (let i = 0; i < n; i++) {
    let row = merge(board[i].reverse());
    newBoard.push(row.reverse());
  }
  return newBoard;
};

const bfs = (n, initialBoard) => {
  let queue = [[initialBoard, 0]];
  let answer = 0;

  while (queue.length > 0) {
    const [board, count] = queue.shift();
    if (count === 5) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (answer < board[i][j]) {
            answer = board[i][j];
          }
        }
      }
    } else {
      queue.push([up([...board]), count + 1]);
      queue.push([down([...board]), count + 1]);
      queue.push([left([...board]), count + 1]);
      queue.push([right([...board]), count + 1]);
    }
  }
  console.log(answer);
};

bfs(n, board);
