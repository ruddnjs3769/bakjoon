var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

const [L, C] = input[0].split(" ").map(Number);

const apb = input[1].split(" ").sort();
let answer = [];
const vowels = ["a", "e", "i", "o", "u"];

const isValid = (seq) => {
  let vowelCount = 0;
  let consonantCount = 0;
  seq.forEach((char) => {
    if (vowels.includes(char)) vowelCount++;
    else consonantCount++;
  });
  if (vowelCount >= 1 && consonantCount >= 2) true;
  else false;
};
const solution = (start, seq) => {
  if (seq.length === L) {
    if (isValid(seq)) {
      answer.push(seq.join(""));
    }
    return;
  }
  for (let i = start; i <= C; i++) {
    solution(i + 1, [...seq, apb[i - 1]]);
  }
};

solution(1, []);

console.log(answer.join("\n"));
