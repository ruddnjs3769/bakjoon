// 10430- 나머지
var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim().split(" ").map(Number);

var caculate = function (a, b, c) {
  console.log((a + b) % c);
  console.log(((a % c) + (b % c)) % c);
  console.log((a * b) % c);
  console.log(((a % c) * (b % c)) % c);
};

caculate(...input);
