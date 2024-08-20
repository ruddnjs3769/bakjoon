const fs = require("fs");
const input = fs
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let MAX = 1000001;
let table = Array(MAX).fill(1);

for (let i = 3; i < Math.sqrt(MAX); i += 2) {
  if (table[i]) {
    for (let j = i * i; j < MAX; j += i * 2) {
      table[j] = 0;
    }
  }
}

let result = "";

for (const k of input) {
  if (k === 0) break;
  let found = false;
  for (let a = 3; a <= k / 2; a += 2) {
    if (table[a] && table[k - a]) {
      result += `${k} = ${a} + ${k - a}\n`;
      found = true;
      break;
    }
  }
  if (!found) {
    result += "Goldbach's conjecture is wrong.\n";
  }
}

console.log(result.trim());
