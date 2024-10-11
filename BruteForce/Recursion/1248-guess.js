const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

const n = parseInt(input[0]);

const Sstring = input[1];
let Sarray = [];
let index = 0;
for (let i = n; i > 0; i--) {
  Sarray.push(Sstring.slice(index, index + i));
  index += i;
}

Sarray = Sarray.map((el) => {
  el = el.split("");
  if (el.length !== n) {
    for (let i = el.length; i < n; i++) {
      el.unshift(false);
    }
  }
  return el;
});
const numbers = Array.from({ length: 21 }, (_, i) => i - 10);
let answer = [];
let temp = Array(n).fill(0);

const isValid = (index) => {
  for (let i = 0; i <= index; i++) {
    let sum = 0;
    for (let j = i; j <= index; j++) {
      sum += temp[j];
      if (Sarray[i] && Sarray[i][j] !== false) {
        if (Sarray[i][j] === "+" && sum <= 0) return false;
        if (Sarray[i][j] === "-" && sum >= 0) return false;
        if (Sarray[i][j] === "0" && sum !== 0) return false;
      }
    }
  }
  return true;
};

const solution = (index) => {
  if (index === n) {
    answer = [...temp];
    return true;
  }
  for (let num of numbers) {
    temp[index] = num;
    if (isValid(index) && solution(index + 1)) {
      return true;
    }
  }
  return false;
};
solution(0);
console.log(answer.join(" "));
