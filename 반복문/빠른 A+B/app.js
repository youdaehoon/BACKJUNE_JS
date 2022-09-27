let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n");
let len = +input.shift();
let A, B,answer="";

for (let i = 0; i < len; i++) {
  [A, B] = input[i].split(" ").map(Number);
  answer+=A+B+"\n"
}
console.log(answer)
