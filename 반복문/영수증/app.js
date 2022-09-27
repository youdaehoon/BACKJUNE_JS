let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n");
let sum = +input.shift();

let len = +input.shift();
let temp, A, B;
let tempSum = 0;
for (let i = 0; i < len; i++) {
  temp = input[i].split(" ").map(Number);
  A = temp[0];
  B = temp[1];
  tempSum += A * B;
}
tempSum === sum ? console.log("Yes") : console.log("No");
