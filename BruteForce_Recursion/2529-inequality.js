const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

const k = parseInt(input[0]);

const inEquailities = input[1].split(" ");

let max = "";
let maxUsed = Array(10).fill(false);
let minUsed = Array(10).fill(false);

const calculateMax = (index, cur) => {
  if (index === k + 1) {
    max = cur;
    return true;
  }
  for (let i = 9; i >= 0; i--) {
    if (maxUsed[i]) continue;
    if (index > 0) {
      const prev = parseInt(cur[index - 1]);
      if (
        (inEquailities[index - 1] === ">" && prev <= i) ||
        (inEquailities[index - 1] === "<" && prev >= i)
      ) {
        continue;
      }
    }
    maxUsed[i] = true;
    if (calculateMax(index + 1, cur + i)) {
      return true;
    }
    maxUsed[i] = false;
  }
  return false;
};

let min = "";
const calculateMin = (index, cur) => {
  if (index === k + 1) {
    min = cur;
    return true;
  }
  for (let i = 0; i < 10; i++) {
    if (minUsed[i]) continue;
    if (index > 0) {
      const prev = parseInt(cur[index - 1]);
      if (
        (inEquailities[index - 1] === ">" && prev <= i) ||
        (inEquailities[index - 1] === "<" && prev >= i)
      ) {
        continue;
      }
    }
    minUsed[i] = true;
    if (calculateMin(index + 1, cur + i)) {
      return true;
    }
    minUsed[i] = false;
  }
  return false;
};
calculateMax(0, "");
calculateMin(0, "");
console.log(max);
console.log(min);
