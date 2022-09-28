let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");
let len = input.shift();
let temp;
let sum, check;
for (let i = 0; i < len; i++) {
  temp = input[i].split("X");
  sum = temp.reduce((acc, cur) => {
    check = (cur.trim().length * (cur.trim().length + 1)) / 2;

    return (acc += check);
  }, 0);
  console.log(sum);
}
