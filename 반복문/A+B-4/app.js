let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n");
let len = input.length;
let answer, A, B;
answer = "";
for (let i = 0; i < len; i++) {
  [A, B] = input[i].split(" ").map(Number);
  if (A <= 0 || B >= 10 || B <= 0) break;
  answer += A + B + "\n";
}
console.log(answer);
