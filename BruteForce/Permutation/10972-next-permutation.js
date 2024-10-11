const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

const n = parseInt(input[0]);

const p = input[1].split(" ").map(Number);

const nextPermutation = (arr) => {
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      for (let j = arr.length - 1; j > i; j--) {
        if (arr[j] > arr[i]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          arr
            .splice(i + 1)
            .reverse()
            .forEach((el) => arr.push(el));
          return true;
        }
      }
    }
  }
  return false;
};

if (nextPermutation(p)) {
  console.log(p.join(" "));
} else {
  console.log(-1);
}
