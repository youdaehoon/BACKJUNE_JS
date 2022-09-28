let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n");
input.shift();
let len = input.length;
let temp, num, avg, answer;
for (let i = 0; i < len-1; i++) {
  temp = input[i].split(" ").map(Number);
  num = temp.shift();
  avg = temp.reduce((acc, cur) => (acc += cur), 0) / num;
  answer =
    (temp.filter((v) => {
      return v > avg;
    }).length /
      num) *
    100 *
    1000;
  answer = (Math.round(answer) / 1000).toFixed(3) + "%";
  console.log(answer);
}
