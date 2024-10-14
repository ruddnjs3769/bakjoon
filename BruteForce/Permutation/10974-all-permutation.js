const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

const n = parseInt(input[0]);

const first = Array.from({ length: n }, (_, i) => i + 1);

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

console.log(first.join(" "));
while (nextPermutation(first)) {
  console.log(first.join(" "));
}
