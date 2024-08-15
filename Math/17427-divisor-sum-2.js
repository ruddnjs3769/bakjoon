// 17427 - 약수의 합2
// var fs = require("fs");

// var input = fs.readFileSync("input.txt", "utf-8");
// var f = (y) => {
//   let answer = 0;
//   for (let i = 1; i <= y; i++) {
//     if (y % i === 0) {
//       answer += i;
//     }
//   }
//   return answer;
// };

// var g = (x) => {
//   let answer = 0;
//   for (let i = 1; i <= x; i++) {
//     answer += f(i);
//   }
//   return answer;
// };

// console.log(g(input));

// 시간 초과로 틀린 답안 - f(y)로 g(x)를 돌리면, 시간 복잡도가 엄청 증가해서 주어진 시간을 초과하게 된다. 더 효율적인 방법 생각하기.

// 두번째 풀이
var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8");
var N = Number(input);

var g = (x) => {
  let answer = 0;
  for (let i = 1; i <= x; i++) {
    answer += Math.floor(x / i) * i;
  }
  return answer;
};

console.log(g(N));
