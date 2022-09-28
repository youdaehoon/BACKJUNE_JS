let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n");
input.shift();
let arr = input[0].split(" ").map(Number);
let answer = "";
answer += Math.min(...arr) + " " + Math.max(...arr);
console.log(answer);
