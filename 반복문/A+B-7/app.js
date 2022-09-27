let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n");
let len = +input.shift();
let answer = "";
let A, B;
for (let i = 0; i < len; i++) {
  [A, B] = input[i].split(" ").map(Number);
  answer += "Case #" + (i + 1) + `: ${A + B}` + "\n";
}
console.log(answer);
