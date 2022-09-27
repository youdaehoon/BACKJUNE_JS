let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n");
let [len, X] = input.shift().split(" ").map(Number);
let arr = input[0]
  .split(" ")
  .map(Number)
  .filter((v) => v < X)
  .join(" ");

console.log(arr);
