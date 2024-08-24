// 틀리진 않았는데 nodejs라서 메모리 초과...
var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").split(" ").map(Number);

// ex)  n % 15 = e, n % 28 = s, n % 19 = m

let e = input[0];
let s = input[1];
let m = input[2];

if (e === 15) e = 0;
if (s === 28) s = 0;
if (m === 19) m = 0;

let y = 1;

// y가 계속 증가하면서, n % 15 .. 를 수행.
while (y) {
  let ce = y % 15;
  let cs = y % 28;
  let cm = y % 19;
  if (ce === e && cs === s && cm === m) {
    break;
  }
  y++;
}

console.log(y);
