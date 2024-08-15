// 4375 - 1

var fs = require("fs");

const answers = [];
var input = fs
  .readFileSync("input.txt", "utf-8")
  .trim()
  .split("\n")
  .map(Number);

var caculate = function (n) {
  var num = 1;
  var count = 1;
  while (num % n !== 0) {
    num = (num * 10 + 1) % n;
    count++;
  }
  answers.push(count);
};

input.forEach((num) => caculate(num));

console.log(answers.join("\n"));
