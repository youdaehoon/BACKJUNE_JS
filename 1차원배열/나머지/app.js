let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .trim()
  .split("\n")
  .map(Number);

let answer = new Set(input.map((v) => v % 42)).size;
console.log(answer);
