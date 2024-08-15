// 2609 최대공약수와 최소공배수

/* 유클리드 호제법 
유클리드 호제법(- 互除法, Euclidean Algorithm)은 2개의 자연수 또는 정식(整式)의 최대공약수(Greatest Common Divisor)를 구하는 알고리즘의 하나이다.

호제법이란 말은 두 수가 서로(互) 상대방 수를 나누어(除)서 결국 원하는 수를 얻는 알고리즘을 나타낸다.

2개의 자연수(또는 정식) a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면(단, a>b), a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
이 성질에 따라, b를 r로 나눈 나머지 r'를 구하고, 다시 r을 r'로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 나누는 수가 a와 b의 최대공약수이다.

이는 명시적으로 기술된 가장 오래된 알고리즘으로서도 알려져 있으며, 기원전 300년경에 쓰인 유클리드의 《원론》 제7권, 명제 1부터 3까지에 해당한다.
*/

var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").split(" "); // Array
const max = Math.max(...input);
const min = Math.min(...input);

// 재귀함수
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else return gcd(b, a % b);
};
let lcm = (max * min) / gcd(max, min);

const answer = [gcd(max, min), lcm];
console.log(answer.join("\n"));
